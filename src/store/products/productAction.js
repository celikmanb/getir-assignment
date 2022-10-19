export const getProductRequest = (params) => {
    return {
        type: 'GET_PRODUCT_REQUEST',
        params
    }
}
export const getProductRequestSuccess = data => ({
    type: 'GET_PRODUCT_REQUEST_SUCCESS',
    data
})

export const getCompanyRequest = () => {
    return {
        type: 'GET_COMPANY_REQUEST'
    }
}
export const getCompanyRequestSuccess = data => ({
    type: 'GET_COMPANY_REQUEST_SUCCESS',
    data
})

export const getTagsRequest = () => {
    return {
        type: 'GET_TAGS_REQUEST'
    }
}
export const getTagsRequestSuccess = data => ({
    type: 'GET_TAGS_REQUEST_SUCCESS',
    data
})

export const setSortedProducts = (params) => {
    return {
        type: 'GET_PRODUCT_SORTED_REQUEST',
        params
    }
}
export const setSortedProductsSuccess = data => ({
    type: 'GET_PRODUCT_SORTED_REQUEST_SUCCESS',
    data
})
export const setSortedProductsFail = data => ({
    type: 'GET_PRODUCT_SORTED_REQUEST_FAIL',
    data
})

export const getShoppingCart = (data) => {
    return {
        type: 'GET_CART_REQUEST',
        data
    }
}
export const getShoppingCartSuccess = data => ({
    type: 'GET_CART_REQUEST_SUCCESS',
    data
})