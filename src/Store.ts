import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

/**
 * Redux is for app state, and views can hold on to their own state?
 */
const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
    searchTerm: ''
};
const rootReducer = (state = initialState, action: { type: string, action: any }) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return reduceSearchTerm(state, action);
        default:
            return state;
    }
};

const reduceSearchTerm = (state: any, action: any) => {
    const newState = {};
    Object.assign(newState, state, { searchTerm: action.value });
    return newState;
};

const mapStateToProps = (state: any) => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: any) => {
    return {
        setSearchTerm(searchTerm: string) {
            dispatch({ type: SET_SEARCH_TERM, value: searchTerm });
        }
    };
};

const store = Redux.createStore(rootReducer);
const connector = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export { connector, store };
