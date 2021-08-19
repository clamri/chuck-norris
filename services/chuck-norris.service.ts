import { Joke } from '~/models/joke';
import { API_BASE_URL, API_CATEGORIES, API_RANDOM } from "~/utils/constants";

export default class ChuckNorrisService {
    static getRandomJoke = async (params: { category?: string }): Promise<Joke> => {
        return (await ChuckNorrisService.$axios.get(`${API_BASE_URL}${API_RANDOM}`, { params })
        )?.data;
    }

    static getCategories = async (): Promise<string[]> => {
        return (await ChuckNorrisService.$axios.get(`${API_BASE_URL}${API_CATEGORIES}`)
        )?.data;
    }

    static $axios: any;
}