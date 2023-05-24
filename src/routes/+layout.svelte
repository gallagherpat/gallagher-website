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
				<a href="https://rumble.com/user/shade01" class="btn-icon hover:variant-soft-primary p-2" rel="noreferrer">
					<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 1583" width="32px" height="-scale-x-[100%]">
						<title>rumble-full-logo-v4-svg</title>
						<style>
							.s0 { fill: white } 
						</style>
						<path id="Layer" fill-rule="evenodd" class="s0" d="m1339.3 537.2c32.1 35.2 57.5 75.9 74.8 120.3 17.2 44.4 26.1 91.5 26.2 139.2 0.1 47.6-8.6 94.8-25.7 139.2-17.1 44.4-42.3 85.3-74.3 120.6-57.2 63.1-119 121.9-184.9 175.9-65.9 54-135.7 103-208.9 146.7-73.1 43.6-149.4 81.8-228.2 114.2-78.8 32.4-159.9 59-242.6 79.4-42.2 10.6-86.1 12.9-129.1 6.8-43.1-6.1-84.6-20.4-122.2-42.3-37.7-21.8-70.7-50.7-97.4-85-26.6-34.4-46.4-73.6-58.2-115.4-100.4-343-85.6-730.8 11.2-1075.3 51-180.9 221.3-294.5 396.7-252.7 324.8 77.4 629.6 276.7 862.6 528.4zm-457.3 356.2c61.2-48.4 61.2-142.7 0-192.6q-32.6-27.1-66.8-52.1-34.2-25.1-69.9-48-35.6-22.9-72.6-43.7-37-20.7-75.2-39.2c-70.3-33.6-148.8 13.3-160.1 93.3-17.3 122.3-20.4 245.6-9.1 362.8 7.6 81.1 85.1 129.5 156.5 98.4q39.9-17.2 78.6-37 38.7-19.8 76-42.2 37.3-22.4 73-47.2 35.7-24.8 69.6-52z"/>
					</svg>
				</a>
				<a href="https://twitter.com/PatrickGallag11" class="btn-icon hover:variant-soft-primary p-2" rel="noreferrer">
					<svg fill="white" height="-scale-x-[100%]" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
						 viewBox="0 0 310 310" xml:space="preserve">
					<g id="XMLID_826_">
						<path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
							c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
							c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
							C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
							c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
							c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
							c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
							c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
							c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
							c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
							c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
							C307.394,57.037,305.009,56.486,302.973,57.388z"/>
					</g>
					</svg>
				</a>
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
					<p>{data.user.username}</p>
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


