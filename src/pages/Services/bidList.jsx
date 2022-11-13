import { Paper, Box, Grid, Typography, Button } from "@mui/material";
import BgImage from "../../components/bgImage";
import { user } from "../../config/constants";
import { properties } from "../Properties/list";

const bids = [
    { name: "Banshee Kumar", image: user.image, bid: 15.00, date: "01 Sept 2022, 10:18 AM" },
    { name: "Banshee Kumar", image: user.image, bid: 15.00, date: "01 Sept 2022, 10:18 AM" },
    { name: "Banshee Kumar", image: user.image, bid: 15.00, date: "01 Sept 2022, 10:18 AM" },
    { name: "Banshee Kumar", image: user.image, bid: 15.00, date: "01 Sept 2022, 10:18 AM" },
    { name: "Banshee Kumar", image: user.image, bid: 15.00, date: "01 Sept 2022, 10:18 AM" },
    { name: "Banshee Kumar", image: user.image, bid: 15.00, date: "01 Sept 2022, 10:18 AM" },
    { name: "Banshee Kumar", image: user.image, bid: 15.00, date: "01 Sept 2022, 10:18 AM" },
    { name: "Banshee Kumar", image: user.image, bid: 15.00, date: "01 Sept 2022, 10:18 AM" },
]

export default function BidList() {
    return (
        <Grid container gap={2} justifyContent='center'>
            <Grid item xs={12} md={6} lg={5} >
                <PlotCard property={properties[1]} bids={bids}/>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <PlotCard property={properties[0]} bids={bids.slice(0, 2)}/>
                <PlotCard property={properties[2]} bids={bids.slice(4)}/>
            </Grid>
        </Grid>
    )
}

function PlotCard({ property, bids = [] }) {
    return (
        <Paper elevation={2} sx={{ borderTopRightRadius: '25px', borderTopLeftRadius: '25px', my: 2 }}>
            <Box sx={{ backgroundColor: "#EDEDED", paddingBottom: '3px' }}>
                <BgImage src={property.image} width="100%" height="350px" borderRadius="25px" />
                <Box px={3} py={2}>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography>Plot Number</Typography> <Typography>{property.plot}</Typography>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography>Sector</Typography> <Typography>{property.sector}</Typography>
                    </Box>
                    <Box display='flex' pb={1} borderBottom='1px solid lightgray' justifyContent='space-between'>
                        <Typography>Allotment Date</Typography> <Typography>{property.allotmentDate}</Typography>
                    </Box>
                    <Box display='flex' pt={1} justifyContent='space-between'>
                        <Typography>Value</Typography> <Typography color='green'>&#x20b9; {property.value} Lakhs</Typography>
                    </Box>
                </Box>
                <Box>
                    {
                        bids.map((b, i) => {
                            return (
                                <Box key={i} display='flex' px={2} justifyContent='space-between'
                                    sx={{ backgroundColor: "#fff", my: 1, py: 1 }}
                                    alignItems='center'>
                                    <Box display='flex' alignItems='center' columnGap={1} >
                                        <BgImage src={b.image} width="45px" height="45px" borderRadius="50%" />
                                        <Box>
                                            <Typography>{b.name}</Typography>
                                            <Typography fontSize='small' color='gray'>{b.date}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography>&#x20b9; {b.bid} L</Typography>
                                    <Box display='flex' columnGap={1}>
                                        <Button color="white" sx={{
                                            color: '#000',
                                            border: '1px solid black',
                                            textTransform: 'none',
                                            width: '100px',
                                            borderRadius: '25px'
                                        }}>Reject</Button>
                                        <Button color="black" sx={{
                                            color: '#fff',
                                            width: "100px",
                                            textTransform: 'none',
                                            borderRadius: '25px'
                                        }} variant="contained">Accept</Button>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Paper>
    )
}