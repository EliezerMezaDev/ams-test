<script lang="ts">
	import { elementColors } from '$lib/store';
	import { stagger, timeline } from 'motion';
	import { onMount } from 'svelte';
	import type { Topic } from '$lib/types';
	import { coaches, coachesBanner } from '$lib/coaches';

	interface Coaches {
		name: string;
		title: string;
	}

	interface Data {
		title: string;
		page_title: string;
		coaches: Coaches[];
		topics: Topic[];
	}

	export let data: { content: Data };

	const info = {
		title: data.content.topics[0].title,
		content: data.content.topics[0].description
	};

	function getColors(index: number) {
		const colors: { [key: number]: { li: string; path: string } } = {
			0: {
				li: 'bg-#93B7BB border-#93B7BB',
				path: 'bg-#93B7BB'
			},
			1: {
				li: 'bg-#ACC37E border-#ACC37E',
				path: 'bg-#ACC37E'
			},
			2: {
				li: 'bg-#E3D268 border-#E3D268',
				path: 'bg-#E3D268'
			}
		};

		return colors[index] || colors[0];
	}

	onMount(() => {
		$elementColors.copyright = 'dark';

		timeline(
			[
				[
					'#coaches',
					{
						opacity: [0, 1],
						background: ['#fff', '#003B49']
					},
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#coaches #image',
					{ opacity: [0, 1], filter: ['blur(2px)', 'blur(0)'] },
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#coaches #middle',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.1, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#coaches #middle #name',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.3, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#coaches #top',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 100%, 100% 100%, 90% 70%)',
							'polygon(0% 100%, 100% 100%, 73.49% 50.75%)'
						]
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				[
					'#coaches #bottom',
					{
						opacity: [0, 1],
						clipPath: ['polygon(40% 70%, 0 0, 100% 0)', 'polygon(32% 60%, 0 0, 100% 0)']
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				['#coaches ul h3', { opacity: [0, 1], y: [-10, 0] }, { duration: 1, easing: 'ease-out' }],
				[
					'#coaches ul li',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 1, easing: 'ease-out', delay: stagger(0.2) }
				]
			],
			{
				duration: 2
			}
		);
	});
</script>

<section id="coaches" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18">
	<div class="w-full">
		<div
			id="top"
			class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#93B7BB lg:h-80px"
		/>
		<div class="w-full h-36 relative overflow-hidden lg:h-300px">
			<div
				id="middle"
				class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#93B7BB/50 gap-2 z-2"
			>
				<h4 id="name" class="text-#003B49 font-bold text-2xl md:text-3xl lg:text-4xl">Coaches</h4>
			</div>
			<img
				id="image"
				class="md:min-w-full min-h-full object-cover object-center"
				src={coachesBanner}
				alt="Coaches banner"
			/>
		</div>
		<div
			id="bottom"
			class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB lg:h-80px"
		/>
	</div>

	<p class="hidden">{info.content}</p>

	<div class="-mt-12 bg-#fff w-full min-h-full md:px-12 lg:-mt-20">
		<ul
			class="px-12 pt-45 mb-18 pb-12 flex flex-col gap-40 min-h-screen md:(mt-40 gap-70) lg:(flex-row min-h-full justify-center mx-auto mb-0 pt-10 mb-24 gap-6 px-0)"
		>
			{#each coaches as coach, index}
				<li
					class="p-6 flex-1 md:mx-auto relative border md:p-16 lg:(last:mx-0 p-8 pt-12 pb-12) {getColors(
						index
					).li}"
				>
					<div
						id="coachesTop"
						class="w-full absolute left-0 -top-65px h-16 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] md:[clip-path:polygon(0%_100%,_100%_100%,_73.49%_0%)] lg:(h-80px -top-81px [clip-path:polygon(0%_100%,_100%_100%,_80.35%_35%)]) {getColors(
							index
						).path}"
					/>
					<div
						class="absolute flex justify-center left-0 right-0 -top-100px md:-top-180px lg:-top-8.5rem"
					>
						<img
							class="max-w-128px md:max-w-14rem lg:max-w-12rem"
							src={coach.avatar}
							alt={coach.name}
						/>
					</div>
					<div class="flex justify-center">
						<a
							href={coach.instagramProfile}
							target="_blank"
							class="flex items-center gap-2 text-2xl text-#55555A hover:text-#47474d"
						>
							<h4 class=" text-center font-bold mt-4 text-xl md:text-3xl">
								{coach.name}
							</h4>
							<div class="i-fa6-brands-instagram mt-4"></div>
						</a>
					</div>
					<div class="text-#55555A font-700 text-sm text-center md:text-base">
						Especialidad: <span class="text-sm font-300 md:text-base">{coach.speciality}</span>
					</div>
					<p class="text-pretty text-#55555A text-sm mt-2 md:(text-base mt-4)">{coach.shortBio}</p>
					<div
						id="coachesBottom"
						class="absolute -bottom-48px left-0 w-full h-12 [clip-path:polygon(32%_60%,_0_0,_100%_0)] md:[clip-path:polygon(14%_97%,_0_0,_100%_0)] lg:(h-80px -bottom-81px [clip-path:polygon(18%_50%,_0_0,_100%_0)]) {getColors(
							index
						).path}"
					/>
				</li>
			{/each}
		</ul>
	</div>
</section>
