<script lang="ts">
	import { onMount } from 'svelte';
	import { stagger, timeline } from 'motion';
	import { page } from '$app/stores';
	import { elementColors } from '$lib/store';
	import { getImageUrl } from '$lib/utils';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ SubcategoryProducts } = data);

	$: productName = $page.params.product;
	$: category = $SubcategoryProducts?.data?.subcategories?.data[0]?.attributes?.categoria?.data;
	$: products = $SubcategoryProducts?.data?.subcategories?.data[0].attributes?.productos?.data;

	function animation() {
		timeline(
			[
				[
					'#products',
					{
						opacity: [0, 1],
						background: ['#fff', '#003B49']
					},
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#products #image',
					{ opacity: [0, 1], filter: ['blur(2px)', 'blur(0)'] },
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#products #middle',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.1, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#products #middle #name',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.3, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#products #top',
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
					'#products #bottom',
					{
						opacity: [0, 1],
						clipPath: ['polygon(40% 70%, 0 0, 100% 0)', 'polygon(32% 60%, 0 0, 100% 0)']
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				['#products h3', { opacity: [0, 1], y: [-10, 0] }, { duration: 1, easing: 'ease-out' }],
				[
					'#products ul li',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 1, easing: 'ease-out', delay: stagger(0.1) }
				]
			],
			{
				duration: 2
			}
		);
	}

	onMount(() => {
		$elementColors.copyright = 'dark';
		animation();
	});
</script>

<section id="products" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18">
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
					{category?.attributes?.name}
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

	<div class="-mt-12 bg-#fff w-full min-h-full lg:-mt-20">
		<h3 class="mt-24 text-center text-2xl text-#003B49 first-letter:uppercase md:text-3xl lg:mt-20">
			{productName}
		</h3>
		<ul
			class="px-12 pt-10 mb-18 pb-12 flex flex-col gap-8 min-h-screen lg:(flex-row min-h-full items-start justify-center mb-0 pt-10 max-w-70% mx-auto mb-24)"
		>
			{#if $SubcategoryProducts.fetching}
				<p>Cargando...</p>
			{:else}
				{#each products as product (product?.attributes?.name)}
					<li class="border-b pb-3 border-b-#DDDDDD md:mx-auto lg:(last:mx-0)">
						<img
							class="lg:max-w-350px"
							src={getImageUrl(product?.attributes?.image?.data?.attributes?.url)}
							alt={product?.attributes?.name}
						/>
						<h4 class="text-#003B49 text-lg font-bold mt-4">{product?.attributes?.name}</h4>
						<button>Ver especificaciones</button>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</section>
