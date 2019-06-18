import axios from '../lib/dummydata/load'
import { LOAD_MENU } from '../constants/actionTypes'
// import axios from 'axios'

// import { getUrl } from '../lib/url'

export function loadMenu (id, menu = 'main') {
  return (dispatch) => {
    return dispatch({
      type    : LOAD_MENU,
    //   payload : axios.get(getUrl('/menu/' + id)),
      payload: axios.get('/rest/menu/' + id),
      meta    : { menu, id }
    }).catch(error => { })
  }
}
