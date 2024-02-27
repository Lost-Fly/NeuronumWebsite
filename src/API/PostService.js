import axios from 'axios';

const urlAll = 'https://lvmlabs.ru/api/calls/familia'
const urlFiltersOptions = 'https://lvmlabs.ru/api/calls/familia/filters'
const urlAuth = 'https://lvmlabs.ru/api/users/login'

const axiosInstance = axios.create({
    baseURL: urlAll,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default class PostService {

    static async getAll() {
        return await axios.post(urlAll)
    }

    static async getByData(dateStart, dateEnd) {
        return await axios.post(urlAll, JSON.stringify({newestDate: dateEnd, oldestDate: dateStart, newFilters: true}));
    }

    static async getByDataPage(filtersDict) {
        return await axiosInstance.post(urlAll, JSON.stringify(filtersDict));
    }

    static async getFiltersOptions(filtersOptions) {
        return await axiosInstance.post(urlFiltersOptions, filtersOptions);
    }

    // static async getAuthResult(loginOptions) {
    //     return await axiosInstance.post(urlAuth, { params: { email: "67" } });
    // }

    static async getAuthResult(loginOptions) {

        const params = {
            email: loginOptions['email'],
            password: loginOptions['password']
        };

        // Создаем строку запроса из параметров
        const queryString = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');

        // Добавляем строку запроса к URL-адресу
        const urlWithParams = `${urlAuth}?${queryString}`;

        // Отправляем POST-запрос
        return await axiosInstance.post(urlWithParams);
    }


}