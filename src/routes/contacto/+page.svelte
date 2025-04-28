<script lang="ts">
	import { onMount } from 'svelte';
	import { elementColors } from '$lib/store';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import ContactMap from '$lib/components/contact/ContactMap.svelte';

	onMount(() => {
		$elementColors.logo = 'light';
		$elementColors.burger = 'light';
		$elementColors.copyright = 'dark';
	});
</script>

<svelte:head>
	<title>Contáctanos</title>
</svelte:head>

<div class="lg:(flex flex-row)">
	<!-- <History topic={data.content.topics[0]} /> -->
	<ContactForm />
	<ContactMap />
</div>
