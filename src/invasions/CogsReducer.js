import _ from 'lodash';
import actionTypes from "../main/ActionTypes";

const INITIAL_STATE = {
    list: []
};

const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };

function CogsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case actionTypes.INVASIONS_FETCHED:
            if(action.payload !== null) {
                const invasionsList = _.orderBy(Object.entries(action.payload.invasions).map(e => Object.assign({}, e)),  [i => i[0].toLowerCase()], 'asc');
                return { ...state, list: invasionsList};
            }
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default CogsReducer;