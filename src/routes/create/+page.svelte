
<script lang="ts">
    export let form
</script>
<h1>Hello World</h1>

<form class="w-[70%] mx-auto" method="POST" action="?/create">
    <label class="label">
        <span>Title</span>
        <input class="input" name="title" type="text" placeholder="Input" />
    </label>
    
    <label class="label">
        <span>Textarea</span>
        <textarea class="textarea" name="content" rows="20" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </label>
    <button class="btn variant-filled" type="submit">Add data</button>
</form>

