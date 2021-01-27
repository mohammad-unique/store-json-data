import React, {useEffect, useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import {filterByCats, setPriceRangeContext, useHomeDispatch, useHomeState} from "../../../context/HomeContext";
import Slider from "@material-ui/core/Slider";

const Sidebar = () => {

    const homeDispatch = useHomeDispatch();
    const {catList, startPrice, endPrice} = useHomeState();
    const [selectedCats, setSelectedCats] = useState([]);
    const [priceRange, setPriceRange] = React.useState([0, 5000]);

    const handleChangeCatFilter = ({target}) => {
        if (target.checked)
            setSelectedCats(cats => ([...cats, target.name]))
        else {
            const index = selectedCats.findIndex(item => item === target.name);
            if (index !== -1)
                setSelectedCats(cats => ([...cats.slice(0, index), ...cats.slice(index + 1)]))
        }
    };

    useEffect(() => {
        filterByCats(homeDispatch, selectedCats)
    }, [selectedCats]);

    useEffect(() => {
        const id = setTimeout(() => {
            console.log("run timeout")
            setPriceRangeContext(homeDispatch,priceRange);
        }, 500);
        return ()=>clearTimeout(id);
    }, [priceRange]);

    const handleChangePriceRange = (event, newValue) => {
        setPriceRange(newValue);
    };


    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction={"column"}>
                        {catList.map(item => <FormControlLabel
                            control={<Checkbox checked={selectedCats.includes(item)} name={item}
                                               onChange={handleChangeCatFilter}/>}
                            label={item}
                        />)}
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Price (${priceRange[0]} - ${priceRange[1]})</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction={"column"}>
                        <Slider
                            value={priceRange}
                            onChange={handleChangePriceRange}
                            valueLabelDisplay="auto"
                            min={startPrice} max={endPrice}
                            aria-labelledby="range-slider"
                            getAriaValueText={value => `$${value}`}
                        />
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Sidebar;
