<script lang="ts">
	import Brands from '$lib/components/home/Brands.svelte';
	import FeaturedMessage from '$lib/components/home/FeaturedMessage.svelte';
	import Main from '$lib/components/home/Main.svelte';
	import Slider from '$lib/components/home/Slider.svelte';

	interface Data {
		brands: Record<string, any>[];
		carousel: Record<string, any>[];
		highlight: Record<string, any>[];
		main_carousel: Record<string, any>[];
		page_title: string;
		title: string;
	}

	export let data: {
		content: Data;
	};
</script>

<svelte:head>
	<title>{data.content.title}</title>
</svelte:head>

<Main />
<div class="lg:flex">
	<FeaturedMessage class="lg:w-1/2" />
	<Brands class="lg:w-1/2" />
</div>
<Slider />
