<script lang="ts">
	import { timeline } from 'motion';
	import image from '$lib/assets/web/avila-multisports-nosotros-2-miembros-equipos-ciclismo.webp';
	import inView from '$lib/actions/inView';

	function enterAnimation() {
		timeline(
			[
				[
					'#thirdImg',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
							'polygon(0% 0%,100% 0%,100% 92%,0% 99%)'
						]
					},
					{ duration: 1, delay: 0.2 }
				],
				[
					'#thirdImg > img',
					{
						opacity: [0, 1],
						filter: ['blur(10px)', 'blur(0px)']
					},
					{ duration: 1, delay: 0.3 }
				],
				[
					'#thirdImgFill',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
							'polygon(0% 0%, 100% 0%, 100% 88.75%, 0% 83.06%)'
						]
					},
					{ duration: 1, delay: 0 }
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
	<div id="thirdImg" class="h-84vh lg:h-81.4vh">
		<img class="h-full object-cover md:(min-w-full)" src={image} alt="Ciclista" />
	</div>
	<div
		id="thirdImgFill"
		class="absolute top-0 right-0 bottom-0 [clip-path:polygon(0%_0.59%,_100%_0%,_100%_88.75%,_0.4%_83.06%)] bg-#93B7BB w-full -z-1 lg:h-97.2vh"
	/>
</section>
