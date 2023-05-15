<script lang="ts">
    import Avatar from "$lib/components/Avatar/Avatar.svelte";
	import type { PageData } from "./$types";

	export let data: PageData
	console.log(data);
	let currentVariant = 'bg-initial';
	const posts = data.data
</script>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<!-- <div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Let's get cracking bones!</h1>
		<p>Start by exploring:</p>
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout, the CSS import order is critical!</li>
			<li><code class="code">/src/app.postcss</code> - minimal css to make the page full screen, may not be relevant for your project</li>
			<li><code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents</li>
		</ul>
	</div>
</div> -->
<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-16">
	{#each posts as post}
	<div class="w-full text-token grid">
		<!-- Detailed -->
		<a class="card {currentVariant} card-hover overflow-hidden" href="/blog/{post.id}">
			<header>
				<img src="https://source.unsplash.com/vjUokUWbFOs/400x175" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
			</header>
			<div class="p-4 space-y-4">
				<h6 class="h6">Announcements</h6>
				<h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
				<article>
					<p>
						<!-- cspell:disable -->
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore
						sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 flex justify-start items-center space-x-4">
				<Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" />
				<div class="flex-auto flex justify-between items-center">
					<h6 class="font-bold">By Alex</h6>
					<small>On {new Date().toLocaleDateString()}</small>
				</div>
			</footer>
		</a>
	</div>
	{/each}
 

</div>

