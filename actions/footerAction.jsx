import axios from '../lib/dummydata/load'
import { LOAD_FOOTER } from '../constants/actionTypes'
// import axios from 'axios'

// import { getUrl } from '../lib/url'

export function loadMenu (id, footer = 'main') {
  return (dispatch) => {
    return dispatch({
      type    : LOAD_FOOTER,
    //   payload : axios.get(getUrl('/menu/' + id)),
      payload: axios.get('/rest/footer/' + id),
      meta    : { footer, id }
    }).catch(error => { })
  }
}
