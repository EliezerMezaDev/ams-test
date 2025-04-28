<script>
	import { elementColors, isDesktop, isOpen } from '$lib/store';
	import { blur } from 'svelte/transition';
	import NovanetLogo from '../common/NovanetLogo.svelte';
	import { page } from '$app/stores';

	$: $isDesktop = window.matchMedia('(min-width: 1024px)').matches;

	$: isLight =
		$elementColors.copyright === 'light' || $isOpen || ($isDesktop && $page.url.pathname === '/');
</script>

<footer
	class="flex justify-between items-center fixed bottom-6 w-full z-10 px-8 lg:px-16"
	transition:blur={{ amount: 10 }}
>
	<section class="flex gap-2 items-center">
		<p class="text-xs {isLight ? 'text-white' : 'text-[#55555A]'} md:text-sm">Sitio hecho por</p>
		<NovanetLogo height={24} class="w-18 p-0 m-0 md:w-24" isDark={!isLight} />
	</section>
	<section class="flex gap-2 md:gap-4">
		<button
			class="w-8 h-8 rounded-full bg-[#93B7BB] text-[#003B49] flex items-center justify-center md:(w-10 h-10)"
		>
			<a href="/#" target="_blank">
				<div class="i-fa6-brands-whatsapp text-lg"></div>
			</a>
		</button>

		<button
			class="w-8 h-8 rounded-full bg-[#ACC37E] text-[#003B49] flex items-center justify-center md:(w-10 h-10)"
		>
			<a href="/#" target="_blank">
				<div class="i-fa6-brands-facebook-f text-lg"></div>
			</a>
		</button>

		<button
			class="w-8 h-8 rounded-full bg-[#E3D268] text-[#003B49] flex items-center justify-center md:(w-10 h-10)"
		>
			<a href="https://www.instagram.com/avilamultisport/" target="_blank">
				<div class="i-fa6-brands-instagram text-lg"></div>
			</a>
		</button>
	</section>
</footer>
