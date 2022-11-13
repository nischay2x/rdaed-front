import { Paper, Box, Grid, Typography } from "@mui/material";
import BgImage from "../../components/bgImage";
import { properties } from "../Properties/list";

export default function BidList() {
    return (
        <Grid container>
            <Grid item xs={12} md={6} lg={5} >
                <Paper elevation={1} sx={{ borderRadius: '25px' }}>
                    <Box sx={{ backgroundColor: "#EDEDED" }}>
                        <BgImage src={properties[0].image} width="100%" height="350px" borderRadius="25px" />
                        <Box px={3} py={2}>

                            <Box display='flex' justifyContent='space-between'>
                                <Typography>Plot Number</Typography> <Typography>{properties[0].plot}</Typography>
                            </Box>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography>Sector</Typography> <Typography>{properties[0].sector}</Typography>
                            </Box>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography>Allotment Date</Typography> <Typography>{properties[0].allotmentDate}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    )
}