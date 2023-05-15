<script lang='ts'>
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>{data.data.title}</h1>
<p>{data.data.content}</p>

{#if data.isUser}
    <button class="btn variant-filled-warning">Delete</button>
    <button class="btn variant-filled-primary">Modify</button>
{/if}
