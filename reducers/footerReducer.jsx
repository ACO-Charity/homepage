import { LOAD_FOOTER } from '../constants/actionTypes';
import update from 'immutability-helper';

const initialState = {
    pending: false,
    error: null,
    footers: {
        main: { items: [] }
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_FOOTER + '_PENDING': {
            return update(state,
                {
                    $merge: {
                        pending: true,
                        error: null
                    },
                    footers: {
                        [action.meta.footer]: {
                            $set: { items: [] }
                        }
                    }
                });
        }
        case LOAD_FOOTER + '_REJECTED': {
            return update(state,
                {
                    $merge: {
                        pending: false,
                        error: {
                            status: action.payload.response.status,
                            message: action.payload.message
                        }
                    },
                    footers: {
                        [action.meta.footer]: {
                            $set: { items: [] }
                        }
                    }
                });
        }
        case LOAD_FOOTER + '_FULFILLED': {
            return update(state,
                {
                    $merge: {
                        pending: false,
                        error: null
                    },
                    footers: {
                        [action.meta.footer]: {
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
