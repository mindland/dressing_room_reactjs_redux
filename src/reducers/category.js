// khoi tao gia tri ban dau cua state
const initialState = [
    { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
    { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
    { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
    { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
    { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
    { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
];

// reducer la 1 funtion nhan vao 2 tham so 
/**
 * 
 * @param {*} state : gia tri hien tai cua du lieu reducer dang quan ly( state la categories)
 * @param {*} action : hanh dong tu component gui len
 */
// reducer se tiep nhan action, chinh sua state , return ve state moi sau khi chinh sua 
const cateReducer = (state = initialState, action) => {  

    return state;  
}

export default cateReducer; 