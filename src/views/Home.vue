<template>
  <div class="home">
    <div class="flex justify-center">
      <img src="../assets/ham.png" class="w-40 h-40" />
    </div>
    <div class="flex justify-center content-center mt-10">
      <form class="rounded-lg shadow-lg" @submit.prevent>
        <div
          class="flex items-center text-3xl bg-purple-500 px-3 py-2 rounded-sm h-20"
        >
          <span>Entry Form</span>
        </div>
        <div class="flex flex-col px-5 py-8">
          <input
            v-model="clientName"
            class="border-2 rounded-md py-1 px-1 my-2 focus:outline-none"
            placeholder="Name..."
          />
          <input
            v-model="product"
            class="border-2 rounded-md py-1 px-1 my-2 focus:outline-none"
            placeholder="Product..."
          />
          <input
            v-model="invoiceNumber"
            class="border-2 rounded-md py-1 px-1 my-2 focus:outline-none"
            placeholder="Invoice Number..."
          />
        </div>
        <button
          @click="createClient"
          class="float-right bg-purple-500 rounded-md px-3 py-2 mr-5 hover:text-gray-100 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Home",
  data() {
    return {
      clientName: "",
      product: "",
      invoiceNumber: "",
      currentDate: moment().format("Do MMMM YYYY"),
      loading: false
    };
  },
  methods: {
    createClient() {
      if (
        this.clientName.trim().length === 0 ||
        this.product.trim().length === 0 ||
        this.invoiceNumber.trim().length === 0
      ) {
        return;
      } else {
        this.$store.dispatch("createNewClient", {
          name: this.clientName,
          product: this.product,
          invoiceNumber: this.invoiceNumber,
          claimed: false,
          date: this.currentDate
        });
      }
      this.clientName = "";
      this.product = "";
      this.invoiceNumber = "";
    }
  }
};
</script>

<style>
form {
  width: 400px;
  height: 355px;
}
</style>