import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import EmailBadge from "../../assests/EmailBadge.png";

export default function Form() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12} md={5} lg={6}>
          <TextField
            sx={{ m: 1, width: " 100%" }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <TextField
            sx={{ m: 1, width: " 100%" }}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <TextField
            sx={{ m: 1, width: " 100%" }}
            id="outlined-basic"
            label="City"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} md={5} lg={6}>
          <TextField
            sx={{ m: 1, width: " 100%" }}
            id="outlined-basic"
            label="Postal Code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={10} lg={12}>
          <TextField
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="Email"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <img src={EmailBadge} alt="Email"></img>
                  </IconButton>
                </InputAdornment>
              }
              label="Email"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <TextField
            sx={{ m: 1, width: " 100%" }}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <FormControl sx={{ m: 1, width: " 100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  ></IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={{ m: 1 }}>
            Use this email to log in to your{" "}
            <span style={{ color: "#1688FE", cursor: 'pointer' }}>resumedone.io</span> account and
            receive notifications.
          </Typography>
          <Typography>
            <Button sx={{ m: 1, width: "20ch" }} variant="contained">
              Save
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
