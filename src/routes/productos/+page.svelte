<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { animate, stagger, timeline } from 'motion';
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { elementColors } from '$lib/store';
	import { getImageUrl } from '$lib/utils';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Categories } = data);

	let active = '';

	function topAnimation(node: any) {
		const ctrl = animate(
			node,
			{ y: [10, 0], opacity: [0, 1] },
			{ duration: 0.2, easing: 'ease-out' }
		);

		return {
			duration: ctrl.duration,
			tick: (t: number, u: number) => {
				// ctrl.currentTime = t;
			}
		};
	}

	function middleAnimation(node: any) {
		const an = animate(
			node,
			{ background: ['#93B7BB', '#93B7BB80'], opacity: [0, 1] },
			{ duration: 0.2, easing: 'ease-out' }
		);

		return {
			duration: an.duration,
			tick: () => {
				// console.log(t);
			}
		};
	}

	function handleActive(item: string | undefined) {
		if (!item) return;

		if (item === active) {
			goto(`/productos/${item}`);
			return;
		}

		active = item;
	}

	function animateElements() {
		timeline(
			[
				[
					'#productCategories',
					{ opacity: [0, 1], background: ['#fff', '#003B49'] },
					{ duration: 0.5, easing: 'ease-out' }
				],
				[
					'#productCategories > h3',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.5, easing: 'ease-out' }
				],
				[
					'#productCategories > ul > button',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 0.5, easing: 'ease-out', delay: stagger(0.1) }
				]
			],
			{
				duration: 2
			}
		);
	}

	onMount(() => {
		animateElements();
		$elementColors.copyright = 'light';
	});
</script>

<section
	id="productCategories"
	class="h-screen max-h-screen bg-#003B49 flex flex-col items-center pt-28 p-8 overflow-y-auto"
>
	<h3 class="text-2xl text-#E3D268 md:text-3xl">Productos</h3>
	<ul
		class="px-6 mt-8 pb-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:(grid-cols-3)"
		use:clickOutside
		on:clickoutside={() => (active = '')}
	>
		{#if $Categories.data?.categories?.data.length}
			{#each $Categories.data?.categories?.data as category (category?.attributes?.name)}
				<button
					on:click|preventDefault={() => handleActive(category?.attributes?.name?.toLowerCase())}
				>
					<li id={category?.attributes?.name?.toLowerCase()} class="relative max-w-full">
						<div
							id="top"
							class={`absolute top-0 left-0 w-full h-6 transition ease [clip-path:polygon(0%_0%,_100%_0%,_19.74%_81.25%)] ${
								active === category?.attributes?.name?.toLowerCase()
									? ' bg-#93B7BB'
									: 'bg-#93B7BB/75 md:bg-#93B7BB/50'
							}`}
							in:topAnimation
						/>
						<div
							id="middle"
							class={`absolute bottom-0 left-0 w-full h-8 md:h-12 flex justify-center items-center gap-2 [clip-path:polygon(60%_0,_94%_23%,_100%_100%,_0_100%,_8%_8%)] transition ease z-10 ${
								active === category?.attributes?.name?.toLowerCase()
									? ' bg-#93B7BB'
									: 'bg-#93B7BB/75 md:bg-#93B7BB/50'
							}`}
							in:middleAnimation
						>
							<h4 id="name" class="text-#003B49 font-bold text-xl sm:text-2xl lg:text-3xl">
								{category?.attributes?.name}
							</h4>
							<div
								class="i-ph-arrow-right-bold text-xl md:text-2xl text-#003B49"
								transition:fly={{ x: -10, delay: 0.5 }}
							></div>
						</div>

						<img
							id="image"
							src={getImageUrl(category?.attributes?.image?.data?.attributes?.url)}
							alt={category?.attributes?.name}
						/>
					</li>
				</button>
			{/each}
		{/if}
	</ul>
</section>
