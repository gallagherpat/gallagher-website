<script lang='ts'>
    import type { PageData } from './$types';

    export let data: PageData;

    async function deletePost() {
        try{
            const req = await fetch('/api/delete',{
                method: 'DELETE',
                body: JSON.stringify({
                    id: data.data.id,
                    user: data.data.user_id
                })
            });
            const res = await req.json();
            if(res.Post === "Deleted"){
                location.assign('/')
            }
        }catch(error){
            console.error(error)
        }
    }
</script>

<h1>{data.data.title}</h1>
<p>{data.data.content}</p>

{#if data.isUser}
    <button class="btn variant-filled-warning" on:click={deletePost}>Delete</button>
    <button class="btn variant-filled-primary">Modify</button>
{/if}
