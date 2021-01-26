import React, {useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

const Sidebar = () => {

    const [cats, setCats] = useState([]);

    const handleChange = ({target}) => {
        if (target.checked)
            setCats(cats => ([...cats, target.name]))
        else {
            const index = cats.findIndex(item => item === target.name);
            if (index !== -1)
                setCats(cats => ([...cats.slice(0, index), ...cats.slice(index + 1)]))
        }
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
                        <FormControlLabel
                            control={<Checkbox checked={cats.includes("1")} name={"1"} onChange={handleChange}/>}
                            label="Cat A"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cats.includes("2")} name={"2"} onChange={handleChange}/>}
                            label="Cat B"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cats.includes("3")} name={"3"} onChange={handleChange}/>}
                            label="Cat C"
                        />
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction={"column"}>
                        <FormControlLabel
                            control={<Checkbox checked={cats.includes("1")} name={"1"} onChange={handleChange}/>}
                            label="* < 100$"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cats.includes("2")} name={"2"} onChange={handleChange}/>}
                            label="100$ < 200$"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cats.includes("3")} name={"3"} onChange={handleChange}/>}
                            label="200$ < 300$"
                        />
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Sidebar;
