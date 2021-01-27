import React from 'react';
import {Star, StarBorder} from '@material-ui/icons'

const ProductItem = ({item}) => {
    return (
        <li>
            <div className={"product-item--img-c"}>
                <img src={item.mainPhoto}/>
                <img className={"product-item--alt-photo"} src={item.altPhoto}/>
                <div className={"product-item--overlay"}/>
            </div>
            <p className={"product-item--topic"}>{item.topic}</p>
            <div>
                {"0".repeat(item.rate).split("").map(item => <Star/>)}
                {"0".repeat(5 - item.rate).split("").map(item => <StarBorder/>)}
            </div>
            <p className={"product-item--name"}>{item.name}</p>
            <p className={"product-item--cat"}>{item.cat}</p>
            <p className={"product-item--price"}>${item.price}</p>
        </li>
    );
};

export default ProductItem;
