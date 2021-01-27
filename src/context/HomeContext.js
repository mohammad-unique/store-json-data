import React from "react";
import {getProductByPriceRange} from "../api";

var HomeStateContext = React.createContext();
var HomeDispatchContext = React.createContext();

function homeReducer(state, action) {
    switch (action.type) {
        case "setProductList":
            return {
                ...state,
                productList: action.payload,
                catList: action.payload.reduce(function (acc, item) {
                    if (!acc.includes(item.cat))
                        return [...acc, item.cat]
                    else return acc
                }, []),
                filteredProductList: action.payload.slice(0, state.filterLen),
                startPrice: action.payload.reduce((acc, item) => {
                    const price = item.price;
                    if (acc < price)
                        return acc;
                    return price;
                }, 1000),
                endPrice: action.payload.reduce((acc, item) => {
                    const price = item.price;
                    if (acc > price)
                        return acc;
                    return price;
                }, 0),
            };
        case "setProductListFromPriceRange":
            return {
                ...state,
                productList: action.payload,
                filteredProductList: action.payload.slice(0, state.filterLen),
            };
        case "setFilterListToProducts":
            return {...state, filteredProductList: state.productList.slice(0, action.payload)};
        case "setTopicFilter":
            return {
                ...state,
                filteredProductList: state.productList.filter(item => !action.payload || action.payload === "All" || item.topic === action.payload)
            };
        case "filterByCats":
            return {
                ...state,
                filteredProductList: state.productList.filter(item => action.payload.length === 0 || action.payload.includes(item.cat))
            };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function HomeProvider({children}) {
    const matchesMobileSize = window.innerWidth < 960;
    const initialState = {
        productList: [],
        filteredProductList: [],
        filterLen: 20,
        catList: [],
        startPrice: 0,
        endPrice: 100
    };
    var [state, dispatch] = React.useReducer(homeReducer, initialState);
    return (
        <HomeStateContext.Provider value={state}>
            <HomeDispatchContext.Provider value={dispatch}>
                {children}
            </HomeDispatchContext.Provider>
        </HomeStateContext.Provider>
    );
}


function useHomeState() {
    var context = React.useContext(HomeStateContext);
    if (context === undefined) {
        throw new Error("useHomeState must be used within a HomeProvider");
    }
    return context;
}


function useHomeDispatch() {
    var context = React.useContext(HomeDispatchContext);
    if (context === undefined) {
        throw new Error("useHomeDispatch must be used within a HomeProvider");
    }
    return context;
}

export {
    HomeProvider,
    useHomeState,
    useHomeDispatch
};

// ###########################################################
export const setProductList = (dispatch, list) => {
    dispatch({type: "setProductList", payload: list});
};

export const setFilterLenToProducts = (dispatch, len) => {
    dispatch({type: "setFilterListToProducts", payload: len});
};

export const setTopicFilter = (dispatch, topic) => {
    dispatch({type: "setTopicFilter", payload: topic});
};

export const filterByCats = (dispatch, cats) => {
    dispatch({type: "filterByCats", payload: cats});
};

export const setPriceRangeContext = (dispatch, range) => {
    getProductByPriceRange(range).then(res => {
        dispatch({type: "setProductListFromPriceRange", payload: res});
    });
};
