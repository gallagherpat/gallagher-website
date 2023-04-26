<script lang="ts">

    
    export let form
</script>


<form method="POST" action="?/addingData">
    <label class="label">
        <span>Input</span>
        <input class="input" name="input" type="text" placeholder="Input" />
    </label>
    
    <label class="label">
        <span>Textarea</span>
        <textarea class="textarea" name="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </label>
    <button class="btn variant-filled" type="submit">Add data</button>
</form>

<a href="/create" class="btn variant-filled mt-3">Create</a>
				