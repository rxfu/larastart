import * as types from './mutation-types';

export default {
    [types.UPDATE_TITLE](state, title) {
        Object.assign(state, title);
    }
}