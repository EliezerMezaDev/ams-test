// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:clickoutside'?: CompositionEventHandler<T>;
			'on:enter'?: CompositionEventHandler<T>;
		}
	}
}

export {};
