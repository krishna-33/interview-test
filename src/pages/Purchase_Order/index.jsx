import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import Layout from "../../layout";
import { styled } from "@mui/material/styles";
import OtherDetailsTabs from "./other_details";
import PODetails from "./PO_Details";
import FormController from "./components/formController";
import CustomBreadCum from "../../common/breadcum";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const PurchaseOrder = () => {
  return (
    <>
      <Layout>
        <Box height={"70vh"}>
          <CustomBreadCum />
          <Grid container spacing={2} mt={2}>
            <Grid item xs={8.5}>
              <Item>
                <Box sx={{px: 1, py: 1.5}}>
                <Box py={0.5} sx={{ fontWeight: 800 }}>
                  General information{" "}
                </Box>
                <br />
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormController
                        lable={"Puchase Order Number"}
                        defaultVal={"PO-20311"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormController
                        lable={"Puchase Order Date"}
                        defaultVal={"16/09/2023"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormController
                        lable={" Delivery Date"}
                        defaultVal={"24/10/2023"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormController lable={"Status"} defaultVal={"Draft"} />
                    </Grid>
                  </Grid>
                </>
                </Box>
              </Item>
              <Item sx={{ marginTop: 3 }}>
                <PODetails />
              </Item>
            </Grid>
            <Grid item xs={3.5}>
              <Item>
                <Box py={0.5} sx={{ fontWeight: 800 }}>
                  Other details{" "}
                </Box>
                <br />
                <OtherDetailsTabs />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default PurchaseOrder;
