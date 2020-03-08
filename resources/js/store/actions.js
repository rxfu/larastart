import * as types from './mutation-types';

export default {
    setTitle({commit}, title) {
        commit(types.UPDATE_TITLE, title);
    }
}