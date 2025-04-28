// uno.config.ts
import { defineConfig } from 'unocss';
import {
	presetUno,
	presetIcons,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';
import extractorSvelte from '@unocss/extractor-svelte';
import * as theme from './src/lib/config/theme.json';

let fontPrimary, fontPrimaryType;
// let fontBase = Number(theme.fonts.font_size.base.replace('px', ''));
// let fontScale = Number(theme.fonts.font_size.scale);

// let h6 = fontBase / fontBase;
// let h5 = h6 * fontScale;
// let h4 = h5 * fontScale;
// let h3 = h4 * fontScale;
// let h2 = h3 * fontScale;
// let h1 = h2 * fontScale;

if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, ' ')
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, '');
  fontPrimaryType = theme.fonts.font_family.primary_type;
}

const getColor = (item: string = ''): string | Record<string, string> => {
  const mapped: Record<number, string> & { [key: string]: string } = {};

  Object.entries(theme.colors.default.theme_color).forEach(([key, val]) => {
    mapped[key.replace('color_', '')] = val;
  });

  return item ? mapped[item] : mapped;
};

export default defineConfig({
	presets: [presetUno(), presetWebFonts({
		fonts: {
			primary: [
				{
					name: fontPrimary as string,
					weights: [
						'400', '500', '600', '700', '800', '900'
					]
				},
				{ name: fontPrimaryType, provider: 'google' }
			]
		}
	}), presetIcons(), presetForms()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [extractorSvelte()],
	theme: {
		colors: {
			color: getColor(),
		},
		breakpoints: {
			xs: '340px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1366px'
		},
		container: {
      center: true,
      maxWidth: {
        xs: '330px',
        sm: '520px',
        md: '920px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1690px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
		rules: [
			[/^border-color-(\d)$/, ([, d]) => ({ 'border-color': getColor(d) })],
		],
	},
});
