/**
 * Use the MockAdapter to fake axios requests.
 */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = axios.create()
const mock = new MockAdapter(mockAxios)

/**
 * Get menu
 */
import menu from './menu';

mock.onGet('/rest/menu/1').reply(200, menu);

export default mockAxios