<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar} from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data:PageData

	// console.log('Layout')
	console.log(data);
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="text-2xl ml-12 font-bold uppercase">Skeleton</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="mr-12">
					<a
						class="btn btn-sm variant-ghost-surface"
						href="/create"
					>
						Create
					</a>
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
					<a
					class="btn btn-sm variant-ghost-surface"
					href="/guarded"
					rel="noreferrer"
				>
					Protected
				</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
	<slot />
</AppShell>


