<script lang="ts">
	export let icon: string;
	export let classnames = '';
	export let position: 'left' | 'right' = 'left';

	export { classnames as class };
</script>

<button
	class="{classnames} w-8 h-8 md:w-12 md:h-12 bg-#55555A/50 hover:bg-#55555A/80 rounded-full flex items-center justify-center absolute z-10 bottom-47% {position ===
	'left'
		? 'left-2'
		: 'right-2'}"
	on:click
>
	<div class="{icon} text-white text-md md:text-lg"></div>
</button>
