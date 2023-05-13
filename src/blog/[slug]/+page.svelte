<script lang="ts">

	import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import type {ModalSettings, ModalComponent} from '@skeletonlabs/skeleton';
    import UpdateModal from '../../docs/components/updateModal.svelte';
    import type {PageData} from './$types';
    export let data: PageData;

	function modalConfirm(): void {
		const d: ModalSettings = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you rwish to proceed?',
			response: (r: boolean) => {
                if(r == true){
                    async function Delete() {
                        const req = await fetch('/api/delete', {
                            method: "DELETE",
                            body: JSON.stringify({"id": data.data.id}),
                            headers: {
                                'content-type': 'application/json'
                            }
                        });
                        //console.log(await req.json());
                    }
                    Delete();
                }
            }
		};
		modalStore.trigger(d);
	}
    function modalUpdate():void{
        const c: ModalComponent = {ref: UpdateModal};
        const d: ModalSettings = {
            type: "component",
            component: c,
            title: "Update",
            body: "Update the post",
            value: data.data,
            response: (r) =>{
                if(r != false) {
                let id = {id: data.data.id};  
                let json = Object.assign(r, id);  
                async function Patch() {
                    const req = await fetch('/api/patch', {
                        method: "PATCH",
                        body: JSON.stringify({"data": json}),
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                    //console.log(await req.json());
                }
                Patch();
                }
             }
        }
        modalStore.trigger(d);
    }
</script>

<article class="mx-auto mt-12 prose lg:prose-xl dark:text-white">
    <h1 class="dark:text-gray-200">{data.data.title}</h1>
    <p class="text-xl">{data.data.content}</p>
    

    <footer>
            <button class="btn variant-filled-primary" on:click={modalConfirm}>Delete</button>
            <button class="btn variant-filled-secondary" on:click={modalUpdate}>Update</button>
    </footer>
    <Modal/>
</article>
