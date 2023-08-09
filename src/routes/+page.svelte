<script lang="ts">
	import type {PageData} from './$types';

	export let data: PageData

	console.log(data);
	let currentVariant = 'bg-initial';
	const posts = data.data;
	const users = data.users;

	function dateParser(date: string) {
		let monthDay = date.slice(4,10);
		let year = date.slice(10, 15);
		let parsedDate = monthDay + "," + year;
		console.log(parsedDate);
		return parsedDate
	}

	function contentSlice(data: string){
		let slicedData;
		let shortenedContent;
		if(data.length >= 80){
		slicedData = data.slice(0, 80);
		shortenedContent = slicedData + "...";
		}else{
			return data;
		}
		return shortenedContent
	}
</script>

	<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto h-[35vh] w-[70%] gap-4">
		<div class="space-y-5 col-span-3 md:col-span-2 my-auto mr-8 text-end">
			<h1 class="h1 text-5xl">Let's get to it!</h1>
			<p class="text-lg">This is the future site of a new gamedevelopers blog and community. Tutorials, games, and blog.</p>
		</div>
		<img height="100%" width="220px" class="transform my-auto mx-auto col-span-3 md:col-span-2 lg:col-span-1 -scale-x-100" src="/1388609811.jpg" alt="">
{#each posts as post, i}
	<div class="text-token grid col-span-3 md:col-span-1">
		<a class="card {currentVariant} card-hover overflow-hidden" href="/blog/{post.id}">
			<header>
				<img src="https://source.unsplash.com/vjUokUWbFOs/400x175" class="bg-black/50 w-full h-[70%] aspect-[21/9]" alt="Post" />
			</header>
			<div class="p-4 space-y-4 h-48">
				<h6 class="h6">Posts</h6>
				<h3 class="h3" data-toc-ignore>{post.title}</h3>
				<article>
					<p>{contentSlice(post.content)}</p>
				</article>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 flex justify-start items-center space-x-4">
				<!-- <Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" /> -->
				<div class="flex-auto flex justify-between items-center">
					<h6 class="font-bold">By {users[i].charAt(0).toUpperCase() + users[i].slice(1)}</h6>
					<small>On <b>{dateParser(post.updatedAt.toString())}</b></small>
				</div>
			</footer>
		</a>
	</div>
{/each}
</div>

