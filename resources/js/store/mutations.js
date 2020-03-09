import * as types from './mutation-types';

export default {
    [types.UPDATE_TITLE](state, title) {
        Object.assign(state, title);
    },

    [types.PROMPT_MESSAGE](state, prompt) {
        Object.assign(state, prompt);
    }
}