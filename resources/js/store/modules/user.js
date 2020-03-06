const state = {
    user: JSON.parse(sessionStorage.getItem('user')) || {},
}

const getters = {
    getUser: state => {
        return state.user;
    }
}

const actions = {
    setUser({commit}, item) {
        commit('setUser', item);
    }
}

const mutations = {
    setUser(state, item) {
        state.user = item;
        sessionStorage.sestItem('$user', JSON.stringify(state.user));
    },

    clearUser(state) {
        state.user = {},
        sessionStorage.sestItem('$user', JSON.stringify(state.user));
    }
}

export default = {
    state,
    getters,
    actions,
    mutations
}