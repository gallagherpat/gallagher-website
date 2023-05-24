<script lang='ts'>
    import type { PageData } from './$types';
    export let data: PageData;

    async function deletePost() {
        try{
            const req = await fetch('/api/delete',{
                method: 'DELETE',
                body: JSON.stringify({
                    id: data.json.id,
                    user: data.json.user_id
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
    console.log(data)
</script>

<div class="container h-full mx-auto flex justify-center">
    <article class="prose">
        {@html data.data[0]}
        {@html data.data[1]}
        <footer class="flex my-6 justify-end">
            {#if data.isUser}
            <button class="btn variant-filled-warning me-2" on:click={deletePost}>Delete</button>
            <button class="btn variant-filled-primary">Modify</button>
            {/if}        
        </footer>
    </article>
</div>
    
