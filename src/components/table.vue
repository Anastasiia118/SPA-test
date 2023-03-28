<template>
    <div class="flex m-2.5 overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead class="ext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" class="px-6 py-3">id</th>
            <th scope="col" class="px-6 py-3">name</th>
            <th scope="col" class="px-6 py-3">value</th>
            <th scope="col" class="px-6 py-3 flex">
                <button @click="previous10Items()" class="mr-1 flex btn add-info font-medium text-white-600  hover:bg-blue-600">
                    <i class="fa-solid fa-arrow-left fa-lg self-center" style="color: #f0f2f4;"></i>
                </button>
                <button @click="next10Items()" class="flex btn add-info font-medium text-white-600  hover:bg-blue-600">
                    <i class="fa-solid fa-arrow-right fa-lg self-center" style="color: #f0f2f4;"></i>
                </button>
            </th>
        </thead>
        <tbody>
        <tr v-bind:value="first10"  v-for="item in first10" :key="index"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{item.id}}</td>
        <td class="px-6 py-4">{{item.name}}</td>
        <td class="px-6 py-4">{{item.value}}</td>
        <td class="px-6 py-4 w-2">
        <button @click="showAdditional" class="add-info font-medium text-blue-600 dark:text-blue-500 hover:underline">more</button>
        </td>
        </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import Items from "../assets/data.json"

export default {
    data() {
        return {
            items: Items,
            first10: Items.slice(0,10),
            additional: false,
        }
    },
    methods: {
        showAdditional(){
            this.additional = !this.additional;
        },
        next10Items(){
            if(this.first10[9].id !== this.items[this.items.length - 1].id){
                let firstItemId = this.first10[9].id +1;
                let lastItemId = this.first10[9].id +11;
               const nextTenItems = this.items.slice(firstItemId, lastItemId);
               this.first10 = nextTenItems;
               console.log(this.first10);
            }
          
        },
        previous10Items(){
            if(this.first10[0].id !== this.items[0].id){
                let firstItemId = this.first10[0].id -10;
                let lastItemId = this.first10[9].id -9;
                const prevTenItems = this.items.slice(firstItemId, lastItemId);
                this.first10 = prevTenItems;
                console.log(this.first10);
            }
        }
    }
}
</script>

<style>
.btn {
    background-color: DodgerBlue; /* Blue background */
    border: none; /* Remove borders */
    color: white; /* White text */
    padding: 12px 16px; /* Some padding */
    font-size: 16px; /* Set a font size */
    cursor: pointer; /* Mouse pointer on hover */
    border-radius: 4px;
}
</style>
