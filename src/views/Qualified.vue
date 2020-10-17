<template>
  <div class="flex items-center mx-10 my-10">
    <table class="table-auto w-2/3 mr-10">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left">Client Name</th>
          <th class="px-4 py-2 text-left">Product</th>
          <th class="px-4 py-2 text-left">Invoice Number</th>
          <th class="px-4 py-2 text-left">Ham Claimed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in getClients" :key="client.id">
          <td class="border px-4 py-2">{{ client.name }}</td>
          <td class="border px-4 py-2">{{ client.product }}</td>
          <td class="border px-4 py-2">{{ client.invoiceNumber }}</td>
          <td class="border px-4 py-2">
            <input
              v-model="client.claimed"
              @change="(client.claimed = !client.claimed), claimHam(client)"
              type="checkbox"
              class="w-5 h-5 flex items-center cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <span>{{ checked }}</span>
    <div class="w-1/3">
      <span class="text-4xl font-semibold mt-6">Total Hams Claimed:</span>
      <div class="border-gray-400 border-2 rounded-lg">
        <div v-for="claimedHam in getClaimedHams" :key="claimedHam.id">
          <span>{{ claimedHam.name }} | {{ claimedHam.dateHamPurchased }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      clients: [],
      claimedHams: [],
      checked: ""
    };
  },
  computed: {
    getClients() {
      return this.$store.getters.getClients;
    },
    getClaimedHams() {
      return this.$store.getters.getClaimedHams;
    }
  },
  methods: {
    claimHam(client) {
      this.$store.dispatch("claimHam", {
        id: client.id,
        name: client.name,
        product: client.product,
        invoiceNumber: client.invoiceNumber,
        claimed: client.claimed,
        dateHamPurchased: moment().format("Do MMMM YYYY")
      });
    }
  },
  created() {
    this.$store.dispatch("getCreatedClients");
    this.$store.dispatch("getClaimedHams");
  }
};
</script>

<style scoped>
</style>