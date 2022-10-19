export async function getAllProduct(params) {
    const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/items?_page=${params.page}&_limit=${params.limit}`)
    var result = { data: [], totalCount: response.headers.get('X-Total-Count') }
    result.data = await response.json()
    return result
}
export async function getFilterProducts(params) {
    let tagsQuery = ""
    let manufacturerQuery = ""
    if (params.tags.length == 1 && params.tags.find(item => item == "*")) {
        tagsQuery = ""
    } 
    if(params.tags.length > 0 && params.tags.find(item => item != "*")) {
        params.tags.forEach(element => {
            tagsQuery += `&tags_like=${element}`
        });
    }
    
    if (params.manufacturer.length == 1 && params.manufacturer.find(item => item == "*")) {
        manufacturerQuery = "&manufacturer*"
    } 
    if(params.manufacturer.length > 0 && params.manufacturer.find(item => item != "*")) {
        params.manufacturer.forEach(element => {
            manufacturerQuery += `&manufacturer=${element}`
        });
    }
    const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/items?_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}${tagsQuery}${manufacturerQuery}`)
    var result = { data: [], totalCount: response.headers.get('X-Total-Count') }
    result.data = await response.json()
    return result
}

export async function getCompanies() {
    const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/companies`)
    var result = { data: [], totalCount: response.headers.get('X-Total-Count') }
    result.data = await response.json()
    return result
}

export async function getTags() {
    const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/items`)
    var result = { data: [], totalCount: response.headers.get('X-Total-Count') }
    result.data = await response.json()
    let stringArray = []
    result.data.map(item => {
        stringArray = stringArray.concat(item.tags)
    })
    let uniqueTags = [...new Set(stringArray)];
    result.data = uniqueTags.map(item => { return { name: item, account: item, slug: item } })
    return result
}