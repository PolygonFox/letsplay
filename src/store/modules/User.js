// Initial state
const state = {
    username: 'Guest',
    email: '',
    guest: true
}

const getters = {

}

const actions = {
    login({ commit, state }, credentials) {
        console.log('-- login', credentials);
    },

}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}