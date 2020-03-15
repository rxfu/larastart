import * as types from './mutation-types';

export default {
    showLoading({commit}) {
        commit(types.SHOW_LOADING);
    },

    hideLoading({commit}) {
        commit(types.HIDE_LOADING);
    },
    
    setTitle({commit}, title) {
        commit(types.UPDATE_TITLE, title);
        document.title = (title.title || 'Home') + ' | ' + process.env.MIX_APP_NAME;
    },

    flashSuccess({commit}, message) {
        commit(types.FLASH_MESSAGE, {
            type: 'success',
            content: message
        }); 
    },

    flashError({commit}, message) {
        commit(types.FLASH_MESSAGE, {
            type: 'error',
            content: message
        }); 
    },

    flashWarning({commit}, message) {
        commit(types.FLASH_MESSAGE, {
            type: 'warning',
            content: message
        }); 
    },

    flashInfo({commit}, message) {
        commit(types.FLASH_MESSAGE, {
            type: 'info',
            content: message
        }); 
    },

    flushMessage({commit}, index) {
        commit(types.FLUSH_MESSAGE, index);
    },

    flashInvalid({commit}, fails) {
        commit(types.SET_INVALID, fails);
    }
}