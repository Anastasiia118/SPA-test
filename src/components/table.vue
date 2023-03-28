<template>
    <div class="flex m-2.5 overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead class="ext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" class="px-6 py-3">id</th>
            <th scope="col" class="px-6 py-3">name</th>
            <th scope="col" class="px-6 py-3">value</th>
            <th scope="col" class="px-6 py-3"></th>
        </thead>
        <tbody>
        <tr v-for="item in first10" :key="index"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
        }
    }
}
</script>

<style>
</style>
