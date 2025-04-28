<script lang="ts">
	import inView from '$lib/actions/inView';
	import image from '$lib/assets/web/avila-multisports-nosotros-ciclista-parado-pedaleando.webp';
	import { timeline } from 'motion';

	function enterAnimation() {
		timeline(
			[
				[
					'#secondImg',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
							'polygon(0% 0%,100% 0%,100% 92%,0% 99%)'
						]
					},
					{ duration: 0.5, delay: 0.2 }
				],
				[
					'#secondImg > img',
					{
						opacity: [0, 1],
						filter: ['blur(10px)', 'blur(0px)']
					},
					{ duration: 0.5, delay: 0.3 }
				],
				[
					'#secondImgFill',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
							'polygon(0% 0%, 100% 0%, 100% 88.75%, 0% 83.06%)'
						]
					},
					{ duration: 0.5, delay: 0 }
				]
			],
			{
				duration: 2
			}
		);
	}
</script>

<section
	class="w-full h-screen snap-start relative"
	use:inView={{ bottom: 100, top: 100 }}
	on:enter={enterAnimation}
>
	<div id="secondImg" class="h-84vh lg:h-81.4vh">
		<img class="h-full object-cover md:(min-w-full object-top)" src={image} alt="Ciclista" />
	</div>
	<div
		id="secondImgFill"
		class="absolute top-0 right-0 bottom-0 [clip-path:polygon(0%_0.59%,_100%_0%,_100%_88.75%,_0.4%_83.06%)] bg-#ACC37E w-full -z-1 lg:h-97.2vh"
	/>
</section>
