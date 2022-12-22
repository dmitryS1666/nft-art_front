import axios from "axios";

const BASE_URL = "https://api.rarible.org/v0.1/";

export const translateItemData = async (items, collectionData) => {
        const result = await items.map( item => {
            return {
                id: item.id,
                name: item.meta.name.slice(0, 22),
                description: item.meta.description,
                img: item.meta.content[0].url,
                tags: item.meta.tags.length > 0 ? item.meta.tags : 'bsc',
                price: '5 ETH',
                priceChange: ' 2500 $',
                wishlist: "100",
                imgAuthor: '/assets/icon/profileTest.png',
                collectionId: item.collection,
                collectionName: collectionData.name,
                collectionImg: collectionData?.meta.content[0].url,
                nameAuthor: collectionData.meta.name
            }
        })
        
        return result
}   

export const translateCollectionsFromId = async (items) => {
    // const result = await items.map (item => getItemsByCollectionId(item.id, 6)
    const result = await items.map (item => item.id)
    return getCollectionsArrayFromId(result)
}

export const getCollectionsArrayFromId = async (array) => {
        let stateAr = []
        await array.map(id => getItemsByCollectionId(id, 6).then(res => stateAr.push(translateItemData(res, id))))
        
        console.log(stateAr);
    // return await newArray
}

export const getItemsByCollectionId = async (collectionId = "ETHEREUM:0xd07dc4262bcdbf85190c01c996b4c06a461d2430", itemsQty = 16) => {
    try {
        const collectionData = await getCollectionById(collectionId)
        const res = await axios.get(`${BASE_URL}items/byCollection?collection=${collectionId}&size=${itemsQty}`)
        return await translateItemData(res.data.items, collectionData)
    } catch (error) {
        console.log(error);
    }
} 

export const  getItemById = async (itemId) => {
    try {
        const item = await axios.get(`${BASE_URL}items/${itemId}`)
        const collectionData = await getCollectionById(item.data.collection)
        return {
            id: item.data.id,
            name: item.data.meta.name.slice(0, 22),
            description: item.data.meta.description,
            img: item.data.meta.content[0].url,
            tags: item.data.meta.tags.length > 0 ? item.data.meta.tags : 'bsc',
            price: '5 ETH',
            priceChange: ' 2500 $',
            wishlist: "100",
            imgAuthor: '/assets/icon/testIcon.png',
            collectionId: collectionData.id,
            collectionName: collectionData.name,
            collectionImg: collectionData?.meta.content[0].url,
            nameAuthor: collectionData.meta.name
        }
    } catch (error) {
        console.log(error)
    }
}

export const getCollectionById = async (collectionId="0xd07dc4262bcdbf85190c01c996b4c06a461d2430") => {
    try {
        const res = await axios.get(`${BASE_URL}collections/${collectionId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getPopularCollectionIds = async (collectionQty = 20, period='D7') => {
    try {
       const res = await axios.get(`${BASE_URL}data/trending/collections?limit=${collectionQty}&blockchain=ETHEREUM&period=${period}`)
       const randomCollections = await getRandomElements(12, res.data)
        const newCollection  = await translateCollectionsFromId(randomCollections)
        return getCollectionsArrayFromId(newCollection)

    } catch (error) {
        console.log(error)
    }
}

export const getRandomNumbers = (qty, limit) => {

    let array = [];
    for(let i = 1; i <= qty; i++) {
        let idx = Math.floor(Math.random() * limit+1)
        if(!array.find(index => index === idx)) {
            array.push(idx)
        } else (
            i --
        )
    }
    return array
}

export const getRandomElements = async (requiredQty, items) => {
    const numbers = await getRandomNumbers(requiredQty, items.length)
    const result = numbers.map( number => items[number] ? items[number] : items[0])
    return result.length === 1 ? result[0] : result
}