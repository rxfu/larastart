import * as types from './mutation-types';

export default {
    [types.SHOW_LOADING](state) {
        Object.assign(state, { loading: true });
    },
    [types.HIDE_LOADING](state) {
        Object.assign(state, { loading: false });
    },
    [types.UPDATE_TITLE](state, title) {
        Object.assign(state, title);
    },

    [types.FLASH_MESSAGE](state, message) {
        state.messages.push(message);
    },

    [types.FLUSH_MESSAGE](state, index) {
        state.messages.splice(index, 1);
    },

    [types.SET_INVALID](state, fails) {
        state.fails = fails;
    }
}