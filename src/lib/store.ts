import { writable } from 'svelte/store';

type ColorTheme = 'light' | 'dark';

interface ElementColor {
	logo: ColorTheme;
	burger: ColorTheme;
	copyright: ColorTheme;
}

export const isOpen = writable(false);
export const isDesktop = writable(false);
export const scrollY = writable(0);
export const elementColors = writable<ElementColor>({
	logo: 'light',
	burger: 'light',
	copyright: 'light'
});
