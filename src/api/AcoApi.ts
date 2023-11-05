import axios from 'axios';

const backendBaseURL = 'https://api.admin.aco.charity/public/';
export default class AcoApi {
    static getMembercount() {
        return axios.get(backendBaseURL + 'member/getLength');
    }
}