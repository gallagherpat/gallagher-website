<script lang="ts">
	export let form
</script>
<main class="w-[70%] md:w-1/2 lg:w-1/3 mx-auto my-6">
    <form class="card p-4 text-token space-y-4 mt-4" method="POST">
        <h1>Sign Up</h1>
        <label class="label" for="username">
            User Name:
            <input class="input" type="text" name="username" placeholder="User Name" required/>
        </label>
        <label class="label" for="email">
            Email:
            <input class="input" type="email" name="email" placeholder="example@email.com" required/>
        </label>
        <label for="password">
            Password:
            <input class="input" type="password" name="password" required/>
        </label>
        <label for="confirm">
            Confirm:
            <input class="input" type="password" name="confirm" required/>
        </label>
            <button class="btn variant-filled-success" type="submit">Submit</button>
    </form>
</main>


