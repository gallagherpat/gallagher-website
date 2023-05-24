<script lang="ts">
	import type {PageData} from './$types';

	export let data: PageData

	console.log(data);
	let currentVariant = 'bg-initial';
	const posts = data.data
</script>

	<div class="grid grid-cols-3 mx-auto h-[35vh] w-[70%] gap-4 z-0">
		<div class="space-y-5 col-span-2 my-auto mr-8 text-end">
			<h1 class="h1 text-5xl">Let's get to it!</h1>
			<p class="text-lg">This is the future site of a new gamedevelopers blog and community. Tutorials, games, and blog.</p>
		</div>
		<img height="100%" width="220px" class="transform my-auto mx-auto -scale-x-100" src="/1388609811.jpg" alt="">
	</div>
<div class="grid grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-4 mx-auto w-[70%] z-10"> 
{#each posts as post}
	<div class="w-full text-token grid z-20">
		<a class="card {currentVariant} card-hover overflow-hidden" href="/blog/{post.id}">
			<header>
				<img src="https://source.unsplash.com/vjUokUWbFOs/400x175" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
			</header>
			<div class="p-4 space-y-4 h-48">
				<h6 class="h6">Announcements</h6>
				<h3 class="h3" data-toc-ignore>{post.title}</h3>
				<article>
					<p>{post.content}</p>
				</article>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 flex justify-start items-center space-x-4">
				<!-- <Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" /> -->
				<div class="flex-auto flex justify-between items-center">
					<h6 class="font-bold">By Alex</h6>
					<small>On {new Date().toLocaleDateString()}</small>
				</div>
			</footer>
		</a>
	</div>
{/each}
</div>

