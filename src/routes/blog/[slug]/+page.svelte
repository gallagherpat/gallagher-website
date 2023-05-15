<script lang='ts'>
    import type { PageData } from './$types';

    export let data: PageData;
    console.log(data.data);
</script>

<h1>{data.data.title}</h1>
<p>{data.data.content}</p>