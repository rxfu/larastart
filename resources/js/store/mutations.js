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
        var data = {};

        switch (message.type) {
            case 'error':
                data = {
                    'class': 'alert-danger',
                    'icon': 'ban',
                    'title': '错误'
                };
                break;

            case 'info':
                data = {
                    'class': 'alert-info',
                    'icon': 'info',
                    'title': '信息'
                };
                break;

            case 'warning':
                data = {
                    'class': 'alert-warning',
                    'icon': 'warning',
                    'title': '警告'
                };
                break;

            case 'success':
                data = {
                    'class': 'alert-success',
                    'icon': 'check',
                    'title': '成功'
                };
                break;

            default:
                data = {
                    'class': 'alert-secondary',
                    'icon': 'fa-question',
                    'title': '其他'
                }
            }
        
        Object.assign(message, data);
        message.id = state.messages.length;

        state.messages.push(message);
    },

    [types.DELETE_MESSAGE](state, index) {
        state.messages.splice(index, 1);
    },

    [types.EMPTY_MESSAGES](state) {
        state.messages = [];
    }

    [types.SET_INVALID](state, fails) {
        state.fails = fails;
    }
}