import { ExternalProvider } from '@ethersproject/providers';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare global {
	interface Window {
		ethereum: ExternalProvider;
	}
}
