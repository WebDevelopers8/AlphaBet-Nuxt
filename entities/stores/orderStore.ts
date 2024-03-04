import {defineStore} from 'pinia'
import {useLocalStorage} from '@vueuse/core'
import type {orderType} from "~/entities/types/orders/orderType";

export const useOrderStore = defineStore('order', () => {

    const orderState = useLocalStorage<Array<orderType>>('orders', [])

    function deleteAllItems() {
        orderState.value = []
    }

    function deleteItem(order: orderType) {
        if (orderState.value.length == 0) {
            deleteAllItems()
        } else {
            let indexItem = -1
            orderState.value.forEach((item, index) => {
                if (item.id == order.id) {
                    indexItem = index
                }
            })

            orderState.value.splice(indexItem, 1);
        }
    }

    function pushItem(order: orderType) {
        if (orderState.value.length > 0) {
            let count = 0
            orderState.value.forEach((item) => {
                if (item.id == order.id) {
                    item.amount++
                    count++
                }
            })
            if (count == 0) {
                orderState.value.push(order)
            }
        } else {
            orderState.value.push(order)
        }
    }

    function changeAmount(id: number, isPlus: boolean){
        orderState.value.forEach((item) => {
            if(item.id == id){
                if(isPlus) item.amount++;
                else item.amount--;
            }
        })
    }

    return {
        orderState,
        deleteAllItems,
        deleteItem,
        pushItem,
        changeAmount
    }
})