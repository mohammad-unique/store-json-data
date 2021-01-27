import axios from 'axios';

export const getAxiosBase = () => {
    return axios.create({
        baseURL: "http://localhost:3001",
        timeout: 10000
    })
};

export const getProductList = () => {
    return getAxiosBase().get("/products").then(res => res.data);
};


export const getProductByPriceRange = (priceRange) => {
    return getAxiosBase().get(`/products?price_gte=${priceRange[0]}&price_lte=${priceRange[1]}`).then(res => res.data);
};
