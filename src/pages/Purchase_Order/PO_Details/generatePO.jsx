import { Box, Card, Grid, Stack } from "@mui/material"
import FormController from "../components/formController"
import POTabs from "./PO_tabs"

const GeneratePO = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={6}>

                    <Box py={0.5} sx={{ fontWeight: 800 }} >Vendor </Box><br />
                    <Card sx={{ p: 3, backgroundColor: "#F5F6FF" }}>
                        <Stack display={"flex"} direction={"column"} spacing={2}>
                            <FormController lable={"Company Name"} defaultVal={"Parisian - Reichert"} />
                            <FormController lable={"Address"} defaultVal={"57032 Park Avenue, Konopelskifurt 10813-7302"} />
                        </Stack>
                    </Card>

                </Grid>
                <Grid item md={6}>
                    <Box py={0.5} sx={{ fontWeight: 800 }} >Ship to </Box><br />
                    <Card sx={{ p: 3, backgroundColor: "#F5F6FF" }}>
                        <Stack display={"flex"} direction={"column"} spacing={2}>
                            <FormController lable={"Company Name"} defaultVal={"Abshire Inc"} />
                            <FormController lable={"Address"} defaultVal={"18366 Gino Burgs, Jakubowskiburgh 30890"} />
                        </Stack>
                    </Card>
                </Grid>

            </Grid>
            <Box mt={3}>
                <Card>
                    <POTabs />
                </Card>
            </Box>
        </>
    )
}

export default GeneratePO