<script>
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { isOpen } from '$lib/store';
	import { animate, stagger } from 'motion';

	function disableScroll() {
		document.body.style.overflow = 'hidden';
		document.body.style.userSelect = 'none';
	}

	function enableScroll() {
		document.body.style.overflow = 'auto';
		document.body.style.userSelect = 'auto';
	}

	const ADDITIONAL_OFFSET = 13;

	const getActiveOffset = (item) => item.offsetTop + ADDITIONAL_OFFSET;

	function moveMarker(offset) {
		const marker = document.querySelector('.marker');
		marker.style.top = `${offset}px`;
	}

	const menuItems = [
		{
			name: 'Inicio',
			path: '/'
		},
		{
			name: 'Nosotros',
			path: '/nosotros'
		},
		{
			name: 'Productos',
			path: '/productos'
		},
		{
			name: 'Coaches',
			path: '/coaches'
		},
		{
			name: 'Contacto',
			path: '/contacto'
		}
	];

	$: if ($isOpen) {
		animate(
			'.link',
			{ x: [-200, 0], opacity: [0, 1] },
			{
				delay: stagger(0.1),
				duration: 0.2,
				easing: [0.22, 0.03, 0.26, 0.1]
			}
		);
	}

	$: $isOpen ? disableScroll() : enableScroll();
	$: current = $page.url.pathname;

	$: if ($isOpen) {
		const item = menuItems.find((el) => {
			if (el.path === current) {
				return el;
			}

			if (current.includes('productos') && el.path === '/productos') {
				return el;
			}
		});

		const element = document.querySelector(`a[href="${item?.path}"]`);

		moveMarker(getActiveOffset(element));
	}

	beforeNavigate(() => {
		$isOpen = false;
	});
</script>

<menu
	class="fixed w-full min-h-screen bg-[#003B49] text-white shadow-lg top-0 bottom-0 z-10 max-h-screen overflow-hidden min-h-screen transition transition-right ease-in-out lg:(transition-right w-25%) {$isOpen
		? 'right-0'
		: '-right-full'}"
	class:open={$isOpen}
>
	<nav class="p-12 text-2xl flex flex-col gap-4 items-center mt-24 relative lg:(pr-20 items-end)">
		{#each menuItems as item}
			<a
				class="link block {current === item.path
					? 'text-#e3d268'
					: current.includes('productos') && item.path === '/productos' && 'text-#e3d268'}"
				href={item.path}
				on:click={(e) => {
					moveMarker(getActiveOffset(e.target));
				}}>{item.name}</a
			>
		{/each}
		<div
			class="marker w-2 h-2 rounded-full bg-#e3d268 absolute top-10 right-15 transition transition-top animate-pulse hidden lg:block"
		></div>
	</nav>
</menu>
