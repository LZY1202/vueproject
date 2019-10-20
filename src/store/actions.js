import {
    ADD_COUNTER,
    ADD_CARTLIST
} from './mutations-type'
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = null
            oldProduct = context.state.cartlist.find(item => item.id === payload.id)
            if (oldProduct) {
                context.commit(ADD_COUNTER, oldProduct);
                resolve("商品数量+1")
            } else {
                context.commit(ADD_CARTLIST, payload);
                resolve("商品添加成功")
            }
        })
    }
}