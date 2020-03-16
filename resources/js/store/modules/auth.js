export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
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
            //     commit('auth_request');
                axios.post('api/v1/login', user)
                .then(response => {
            //         // console.log(response);
            //     //     const token = response.data.token;
            //     //     const user = response.data.user;
            //     //     localStorage.setItem('token', token);
            //     //     Axios.defaults.headers.common['Authorization'] = token;
            //     //     commit('auth_success', token, user);
                    resolve(response);
                });
            });
        },

        logout({commit}) {
            return new Promise((resolve, reject) => {
                axios.post('api/v1/logout')
                .then(response => {
                //     removeIsLogin();
                //     localStorage.removeItem('loginUsername');
                //     delete Axios.defaults.headers.common['Authorization'];
                    resolve(response);
                })
            })
        }
    }
}