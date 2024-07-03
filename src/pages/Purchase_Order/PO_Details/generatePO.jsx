import React from "react";
import { Avatar, Box, Button, Card, Grid, Stack } from "@mui/material";
import FormController from "../components/formController";
import POTabs from "./PO_tabs";
import { NavLink } from "react-router-dom";
import UpdateIcon from "../../../assets/updateicon.svg";
import SaveDraftIcon from "../../../assets/savedrafticon.svg";
const GeneratePO = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6}>
          
          <Card sx={{ p: 2, backgroundColor: "#F5F6FF" }}>
          <Box py={0.5} sx={{ fontWeight: 800 }}>
            Vendor{" "}
          </Box>
          <br />
            <Stack display={"flex"} direction={"column"} spacing={2}>
              <FormController
                lable={"Company Name"}
                defaultVal={"Parisian - Reichert"}
              />
              <FormController
                lable={"Address"}
                defaultVal={"57032 Park Avenue, Konopelskifurt 10813-7302"}
              />
            </Stack>
          </Card>
        </Grid>
        <Grid item md={6}>
        <Card sx={{ p: 2, backgroundColor: "#F5F6FF" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box py={0.5} sx={{ fontWeight: 800 }}>
              Ship to{" "}
            </Box>

            <NavLink to="/purchase-order">
              {" "}
              <Stack direction={"row"}>
                Update Information{" "}
                <Avatar
                  src={UpdateIcon}
                  alt="update-icon"
                  style={{ height: "20px", width: "20px", marginLeft: 4 }}
                />
              </Stack>{" "}
            </NavLink>
          </Stack>
          <br />
         
            <Stack display={"flex"} direction={"column"} spacing={2}>
              <FormController
                lable={"Company Name"}
                defaultVal={"Abshire Inc"}
              />
              <FormController
                lable={"Address"}
                defaultVal={"18366 Gino Burgs, Jakubowskiburgh 30890"}
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Card>
          <POTabs />
        </Card>
      </Box>
      <Stack direction={"row"} justifyContent={"flex-end"} mt={5} spacing={3}>
        <Button variant="text" sx={{color: "#304FFE", textTransform:"none" }}>
          <Avatar
            src={SaveDraftIcon}
            alt="save-draft-icon"
            style={{ height: "20px", width: "20px", margin: 3}}
          />
          Save as draft
        </Button>
        <Button variant="contained" sx={{backgroundColor: "#304FFE", textTransform:"none"}}>Save and send for approval</Button>
      </Stack>
    </>
  );
};

export default GeneratePO;
