import { Box, FormControl, Grid, InputBase, InputLabel, Paper, Stack, TextField } from "@mui/material"
import Layout from "../../layout"
import { styled, alpha } from '@mui/material/styles';
import OtherDetailsTabs from "./other_details";
import PODetails from "./PO_Details";
import FormController from "./components/formController";
import CustomBreadCum from "../../common/breadcum";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const PurchaseOrder = () => {
    return (
        <>
            <Layout>
                <Box height={"70vh"}  >
                    <CustomBreadCum />
                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={8.5}>
                            <Item>
                                <Box py={0.5} sx={{ fontWeight: 800 }} >General Information </Box><br />
                                <>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>

                                            <FormController lable={"Puchase Order Number"} defaultVal={"PO-20311"} />

                                        </Grid>
                                        <Grid item xs={6}>

                                            <FormController lable={"Puchase Order Date"} defaultVal={"16/09/2023"} />
                                        </Grid>
                                        <Grid item xs={6}>

                                            <FormController lable={" Delivery Date"} defaultVal={"24/10/2023"} />
                                        </Grid>
                                        <Grid item xs={6}>

                                            <FormController lable={"Status"} defaultVal={"Draf"} />
                                        </Grid>
                                    </Grid>

                                </>
                            </Item>
                            <Item sx={{ marginTop: 3 }}>

                                <PODetails />
                            </Item>
                        </Grid>
                        <Grid item xs={3.5}>
                            <Item>
                                <Box py={0.5} sx={{ fontWeight: 800 }} >General Information </Box><br />
                                <OtherDetailsTabs />
                            </Item>
                        </Grid>


                    </Grid>
                </Box>
            </Layout>
        </>
    )
}

export default PurchaseOrder