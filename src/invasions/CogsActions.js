import axios from 'axios';
import consts from '../consts';
import actionTypes from '../main/ActionTypes';
import { toast } from 'react-toastify';

const invasionsURL = consts.API_URL + 'invasions';

export function getInvasions() {
    const toastId = 'get_invasions';
    return (dispatch) => {
        //console.log(invasionsURL);
        axios.get(invasionsURL, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache',  'Expires': '0'}})
        .then(resp => {
            //console.log('REsponse data');
            //console.log(resp.data);
            dispatch({type: actionTypes.INVASIONS_FETCHED, payload: resp.data});
        })
        .catch(resp => {
            console.log('Erro' + resp);
            toast('Error trying to fetch invasions. Please try again later.', {toastId: toastId, autoClose: 3000});
            dispatch({type: actionTypes.INVASIONS_FETCHED, payload: null});
        });
    };
}