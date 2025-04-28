<script lang="ts">
	import { isOpen, elementColors } from '$lib/store';
	import { timeline } from 'motion';

	function animationOpen() {
		return timeline(
			[
				'burg',
				[
					'.top',
					{ y: -9, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'burg' }
				],
				[
					'.mid',
					{ scale: 0.1, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'burg' }
				],
				[
					'.bot',
					{ y: 9, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'burg' }
				],
				'rotate',
				['.top', { y: 4 }, { duration: 0.2, easing: 'ease-in', at: 'rotate' }],
				['.bot', { y: -4 }, { duration: 0.2, easing: 'ease-in', at: 'rotate' }],
				[
					'.top',
					{ rotateZ: 45, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'rotate' }
				],
				[
					'.bot',
					{ rotateZ: -45, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'rotate' }
				]
			],
			{ duration: 0.5 }
		);
	}

	function animationClose() {
		return timeline(
			[
				'rotate',
				['.top', { y: 0 }, { duration: 0.2, easing: 'ease-in', at: 'rotate' }],
				['.bot', { y: 0 }, { duration: 0.2, easing: 'ease-in', at: 'rotate' }],
				[
					'.top',
					{ rotateZ: 0, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'rotate' }
				],
				[
					'.bot',
					{ rotateZ: 0, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'rotate' }
				],
				'burg',
				[
					'.top',
					{ y: 0, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'burg' }
				],
				[
					'.mid',
					{ scale: [1.1, 1], opacity: [0.1, 1], x: [-20, 0] },
					{ duration: 0.2, easing: 'ease-in', at: 'burg' }
				],
				[
					'.bot',
					{ y: 0, transformOrigin: '50% 50%' },
					{ duration: 0.5, easing: 'ease-in', at: 'burg' }
				]
			],
			{ duration: 0.5 }
		);
	}

	const colors = {
		light: '#ddd',
		dark: '#003B49'
	};

	$: $isOpen ? animationOpen() : animationClose();
	$: color = $isOpen ? 'white' : colors[$elementColors.burger];
</script>

<button class="z-99" on:click={() => ($isOpen = !$isOpen)}>
	<svg
		id="burger"
		width="30"
		class="openmenu"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 30 30"
		fill={color}
	>
		<path class="top" d="M0 9h30v2H0z" />
		<line
			class="mid"
			x1="0"
			y1="15"
			x2="30"
			y2="15"
			stroke={color}
			fill="none"
			stroke-width="2"
			vector-effect="non-scaling-stroke"
		/>
		<path class="bot" d="M0 19h30v2H0z" />
	</svg>
</button>

<style>
	svg {
		/* margin:55px; */
		-webkit-perspective: 800px;
		perspective: 800px;
	}
</style>
