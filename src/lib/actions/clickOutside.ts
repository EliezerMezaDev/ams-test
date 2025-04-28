import type { Action } from 'svelte/action';

// export default (node, parameters) => {
// 	const { exclude = [], handler } = parameters;
// 	const clickHandler = (event) => {
// 		if (
// 			!node.contains(event.target) &&
// 			!exclude.some((excludedNode) => excludedNode.contains(event.target))
// 		) {
// 			handler();
// 		}
// 	};

// 	const options = {
// 		capture: true,
// 		passive: true
// 	};
// 	document.addEventListener('click', clickHandler, options);

// 	return {
// 		destroy() {
// 			document.removeEventListener('click', clickHandler, options);
// 		}
// 	};
// };

/** Dispatch event on click outside of node */
export const clickOutside: Action<HTMLElement> = (node) => {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickoutside', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
