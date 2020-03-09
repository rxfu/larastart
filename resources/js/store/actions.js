import * as types from './mutation-types';

export default {
    setTitle({commit}, title) {
        commit(types.UPDATE_TITLE, title);
        document.title = (title.title || 'Home') + ' | ' + process.env.MIX_APP_NAME;
    },

    promptMessage({commit}, prompt) {
        commit(types.PROMPT_MESSAGE, prompt);
    }
}