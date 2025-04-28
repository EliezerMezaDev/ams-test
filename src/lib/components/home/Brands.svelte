<script lang="ts">
	import { animate, stagger } from 'motion';
	import inView from '$lib/actions/inView';
	import { elementColors } from '$lib/store';
	import { brands } from '$lib/brands';

	function animateElements() {
		$elementColors.logo = 'light';
		$elementColors.burger = 'dark';
		$elementColors.copyright = 'dark';
		animate(
			'#brands > div.flex',
			{
				x: [-100, 0],
				opacity: [0, 1]
			},
			{ duration: 1, delay: stagger(0.1) }
		);
	}

	function handleExit() {
		$elementColors.logo = 'light';
		$elementColors.copyright = 'light';
	}
</script>

<section
	id="brands"
	class="min-h-screen h-screen grid grid-cols-2 gap-18 place-items-center place-content-center snap-start snap-always px-12 md:px-0 lg:w-1/3"
	use:inView={{ bottom: 100, top: 100 }}
	on:enter={animateElements}
	on:exit={handleExit}
>
	{#each brands as brand}
		<div class="flex items-center justify-center">
			{#if brand.name === 'Saffeti' || brand.name === 'SRM'}
				<img
					src={brand.image}
					alt={brand.name}
					class="max-h-[2.6rem] filter-invert-100 md:(max-h-15)"
				/>
			{:else}
				<img src={brand.image} alt={brand.name} class="max-h-[2.6rem] md:(max-h-15)" />
			{/if}
		</div>
	{/each}
</section>
