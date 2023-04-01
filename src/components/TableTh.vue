<template>
  <th scope="col" class="px-6 py-3">
    <div class="uppercase">{{ name }}
      <i @click="SET_ORDER(name)" class="fa-solid pl-2  fa-sort fa-sm cursor-pointer" style="color: #8875b3;"></i>
    </div>
  </th>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["SET_ORDER"]),
  },
};
</script>
