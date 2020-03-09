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

    [types.PROMPT_MESSAGE](state, prompt) {
        Object.assign(state, prompt);
    }
}