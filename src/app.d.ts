// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
type User = {
	id: string
	email: string
}

declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
	interface Locals{
		user: User 
	}
}
