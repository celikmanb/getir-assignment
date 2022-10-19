export default (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_REQUEST':
            return {
                ...state,
                items: {
                    ...state.items,
                    loading: true
                }
            }
        case 'GET_PRODUCT_REQUEST_SUCCESS':
            return {
                ...state,
                items: {
                    ...state.items,
                    loading: false,
                    data: action.data
                }
            }
        case 'GET_COMPANY_REQUEST':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    loading: true
                }
            }
        case 'GET_COMPANY_REQUEST_SUCCESS':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    loading: false,
                    data: action.data
                }
            }
        case 'GET_TAGS_REQUEST':
            return {
                ...state,
                tags: {
                    ...state.tags,
                    loading: true
                }
            }
        case 'GET_TAGS_REQUEST_SUCCESS':
            return {
                ...state,
                tags: {
                    ...state.tags,
                    loading: false,
                    data: action.data
                }
            }
        case 'GET_CART_REQUEST':
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    loading: true
                }
            }
        case 'GET_CART_REQUEST_SUCCESS':
            return {
                ...state,
                shoppingCart: {
                    ...state.shoppingCart,
                    loading: false,
                    data: action.data
                }
            }
        case 'GET_PRODUCT_SORTED_REQUEST_SUCCESS':
            return {
                ...state,
                filteredItems: action.data
            }
        case 'GET_PRODUCT_SORTED_REQUEST_FAIL':
            return {
                ...state,
                filteredItems: {
                    ...state.filteredItems,
                    loading: true
                }
            }
        default:
            return state
    }
}