const initialState = {
    topclothes : '', 
    botclothes: '',
    shoes: '',
    handbags: '',
    necklaces: '',
    hairstyle: '',
    background: '',
}; 

// shallow conparation : so sánh nông , reduce su dung cai nay 
// deep comparation 


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELCECT_PRODUCT" :
            state[action.payload.type] = action.payload.img; 
            break;
        default:
            break; 
    } 

    return {...state};  // neu du lieu la object hoac array, vi object va mang la tham chiếu, so sánh state trước và sau khi xử lý, 
    // nếu thay đôii mới render lại 
}

export default reducer; 

/**
 * 1. ở component ProductItem, nhấn nút thử dispatch action type "SELCECT_PRODUCT"
 *      payload : { type: '', img : ''}
 * 2. reducer selectedProduct , xử ly action 
 * 3. Component model , lay selectedProducts xuống
 */