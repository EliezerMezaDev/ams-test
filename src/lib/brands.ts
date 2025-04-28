// Logos - Hardware
import willierLogo from '$lib/assets/brands/avila-multisports-marcas-willier.webp';
import inspireLogo from '$lib/assets/brands/avila-multisports-marcas-inspire.webp';
import trueLogo from '$lib/assets/brands/avila-multisports-marcas-true.webp';

// Logos - Accessories
import NZManufacturingLogo from '$lib/assets/brands/avila-multisports-marcas-nz-manufacturing.webp';
import safettiLogo from '$lib/assets/brands/avila-multisports-marcas-safetti.webp';
import SRMLogo from '$lib/assets/brands/avila-multisports-marcas-srm.webp';

// Images - Hardware
import willierImage from '$lib/assets/main/avila-multisports-principal-tubo-direccion-bicicleta-WILLIER.webp';
import inspireImage from '$lib/assets/main/avila-multisports-principal-mujer-de-espalda-multifuncional-INSPIRE.webp';
import trueImage from '$lib/assets/main/avila-multisports-principal-personas-corriendo-treadmills-TRUE.webp';

// Images - Accesories
import NZManufacturingImage from '$lib/assets/accesories/avila-multisports-accesorios-nadador-sumergido-piscina.webp';
import safettiImage from '$lib/assets/accesories/avila-multisports-accesorios-ciclistas-vestidos-safetti.webp';
import SRMImage from '$lib/assets/accesories/avila-multisports-accesorios-plato-bicicleta-SRM.webp';

export const brands = [
	{
		name: 'Willier logo',
		image: willierLogo
	},
	{
		name: 'Inspire logo',
		image: inspireLogo
	},
	{
		name: 'True logo',
		image: trueLogo
	},
	{
		name: 'NZ Manufacturing',
		image: NZManufacturingLogo
	},
	// {
	// 	name: 'Saffeti',
	// 	image: safettiLogo
	// },
	{
		name: 'SRM',
		image: SRMLogo
	}
];

export const carousel = {
	hardware: [
		{
			name: 'Willier logo',
			copy: {
				main: 'Somos representantes exclusivos',
				secondary:
					'Una excelente aplicación para ciclistas que desean una bicicleta de carretera italiana de alta rendimiento'
			},
			logo: willierLogo,
			image: willierImage
		},
		{
			name: 'Inspire logo',
			copy: {
				main: 'Inspirados para ofrecer los mejores productos',
				secondary: 'Otra gran descripcion aca'
			},
			logo: inspireLogo,
			image: inspireImage
		},
		{
			name: 'True logo',
			copy: {
				main: 'Somos representantes exclusivos',
				secondary: 'Tu mejor aliado para tus actividades fitness'
			},
			logo: trueLogo,
			image: trueImage
		}
	],
	accesories: [
		{
			name: 'NZ Manufacturing',
			logo: NZManufacturingLogo,
			image: NZManufacturingImage
		},
		// {
		// 	name: 'Saffeti',
		// 	logo: safettiLogo,
		// 	image: safettiImage
		// },
		{
			name: 'SRM',
			logo: SRMLogo,
			image: SRMImage
		}
	]
};
