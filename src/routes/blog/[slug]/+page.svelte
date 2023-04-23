<script lang="ts">
    import type {PageData} from './$types'
    import {Button} from 'flowbite-svelte';
    export let data: PageData;
    console.log(data);
</script>

<h1>{data.data.title}</h1>
<p>{data.data.content}</p>

<Button>Delete</Button>