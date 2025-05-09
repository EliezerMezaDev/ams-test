<script lang="ts">
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';
	import { carousel } from '$lib/brands';
	import * as actions from '$lib/actions/inView';
	import { elementColors } from '$lib/store';
	import NavigationBtn from '../common/NavigationBtn.svelte';
	import type { Swiper } from 'swiper/types';
	import type { SwiperContainer } from 'swiper/element';

	let swiper: Swiper | undefined;

	const spaceBetween = 10;

	function animateElements(repeat = false) {
		$elementColors.burger = 'light';
		inView('swiper-slide', (info) => {
			animate(
				info.target.querySelector('div > img#sliderBanner') as Element,
				{ opacity: [0, 1] },
				{ duration: 0.5, delay: repeat ? 0.1 : 0.3, easing: [0.17, 0.55, 0.55, 1] }
			);
		});
	}

	const onSlideChange = () => {
		animateElements();
	};

	onMount(() => {
		swiper = document.querySelector<SwiperContainer>('swiper-container#accesoriesSlider')?.swiper;

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
		class="prev-btn"
		on:click={() => swiper?.slidePrev()}
	/>
	<swiper-container
		id="accesoriesSlider"
		class="min-h-screen w-full top-0"
		slides-per-view={1}
		space-between={spaceBetween}
		centered-slides={true}
		navigation={{
			enabled: false,
			nextEl: '.accesories-next-btn',
			prevEl: '.accesories-prev-btn',
			disabledClass: 'opacity-50'
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
		{#each carousel.accesories as accesory (accesory.name)}
			<swiper-slide
				class="min-h-screen min-w-full bg-center bg-cover flex flex-col justify-center"
				style="background-image: url({accesory.image})"
			>
				{#if accesory.logo}
					<img
						id="sliderBanner"
						class="p-8 rounded-md w-63 md:w-81 self-center"
						src={accesory.logo}
						alt={accesory.name}
					/>
				{/if}
			</swiper-slide>
		{/each}
	</swiper-container>

	<NavigationBtn
		icon="i-fa6-solid-arrow-right"
		class="accesories-next-btn"
		position="right"
		on:click={() => swiper?.slideNext()}
	/>
</section>

<style>
	swiper-container::part(pagination) {
		--swiper-pagination-bottom: 15vh;
		--swiper-pagination-color: #fff;
	}
</style>
