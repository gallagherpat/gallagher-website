<script lang="ts">
    import type {PageData} from "./$types"

    export let data: PageData
</script>
<h1>Create</h1>

<div class="flex justify-center items-center">
    <form method="POST" class="card w-[70%] p-6">
        <label for="title" class="mt-2">
            Title:
            <input class="input" type="text" name="title"/>
        </label>
        <label for="content" class="mt-2">
            Content:
            <textarea class="input resize h-72" name="content"/>
        </label>
        <input type="text" class="input hidden" name="auth_user" value={data.data.userId}>
        <button class="btn variant-filled-primary mt-2" type="submit">Create Post</button>
    </form>
</div>
