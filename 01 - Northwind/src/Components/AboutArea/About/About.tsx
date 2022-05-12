import "./About.css";
import { TextField, FormControlLabel, Checkbox, Button, ButtonGroup, Typography } from "@mui/material";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

function About(): JSX.Element {
    return (
        <div className="About Box">

            <Typography variant="h4" className="Centered">
                <ContactMailIcon fontSize="large" />
                &nbsp;
                Contact Us
            </Typography>

            <form>

                <TextField label="Name" variant="outlined" className="TextBox" />

                <TextField label="Email" variant="outlined" className="TextBox" />

                <TextField label="Message" variant="outlined" className="TextBox" />

                <FormControlLabel label="Send me promotional emails" control={<Checkbox />} />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary"> <SendIcon /> &nbsp; Send</Button>
                    <Button type="reset" color="secondary"> <ClearIcon /> &nbsp; Clear</Button>
                </ButtonGroup>

            </form>

        </div>
    );
}

export default About;
