import * as React from "react";
import parse from "html-react-parser";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputAdornment from "@mui/material/InputAdornment";

const ViewDetail = () => {
  const { state } = useLocation();
  const { movie } = state;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="details">
      <h1>
        <u>{movie.name}</u>
      </h1>
      <img
        className="image-detail"
        src={
          movie?.image?.original ??
          "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
        }
        alt={movie.name}
      />

      <div className="summary">{parse(movie.summary)}</div>

      <Button variant="outlined" onClick={handleClickOpen}>
        Book Movie Tickets
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const name = formJson.userName;
            const phoneNumber = formJson.phoneNumber;
            const tickets = formJson.tickets;
            const userDetails = {
              name,
              phoneNumber,
              tickets,
              movie: `${movie.name}`,
            };
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            handleClose();
          },
        }}
      >
        <DialogTitle>Book Tickets for "{movie.name}"</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-basic"
            label="Enter your Name"
            variant="standard"
            type="text"
            name="userName"
            margin="dense"
            fullWidth
            required
            sx={{ mb: "1rem" }}
          />
          <TextField
            label="Enter your Phone Number"
            id="filled-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
            required
            name="phoneNumber"
          />
          <TextField
            id="standard-tickets"
            label="No. of tickets to buy"
            variant="standard"
            type="number"
            name="tickets"
            margin="dense"
            fullWidth
            required
            sx={{ mt: "1rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Book</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewDetail;
