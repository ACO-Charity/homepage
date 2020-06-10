import axios from 'axios';

const backendBaseURL = 'https://api.admin.aco.charity/public/';

export default class ACOService {
  static getMembercount() {
    return axios.get(backendBaseURL + 'member/getLength');
  }
}
