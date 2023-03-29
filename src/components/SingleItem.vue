<template>
       <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{item.id}}</td>
        <td class="px-6 py-4">{{item.name}}</td>
        <td class="px-6 py-4">{{item.value}}</td>
        <td class="px-6 py-4 w-2">
        <button @click="showAdditional" class="add-info font-medium text-blue-600 dark:text-blue-500 hover:underline">more</button>
        </td>
        </tr>
        <tr v-if="additional"  class=" dark:bg-gray-700">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ moreInfoItem().id }}</td>
            <td class="px-6 py-4">{{ moreInfoItem().description }}</td>
            <td class="px-6 py-4">{{ moreInfoItem().date }}</td>
            <td></td>
        </tr>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
        moreInfo: {
            type: Array,
            required: true
        }
    },
    data() {
      return {
        additional: false,
      }
    },
    computed: {
        
    },
    methods: {
        showAdditional(){
            this.additional = !this.additional;
        },
        moreInfoItem(){
            let objNeeded = this.moreInfo.find( elem => elem.id === this.item.id);
            return objNeeded;
        }
    }
}
</script>