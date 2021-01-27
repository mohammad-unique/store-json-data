import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {getProductList} from "../../../api";
import ProductItem from "./ProductItem";
import {
    setFilterLenToProducts,
    setProductList,
    setTopicFilter,
    useHomeDispatch,
    useHomeState
} from "../../../context/HomeContext";

const ProductList = () => {

    const homeDispatch = useHomeDispatch();
    const {filteredProductList: products,filterLen : filterLenDefault} = useHomeState();
    const [topic, setTopic] = useState();
    const [filterLen, setFilterLen] = useState(filterLenDefault);

    useEffect(() => {
        getProductList().then(res => {
            setProductList(homeDispatch, res);
        })
    }, []);

    useEffect(() => {
        setFilterLenToProducts(homeDispatch, filterLen);
    }, [filterLen]);

    useEffect(() => {
        setTopicFilter(homeDispatch, topic);
    }, [topic]);

    return (
        <div>
            <Grid container>
                <p className={"page-product-list--resultCount"}>{products.length} result</p>
                <FormControl variant="outlined" className={"page-product-list--select"}>
                    <InputLabel id="demo-simple-select-outlined-label">Topic</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={topic}
                        onChange={({target}) => setTopic(target.value)}
                        label="Topic"
                    >
                        <MenuItem value={"All"}>View All</MenuItem>
                        <MenuItem value={"Relevance"}>Relevance</MenuItem>
                        <MenuItem value={"Best Sellers"}>Best Sellers</MenuItem>
                        <MenuItem value={"Top Rated"}>Top Rated</MenuItem>
                        <MenuItem value={"Newest"}>Newest</MenuItem>
                        <MenuItem value={"Highest Price"}>Highest Price</MenuItem>
                        <MenuItem value={"Lowest Price"}>Lowest Price</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={"page-product-list--select"}>
                    <InputLabel id="demo-simple-select-outlined-label">Limit</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={filterLen}
                        onChange={({target}) => setFilterLen(target.value)}
                        label="Limit"
                    >
                        <MenuItem value={"20"}>20</MenuItem>
                        <MenuItem value={"50"}>50</MenuItem>
                        <MenuItem value={"100"}>100</MenuItem>
                        <MenuItem value={"200"}>View All</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <ul className={"page-product-list--list-ul"}>
                {products.map((item, index) =>
                    <ProductItem key={index} item={item}/>)}
            </ul>
        </div>
    );
};

export default ProductList;
