<script lang="ts">
    import type {PageData} from './$types'
    export let data: PageData;
    console.log(data);
</script>

<article class="prose lg:prose-xl dark:text-white">
    <h1 class="dark:text-gray-200">{data.data.title}</h1>
    <p>{data.data.content}</p>
</article>