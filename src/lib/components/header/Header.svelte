<script lang="ts">
	import { page } from '$app/stores';
	import { scrollY } from '$lib/store';
	import AmsLogo from './AmsLogo.svelte';
	import BurgerMenu from './BurgerMenu.svelte';

	let sticky = false;

	$: {
		if ($scrollY > 100 && $page.url.pathname.includes('productos')) sticky = true;
		else sticky = false;
	}
</script>

<header
	class="flex items-center justify-between z-99 p-6 fixed {sticky
		? 'bg-#003B49'
		: 'bg-transparent'} top-0 w-full transition ease lg:(p-12 px-16)"
>
	<AmsLogo />
	<BurgerMenu />
</header>
