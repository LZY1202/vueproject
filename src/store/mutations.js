import {
    ADD_COUNTER,
    ADD_CARTLIST,
    CHECKED_ALL,
    SUM_PRICE,
} from './mutations-type'
export default {
    [ADD_COUNTER](state, payload) {
        payload.count++;
    },
    [ADD_CARTLIST](state, payload) {
        payload.checked = true;
        state.cartlist.push(payload)
    },
    [CHECKED_ALL](state,checked){
        if(!checked){
            for(let item of state.cartlist){
                item.checked = false
            }
        }else{
            for(let item of state.cartlist){
                item.checked = true
            }
        }
    }
}