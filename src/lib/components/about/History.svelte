<script lang="ts">
	import inView from '$lib/actions/inView';
	import { isDesktop } from '$lib/store';
	import type { Topic } from '$lib/types';
	import { animate, timeline } from 'motion';

	export let topic: Topic;

	function enterAnimation() {
		timeline(
			[
				[
					'#history',
					{
						opacity: [0, 1]
					},
					{ duration: 0.5, delay: 0.5, easing: [0.17, 0.55, 0.55, 1] }
				],
				[
					'#history > div',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
							$isDesktop
								? 'polygon(0 0, 100% 0, 100% 85.4%, 0% 91.23%)'
								: 'polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)'
						]
					},
					{ duration: 0.5 }
				],
				[
					'#history > div > h3',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.5 }
				],
				[
					'#history > div > p',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.5 }
				]
			],
			{
				duration: 2.2
			}
		);
	}

	function exitAnimation() {
		animate(
			'#history',
			{ opacity: [1, 0] },
			{ duration: 0.5, delay: 0.5, easing: [0.17, 0.55, 0.55, 1] }
		);
	}
</script>

<section
	id="history"
	class="w-full h-screen snap-start relative"
	use:inView={{ bottom: 100, top: 100 }}
	on:enter={enterAnimation}
	on:exit={exitAnimation}
>
	<div class="p-8 pt-24 bg-#003B49 h-94vh md:(pt-32 p-12) lg:pl-16">
		<h3 class="mb-4 text-2xl text-#E3D268 md:text-4xl">{topic.title}</h3>
		<div
			class="max-h-[50vh] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
		>
			<p
				class="text-0.9rem leading-normal text-#ddd md:(text-0.75rem max-w-100%) xl:(text-0.9rem) 2xl:(text-1.25rem)"
			>
				{@html topic.description}
			</p>
		</div>
	</div>
</section>
