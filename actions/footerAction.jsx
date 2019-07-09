import axios from '../lib/dummydata/load'
import { LOAD_FOOTER } from '../constants/actionTypes'
// import axios from 'axios'

export function loadFooter (id, footer = 'main') {
  return (dispatch) => {
    return dispatch({
      type    : LOAD_FOOTER,
      payload: axios.get('/rest/footer/' + id),
      meta    : { footer, id }
    }).catch(error => { })
  }
}
