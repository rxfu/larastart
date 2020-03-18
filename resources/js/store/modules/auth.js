export default {
    state: {
        token: '',
        user: {}
    },

    getters: {
        isLogin: state => !!state.token,
        authUser: state => state.user,
    },

    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },

        auth_success(state, token, user) {
            state.status = 'success';
            state.token = token;
            state.user = user;
        },

        auth_error(state) {
            state.status = 'error';
        },

        logout(status) {
            state.status = '';
            state.token = '';
        }
    },

    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                axios.post('api/v1/login', user)
                .then(response => {
                    const token = 'Bearer ' + response.data.data.accessToken;

                    sessionStorage.setItem('Authorization', token);

                    resolve(response);
                })
            })
        },

        logout({commit}) {
            return new Promise((resolve, reject) => {
                axios.post('api/v1/logout')
                .then(response => {
                    if (sessionStorage.getItem('Authorization')) {
                        sessionStorage.removeItem('Authorization');

                        delete axios.defaults.headers.common['Authorization'];
                    }

                    resolve(response);
                })
            })
        }
    }
}