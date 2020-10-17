import Vue from "vue";
import Vuex from "vuex";
import moment from 'moment';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients: [],
    claimedHams: []
  },
  getters: {
    getClients: state => {
      return state.clients;
    },
    getClaimedHams: state => {
      return state.claimedHams;
    }
  },
  mutations: {
    ADD_CLIENT(state, payload) {
      state.clients.push(payload);
    },
    GET_CREATED_CLIENTS: (state, payload) => {
      state.clients = payload;
    },
    CLAIM_HAM: (state, payload) => {
      const client = state.clients.find(client => {
        return client.id === payload.id;
      })
      client.claimed = payload.claimed;
    },
    ADD_CLAIMED_HAMS: (state, payload) => {
      state.claimedHams.push(payload);
      firebase.database().ref('claimedHams').push(payload);
    },
    GET_CLAIMED_HAMS: (state, payload) => {
      state.claimedHams = payload;
    }
  },
  actions: {
    createNewClient({
      commit
    }, payload) {
      const newClient = {
        name: payload.name,
        product: payload.product,
        invoiceNumber: payload.invoiceNumber,
        claimed: false,
        purchaseDate: moment().format("Do MMMM YYYY")
      };
      console.log(newClient);
      firebase.database().ref('clients').push(newClient)
        .then((data) => {
          console.log(data);
          const key = data.key;
          commit('ADD_CLIENT', {
            id: key,
            newClient
          });
        })
        .catch((error) => {
          console.log("WTF! " + error);
        })
    },
    getCreatedClients({
      commit
    }) {
      firebase.database().ref('clients').once('value')
        .then((response) => {
          const clients = [];
          const obj = response.val();
          for (let key in obj) {
            clients.push({
              id: key,
              name: obj[key].name,
              product: obj[key].product,
              invoiceNumber: obj[key].invoiceNumber,
              claimed: obj[key].claimed,
              datePurchased: obj[key].datePurchased
            })
          }
          commit('GET_CREATED_CLIENTS', clients);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    claimHam({
      commit
    }, payload) {
      const updatedObj = {}
      if (payload.claimed === false) {
        updatedObj.claimed = false;
      } else {
        updatedObj.claimed = true;
      }
      firebase.database().ref('clients').child(payload.id).update(updatedObj)
        .then((response) => {
          console.log(response);
          commit('CLAIM_HAM', payload);
          commit('ADD_CLAIMED_HAMS', payload);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    getClaimedHams({
      commit
    }) {
      firebase.database().ref('claimedHams').once('value')
        .then((response) => {
          const claimedHams = [];
          const obj = response.val();
          for (let key in obj) {
            claimedHams.push({
              id: key,
              name: obj[key].name,
              product: obj[key].product,
              invoiceNumber: obj[key].invoiceNumber,
              claimed: obj[key].claimed,
              datePurchased: obj[key].datePurchased
            })
          }
          commit('GET_CLAIMED_HAMS', claimedHams);
        })
        .catch((error) => {
          console.log(error);
        })
    },
  },
  modules: {}
});