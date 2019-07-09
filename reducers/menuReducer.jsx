import { LOAD_MENU } from '../constants/actionTypes';
import update from 'immutability-helper';

const initialState = {
	pending: false,
	error: null,
	menus: {
		main: { items: [] }
	}
};

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case LOAD_MENU + '_PENDING': {
			return update(state,
				{
					$merge: {
						pending: true,
						error: null
					},
					menus: {
						[action.meta.menu]: {
							$set: { items: [] }
						}
					}
				});
		}
		case LOAD_MENU + '_REJECTED': {
			return update(state,
				{
					$merge: {
						pending: false,
						error: {
							status: action.payload.response.status,
							message: action.payload.message
						}
					},
					menus: {
						[action.meta.menu]: {
							$set: { items: [] }
						}
					}
				});
		}
		case LOAD_MENU + '_FULFILLED': {
			return update(state,
				{
					$merge: {
						pending: false,
						error: null
					},
					menus: {
						[action.meta.menu]: {
							$set: {
								items: action.payload.data.items,
								id: action.meta.id
							}
						}
					}
				});
		}
	}
	return state;
}
