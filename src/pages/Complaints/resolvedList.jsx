import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import BgImage from "../../components/bgImage";
import { user } from "../../config/constants";

export default function ResolvedList() {
    return (
        <Grid container spacing={2}>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
        </Grid>
    )
}

function ComplaintCard() {
    return (
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
            <Box sx={{ borderRadius: '25px', backgroundColor: '#fff' }}>
                <Box display='flex' alignItems='center' columnGap={1} p={2}  >
                    <BgImage src={user.image} width="40px" height="40px" borderRadius="50%" />
                    <Box>
                        <Typography>{user.name}</Typography>
                        <Typography fontSize='small' color='gray'>22 Sept 2022, 09:30 PM</Typography>
                    </Box>
                </Box>
                <Box px={2} pb={2}>
                    <Typography pb={1} fontWeight='500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, doloribus!
                    </Typography>

                    <Typography fontSize='small' sx={{ lineHeight: '2ch' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Molestiae, temporibus facere! Eveniet voluptas ipsum
                        illum dolore hic pariatur minima odit asperiores sit
                        doloribus labore nemo, enim maiores cupiditate porro quia!
                    </Typography>
                </Box>
                <Box pb={2} px={2}>
                    <Button color="white"
                        fullWidth
                        sx={{
                            color: '#0047FF',
                            textTransform: 'none',
                            borderRadius: '25px',
                            border: '1px solid #0047FF'
                        }} variant="contained">Complaint Resolved</Button>
                </Box>
                <Box textAlign='center' sx={{ backgroundColor: '#ededed', py: '4px' }}>
                    <Typography fontSize='small' color='#6c6c6c'>Complaint Number: 09</Typography>
                </Box>
            </Box>
        </Grid>
    )
}