import {ReactChild, useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid"
import { TextField } from "@mui/material";
import Traduttore from "./traduttore";
import { TextareaAutosize, FormControlLabel } from "@mui/material";
import {Button} from "@mui/material"
import Emoji from "./emoji"



function App() {

    const [checked, setChecked] = useState(true);
    const [text, setText] = useState("");
    const [traduzione, setTraduzione] = useState([])


    function handleCheck() {
        setChecked(!checked)
    }

    function handleChange(e) {
        const value = e.target.value;
        setText(value)
    }

    function handleClick() {
        const testo = Traduttore(checked ? 0 : 1, text)
        setTraduzione(testo)
    }



    return (
        <Grid
            container
            style={{width: "100%", minHeight: "90vh"}}
            alignItems="center"
            justifyContent="center"
            
        >
        <div />
        <div>
        <Grid
            justifyContent="center"
            style={{marginTop: 200}}
        >
            <Grid 
                container 
                item
                justifyContent="center"
                style={{width: 400}}
            >
                <TextField 
                    label="Testo"
                    multiline
                    fullWidth
                    onChange={handleChange}
                    value={text}
                />
            </Grid>
            <Grid 
                container 
                item
                justifyContent="center"
                style={{marginTop: 30}}
            >
                <FormControlLabel control={
                <Checkbox 
                    checked={checked}
                    onChange={handleCheck}
                />
                } label="Emoji a Testo" />
                <FormControlLabel control={
                <Checkbox 
                    checked={!checked}
                    onChange={handleCheck}
                />
                } label="Emoji a Testo" />
            </Grid>
            <Grid
                container
                item
                justifyContent="center"
                style={{marginBottom: 120, marginTop: 30}}
            >
                <Button
                    variant="contained"
                    onClick={handleClick}
                >
                Traduci
                </Button>
            </Grid>
            <Grid 
                container 
                item
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <h1>Traduzione</h1>
                {traduzione}
            </Grid>
        </Grid>        
        </div>
        <div />
        </Grid>
    )
}


export default App;
