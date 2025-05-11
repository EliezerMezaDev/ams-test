<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { elementColors } from '$lib/store';
	import { getImageUrl } from '$lib/utils';
	import { stagger, timeline } from 'motion';
	import { onMount } from 'svelte';
	import { blur, fly } from 'svelte/transition';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Subcategories } = data);

	let active = '';

	$: categoryName = $page.url.pathname.split('/')[2];
	$: category = $Subcategories?.data?.subcategories?.data[0]?.attributes?.categoria?.data || {};

	function animation() {
		timeline(
			[
				[
					'#categories',
					{
						opacity: [0, 1],
						background: ['#fff', '#003B49']
					},
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#categories #image',
					{ opacity: [0, 1], filter: ['blur(2px)', 'blur(0)'] },
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#categories #middle',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.1, easing: 'ease-out' }
				],
				[
					'#categories #middle #name',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.3, easing: 'ease-out' }
				],
				[
					'#categories #top',
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
					'#categories #bottom',
					{
						opacity: [0, 1],
						clipPath: ['polygon(40% 70%, 0 0, 100% 0)', 'polygon(32% 60%, 0 0, 100% 0)']
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				[
					'#categories ul > button',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 0.5, easing: 'ease-out', delay: stagger(0.1) }
				]
			],
			{
				duration: 2
			}
		);
	}

	function handleActive(item: string) {
		if (item === active) {
			goto(`/productos/${categoryName}/${item}`);
			return;
		}

		active = item;
	}

	onMount(() => {
		$elementColors.copyright = 'dark';
		animation();
	});
</script>

<section id="categories" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18">
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
				<h4 id="name" class="text-#003B49 font-bold text-lg md:text-3xl lg:text-4xl">
					{category?.attributes?.name ?? categoryName}
				</h4>
			</div>
			<img
				id="image"
				class="md:min-w-full object-cover object-center"
				src={getImageUrl(category?.attributes?.image?.data?.attributes?.url)}
				alt={category?.attributes?.name}
			/>
		</div>
		<div
			id="bottom"
			class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB lg:h-80px"
		/>
	</div>
	<ul
		class="px-12 pt-18 pb-20 md:pb-30 gap-8 -mt-10 min-h-full bg-#fff w-full"
		use:clickOutside
		on:clickoutside={() => (active = '')}
	>
		<div class="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:(grid-cols-3)">
			{#if $Subcategories.fetching}
				<p>Cargando...</p>
			{:else}
				{#each $Subcategories?.data?.subcategories?.data as subcategory (subcategory?.attributes.name)}
					<button
						class="flex justify-center"
						on:click|preventDefault={() =>
							handleActive(subcategory?.attributes.name?.toLowerCase())}
					>
						<li class="relative max-w-360px">
							<img
								class="w-full"
								src={getImageUrl(subcategory?.attributes?.image?.data?.attributes?.url)}
								alt={subcategory?.attributes.name}
							/>

							<div
								class={`absolute bottom-0 left-0 w-full flex justify-center items-center backdrop-blur-2px [clip-path:polygon(3%_7%,_93%_0,_100%_50%,_100%_100%,_5%_98%,_0%_50%)] transition ease ${
									active === subcategory?.attributes?.name?.toLowerCase()
										? 'bg-#003B49'
										: 'bg-#003B49/70'
								}`}
								transition:blur
							>
								<h5 class="font-bold text-xl text-white first-letter:uppercase">
									{subcategory?.attributes?.name}
								</h5>
								<div
									class="i-ph-arrow-right text-white text-xl"
									transition:fly={{ x: 10, delay: 300 }}
								></div>
							</div>
						</li>
					</button>
				{/each}
			{/if}
		</div>
	</ul>
</section>
