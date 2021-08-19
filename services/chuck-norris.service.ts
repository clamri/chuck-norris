import { Joke } from '~/models/joke';
import { API_BASE_URL, API_RANDOM } from "~/utils/constants";

export default class ChuckNorrisService {
    static getRandomJoke = async (): Promise<Joke> => {
        return (await ChuckNorrisService.$axios.get(`${API_BASE_URL}${API_RANDOM}`)
        )?.data;
    }
    static $axios: any;
}