<script lang="ts">
	import { animate, inView } from 'motion';
	import { carousel } from '$lib/brands';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import * as actions from '$lib/actions/inView';
	import { elementColors } from '$lib/store';
	import type { SwiperContainer } from 'swiper/element';
	import type { Swiper } from 'swiper/types';
	import NavigationBtn from '../common/NavigationBtn.svelte';

	let swiper: Swiper | undefined;

	const spaceBetween = 10;

	function animateElements(repeat = false) {
		$elementColors.burger = 'light';
		inView('swiper-slide', (info) => {
			animate(
				info.target.querySelector('h3') as Element,
				{ opacity: [0, 1], x: [-100, 0] },
				{ duration: 1.5, delay: repeat ? 0.1 : 0.5, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				info.target.querySelector('p') as Element,
				{ opacity: [0, 1], x: [-100, 0] },
				{ duration: 1.5, delay: repeat ? 0.3 : 0.7, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				info.target.querySelector('img#banner') as Element,
				{ opacity: [0, 1] },
				{ duration: 1.5, delay: repeat ? 0.5 : 0.9, easing: [0.17, 0.55, 0.55, 1] }
			);
		});
	}

	const onSlideChange = () => {
		animateElements();
	};

	onMount(() => {
		swiper = document.querySelector<SwiperContainer>('swiper-container#mainSlider')?.swiper;
		animateElements();
	});
</script>

<section
	class="snap-start snap-always h-screen relative"
	use:actions.inView={{ bottom: 100, top: 100 }}
	on:enter={animateElements}
>
	<NavigationBtn
		icon="i-fa6-solid-arrow-left"
		class="main-prev-btn"
		on:click={() => swiper?.slidePrev()}
	/>
	<swiper-container
		id="mainSlider"
		class="w-full"
		slides-per-view={1}
		space-between={spaceBetween}
		centered-slides={true}
		navigation={{
			enabled: false,
			nextEl: '.main-next-btn',
			prevEl: '.main-prev-btn',
			disabledClass: 'opacity-90'
		}}
		pagination={{}}
		breakpoints={{
			1024: {
				pagination: false,
				navigation: true
			}
		}}
		on:swiperslidechange={onSlideChange}
	>
		{#each carousel.hardware as item (item.name)}
			<swiper-slide
				class="min-h-screen min-w-full bg-cover bg-[-45em] flex flex-col justify-start pt-36 pl-10 items-start gap-4 md:(pt-40 gap-6 bg-center) lg:(pl-24 pt-52)"
				style="background-image: url({item.image})"
			>
				<h3
					class="text-#E3D268 text-2xl font-light max-w-[80%] text-shadow-xl md:(text-4xl max-w-70%) lg:text-5xl"
					in:blur
				>
					{item.copy.main}
				</h3>
				<p
					class="text-white max-w-[80%] text-shadow-xl md:(text-xl max-w-60%) lg:(text-2xl max-w-45%)"
				>
					{item.copy.secondary}
				</p>
				{#if item.name === 'Inspire logo'}
					<img
						src={item.logo}
						alt={item.name}
						loading="lazy"
						class="filter-invert-100 w-60% md:(w-30% mt-12)"
					/>
				{:else}
					<img src={item.logo} alt={item.name} loading="lazy" class="w-60% md:(w-30% mt-12)" />
				{/if}
			</swiper-slide>
		{/each}
	</swiper-container>
	<NavigationBtn
		icon="i-fa6-solid-arrow-right"
		class="main-next-btn"
		position="right"
		on:click={() => swiper?.slideNext()}
	/>
</section>

<style>
	swiper-container::part(pagination) {
		--swiper-pagination-bottom: 5rem;
		--swiper-pagination-color: #fff;
	}
</style>
