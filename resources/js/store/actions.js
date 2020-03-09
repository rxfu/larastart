import * as types from './mutation-types';

export default {
    setTitle({commit}, title) {
        commit(types.UPDATE_TITLE, title);
    },

    promptMessage({commit}, prompt) {
        commit(types.PROMPT_MESSAGE, prompt);
    }
}