<script lang="ts">
	export let icon: string;
	export let classnames = '';
	export let position: 'left' | 'right' = 'left';

	export { classnames as class };
</script>

<button
	class="{classnames} w-12 h-12 bg-#55555A rounded-full flex items-center justify-center absolute z-10 bottom-47% {position ===
	'left'
		? 'left-4'
		: 'right-4'}"
	on:click
>
	<div class="{icon} text-white text-lg"></div>
</button>
