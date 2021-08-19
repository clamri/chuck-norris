import { GetterTree, ActionTree, MutationTree } from 'vuex'
import ChuckNorrisService from '~/services/chuck-norris.service'

export const state = () => ({
    categories: [] as string[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    categories: state => state.categories,
}

export const mutations: MutationTree<RootState> = {
    UPDATE_CATEGORIES: (state, newCategories: string[]) => (state.categories = newCategories),
}

export const actions: ActionTree<RootState, RootState> = {
    async fetchCategories({ commit }) {
        const categories = await ChuckNorrisService.getCategories();
        commit('UPDATE_CATEGORIES', categories)
    },
}