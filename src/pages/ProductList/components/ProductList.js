import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [topic, setTopic] = useState();
    const [filterLen, setFilterLen] = useState(20);

    return (
        <div>
            <Grid container >
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
                    </Select>
                </FormControl>
            </Grid>
        </div>
    );
};

export default ProductList;
