import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Divider, Stack } from '@mui/material';



function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}



function createRow(code, name, qty, uom, price, shipping_method) {

    return { code, name, qty, uom, price, shipping_method };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('ITEM-23761', 'Apple MacBook Pro M1 ', 1, 'Each', 1200.00, 'UPS'),
    createRow('ITEM-23761', 'Apple MacBook Pro M1 ', 1, 'Each', 1200.00, 'UPS'),
    createRow('ITEM-23761', 'Apple MacBook Pro M1 ', 1, 'Each', 1200.00, 'UPS'),
    createRow('ITEM-23761', 'Apple MacBook Pro M1 ', 1, 'Each', 1200.00, 'UPS'),
    createRow('ITEM-23761', 'Apple MacBook Pro M1 ', 1, 'Each', 1200.00, 'UPS'),
];


export default function PurchaseTable() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead sx={{ backgroundColor: "#EFF2F4" }}>
                        <TableRow>
                            <TableCell sx={{ border: "1px solid" }}>ITEM CODE</TableCell>
                            <TableCell sx={{ border: "1px solid" }}>ITEM</TableCell>
                            <TableCell sx={{ border: "1px solid" }}>Quantity</TableCell>
                            <TableCell sx={{ border: "1px solid" }}>UOM</TableCell>
                            <TableCell sx={{ border: "1px solid" }}>Price</TableCell>
                            <TableCell sx={{ border: "1px solid" }}>Shipping method</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.code}>
                                <TableCell sx={{ border: "1px solid" }} >{row.code}</TableCell>
                                <TableCell sx={{ border: "1px solid" }}>{row.name}</TableCell>
                                <TableCell sx={{ border: "1px solid" }}>{row.qty}</TableCell>
                                <TableCell sx={{ border: "1px solid" }}>{row.uom}</TableCell>
                                <TableCell sx={{ border: "1px solid" }}>₹ {ccyFormat(row.price)}</TableCell>
                                <TableCell sx={{ border: "1px solid" }}>{row.shipping_method}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
                <Box sx={{ float: "right", width: "348px" }} >
                    <Stack display={"flex"} direction={"row"} justifyContent={"space-between"} spacing={4} p={2}>
                        <Box>Sub Total</Box>
                        <Box>12,000.00 INR</Box>
                    </Stack>
                    <Stack display={"flex"} direction={"row"} justifyContent={"space-between"} spacing={4} p={2}>
                        <Box>Discount (5%)</Box>
                        <Box>-600.00 INR</Box>
                    </Stack>
                    <Stack display={"flex"} direction={"row"} justifyContent={"space-between"} spacing={4} p={2}>
                        <Box>Tax (GSTIN)</Box>
                        <Box>"2,052 INR</Box>
                    </Stack>
                    <Divider variant="middle"  />
                    <Stack display={"flex"} direction={"row"} justifyContent={"space-between"} spacing={4} p={2}>
                        <Box sx={{ fontWeight: 800, fontSize: 15 }}>Grand Total</Box>
                        <Box sx={{ fontWeight: 800, fontSize: 15 }}>13,452.00 INR</Box>
                    </Stack>
                </Box>
            </TableContainer>

        </>
    );
}
