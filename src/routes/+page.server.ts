import type { Actions } from './$types';

export const actions = {
    addingData:async ({request}) => {
        const formData = await request.formData();
        console.log(formData);
        return {
            success: true
        }
    },
    modalInput:async ({request}) => {
        const formData = await request.formData
        console.log(formData)
        return {
            success: true
        }
    }
}satisfies Actions;