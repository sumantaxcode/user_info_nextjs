"use client";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import QRCode from "react-qr-code";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    textAlign: "left",
    margin: "20px",
    padding: "20px",
  },
  qrCodeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qrCode: {
    width: "200px", // Adjust the size as needed
  },
}));

const DisplayInfoPage = ({ formData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">User Information</Typography>
            <Typography variant="body1">Name: {formData?.name}</Typography>
            <Typography variant="body1">Title: {formData?.title}</Typography>
            <Typography variant="body1">Age: {formData?.age}</Typography>
            <Typography variant="body1">Gender: {formData?.gender}</Typography>
            <Typography variant="body1">
              Phone Number: {formData?.phoneNumber}
            </Typography>
            <Typography variant="body1">Email: {formData?.email}</Typography>
            <Typography variant="body1">
              Address: {formData?.address}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className={classes.qrCodeContainer}>
          <Box className={classes.qrCode}>
            <QRCode
              value={`https://user-info-nextjs.vercel.app/profile/${formData?._id}`}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DisplayInfoPage;
