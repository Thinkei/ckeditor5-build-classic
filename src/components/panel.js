import BalloonPanelView from '@ckeditor/ckeditor5-ui/src/panel/balloon/balloonpanelview';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';

export class EhPanel {
	constructor(editor) {
		this.panel = new BalloonPanelView(editor.locale);
		this.stackView = new Map();
		// add panel to editor
		editor.ui.view.body.add(this.panel);
		editor.ui.focusTracker.add(this.panel.element);
	}

	add(viewConfig) {
		if (this.hasView(viewConfig.view)) {
			return;
		}

		// make sure the view collection always contains 1 item when adding new view
		if (this.visibleView()) {
			this.panel.content.remove(this.visibleView());
		}

		this.stackView.set(viewConfig.view, viewConfig);

		this.show(viewConfig);
	}

	remove(view) {
		if (!this.hasView(view)) {
			return;
		}

		if (this.visibleView() === view) {
			this.panel.content.remove(view);

			this.stackView.delete(view);

			// if there is still a view in stack then show it
			const lastView = Array.from(this.stackView.values()).pop();

			if (lastView) {
				this.show(lastView);
			} else {
				// if not just hide the panel
				this.panel.hide();
			}
		} else {
			// if this view is not a current visible view, just delete it
			this.stackView.delete(view);
		}
	}

	hasView(view) {
		return this.stackView.has(view);
	}

	visibleView() {
		const item = this.stackView.get(this.panel.content.get(0));
		return item ? item.view : null;
	}

	show({ view, balloonClassName = '' }) {
		this.panel.className = balloonClassName;

		this.panel.content.add(view);
		this.panel.pin(this.getBalloonPosition());
	}

	getBalloonPosition() {
		return Array.from(this.stackView.values()).pop().position;
	}

	updatePosition(position) {
		if (position) {
			this.stackView.get(this.visibleView()).position = position;
		}

		this.panel.pin(this.getBalloonPosition());
	}
}
