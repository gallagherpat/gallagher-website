<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar} from '@skeletonlabs/skeleton';
	import type {PageData} from './$types'
	import { error, redirect } from '@sveltejs/kit';

	export let data: PageData;

	async function signout() {

		try{
			const req = await fetch('/api/signout', {
			method: 'POST'
		});
		const data = await req.json();
		if(data.success){
			location.reload();
		}
		}catch (error){
			console.error(error)
		}

	}
</script>



<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="text-2xl ml-12 font-bold uppercase">Skeleton</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="mr-12">
					{#if !data.user}
					<a
						class="btn btn-sm variant-ghost-surface"
						href="/login"
						rel="noreferrer"
					>
						Log In
					</a>
					<a
						class="btn btn-sm variant-ghost-surface"
						href="/signup"
						rel="noreferrer"
					>
						Sign Up
					</a>			
					{/if}

					{#if data.user}
					<form method="POST" on:submit|preventDefault={signout}>
						<button class="btn btn-sm variant-ghost-surface" type="submit">Sign out</button>
						<a
						class="btn btn-sm variant-ghost-surface"
						href="/create"
						rel="noreferrer">
						Create
					</a>
					</form>
					{/if}
			

				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
	<slot />
</AppShell>


