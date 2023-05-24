<script lang="ts">
    import type {PageData} from './$types';
    import { superForm } from 'sveltekit-superforms/client';

    export let data: PageData
    //@ts-ignore
    const {form, enhance, errors, constraints } = superForm(data.form, {
        taintedMessage: 'Are you sure you want to leave? Changes will not be saved'
    });
</script>

<main class="w-[70%] md:w-1/2 lg:w-1/3 mx-auto my-6">
    <form class="card p-4 text-token space-y-4 mt-4" method="POST" use:enhance>
        <h1>Log in</h1>
        <label class="label" for="userName">
            User Name:
            <input 
            class="input" 
            type="text" 
            name="userName" 
            placeholder="User Name" 
            bind:value={$form.userName} 
            {...$constraints.userName}
            required/>
            {#if $errors.userName}
                <small class="text-red-600">{$errors.userName}</small>
            {/if}
        </label>
        <label for="password">
            Password:
            <input 
            class="input" 
            type="password" 
            name="password" 
            bind:value={$form.password} 
            {...$constraints.password}
            required/>
            {#if $errors.password}
                <small class="text-red-600">{$errors.password}</small>
            {/if}
        </label>
            <button class="btn variant-filled-success" type="submit">Submit</button>
    </form>
</main>