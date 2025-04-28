<script lang="ts">
	import { timeline } from 'motion';
	import { elementColors, isDesktop } from '$lib/store';
	import inView from '$lib/actions/inView';

	let classname = '';

	export { classname as class };

	function animateElements() {
		timeline(
			[
				'bg',
				[
					'#featuredMessage > div.max-h-screen',
					{
						clipPath: [
							'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
							$isDesktop
								? 'polygon(0% 0%,80% 0%,100% 100%,0% 100%)'
								: 'polygon(0% 0%,70% 0%,100% 100%,0% 100%)'
						]
					},
					{ duration: 0.5, at: 'bg' }
				],
				[
					'#featuredMessage > div.absolute',
					{
						opacity: [0, 1],
						x: [-200, 0],
						clipPath: [
							'polygon(0% 0%, 100% 0%, 100% 99.41%, 0% 100%)',
							'polygon(0.08% 0.12%, 100% 0%, 82.52% 41.59%, 1.2% 89.93%)'
						]
					},
					{ duration: 0.5, delay: 0.3, at: 'bg' }
				],
				[
					'#featuredMessage h4',
					{ opacity: [0, 1], x: [-100, 0] },
					{ duration: 0.5, delay: 0.2, at: 'bg' }
				],
				[
					'#featuredMessage p',
					{ opacity: [0, 1], x: [-100, 0] },
					{ duration: 0.5, delay: 0.4, at: 'bg' }
				]
			],
			{ duration: 2 }
		);
	}
</script>

<section
	id="featuredMessage"
	class="relative snap-start snap-always max-h-screen min-h-screen w-full lg:w-1/2 {classname}"
	use:inView={{ bottom: 100, top: 100 }}
	on:enter={animateElements}
>
	<div
		class="max-h-screen h-screen bg-[#003B49] z-3 flex flex-col justify-center pl-6 md:(pl-10) lg:(pl-16 gap-8)"
	>
		<h4
			class="text-[#E3D268] text-lg opacity-0 font-300 max-w-18rem z-4 md:(text-3xl max-w-lg text-balance) lg:(max-w-32rem)"
		>
			Somos representantes exclusivos de Wilier e Inspire Fitness. También, distribuidores de
			equipos True
		</h4>
		<p
			class="text-[#DDDDDD] font-300 opacity-0 max-w-18rem mt-4 md:(text-2xl max-w-sm) lg:(text-2xl max-w-31rem)"
		>
			Ofrecemos su garantía comercial además de brindarte el servicio que te mereces. Tenemos a tu
			disposición una selección de las mejores bicicletas y equipos
		</p>
	</div>
	<div
		class="absolute top-0 right-0 bottom-0 [clip-path:polygon(70.23%_0%,_100%_0%,_82.52%_41.59%,_72.71%_10.19%)] bg-[#93B7BB] w-full -z-1"
	></div>
</section>
