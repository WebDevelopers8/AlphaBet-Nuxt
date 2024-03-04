import {defineStore} from "pinia";
import {ref} from "vue";

export const useModalCard = defineStore('modal', () => {

    const idProduct = ref(0)
    const modalState = ref(false);


    return {idProduct, modalState}
})