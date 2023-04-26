<script lang="ts">
    import type {PageData} from './$types'
    import {Button, Modal} from 'flowbite-svelte';
    export let data: PageData;
    let defaultModal = false;
    console.log(data);
</script>

<button class="btn variant-filled-primary"></button>

<article class="prose lg:prose-xl dark:text-white">
    <h1 class="dark:text-gray-200">{data.data.title}</h1>
    <p>{data.data.content}</p>
</article>
<Button color="red" on:click={() => defaultModal = true}>Delete Post</Button>
<Modal bind:open={defaultModal} size="xs" autoclose>
    <div class="text-center">
        <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400  dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this post?</h3>
        <!-- <Button color="red" class="mr-2">Yes, I'm sure</Button> -->
        <form method="POST" action="?/delete">
            <input type="hidden" name="id" value={JSON.stringify(data.data.id)}>
            <Button color="red" class="mr-2" type="submit" on:click={() => alert('Success')}>Delete</Button>
            <Button color='alternative'>No, cancel</Button>
        </form>
    </div>
  </Modal>
