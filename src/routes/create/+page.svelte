
<script lang="ts">
    import type {PageData} from "./$types"
    export let data: PageData
    export let form
    console.log(data.user)
</script>

<form class="w-[70%] mx-auto mt-12" method="POST" action="?/create">
    <label class="label">
        <span>Title</span>
        <input type="text" name="user" value={data.user.userId} class="hidden"/>
        <input class="input" name="title" type="text" placeholder="Input" />
    </label>
    
    <label class="label">
        <span>Textarea</span>
        <textarea class="textarea" name="content" rows="20" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </label>
    <button class="btn variant-filled" type="submit">Add data</button>
</form>

