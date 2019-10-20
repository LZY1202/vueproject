export default {
    cartLength(state) {
        return state.cartlist.length;
    },
    cartList(state) {
        return state.cartlist;
    },
    sumPrice(state) {
        return state.cartlist.reduce((pre, item) => {
            if (item.checked) {
                return pre + (item.price * item.count)
            } else {
                return pre + 0
            }
        }, 0).toFixed(2)
    },
    checkListLength(state) {
        let sumCount = 0;
        for (let item of state.cartlist) {
            if (item.checked) {
                sumCount++;
            }
        }
        return sumCount;
    },
    checkedAll(state) {
        if (state.cartlist.length > 0) {
            if (state.cartlist.every(item => item.checked === true)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }
    }
}