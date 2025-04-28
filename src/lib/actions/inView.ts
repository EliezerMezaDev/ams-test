/**
 * This action triggers a custom event on node entering/exiting the viewport.
 * example:
 * <p
 * 	use:inView
 * 	on:enter={() => console.log("enter")}
 * 	on:exit={() => console.log("exit")}
 * >
 *
 * optional params { root, top, bottom }
 * top and bottom are numbers
 * use:inView={ bottom: 100 } // 100 pixels from bottom of viewport
 */

import type { Action } from 'svelte/action';

type InViewParams = {
	root?: Element | Document | null;
	top?: number;
	bottom?: number;
};

export const inView: Action<HTMLElement, InViewParams> = (node, params = {}) => {
	let observer: IntersectionObserver;

	const handleIntersect: IntersectionObserverCallback = (e) => {
		const v = e[0].isIntersecting ? 'enter' : 'exit';
		node.dispatchEvent(new CustomEvent(v));
	};

	const setObserver = ({ root, top, bottom }: Partial<InViewParams>) => {
		const marginTop = top ? top * -1 : 0;
		const marginBottom = bottom ? bottom * -1 : 0;
		const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
		const options = { root, rootMargin };
		if (observer) observer.disconnect();
		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(node);
	};

	setObserver(params as InViewParams);

	return {
		update(params) {
			setObserver(params as InViewParams);
		},

		destroy() {
			if (observer) observer.disconnect();
		}
	};
};

export default inView;
