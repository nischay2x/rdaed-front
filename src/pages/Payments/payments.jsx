import { Box, Paper, Grid, Typography, Button } from "@mui/material";
import { user, recentPayments } from "../../config/constants";
import BgImage from "../../components/bgImage";
import { Download } from "@mui/icons-material";

export default function Payments() {
    return <Box pr={2}>
        {
            recentPayments.map((p, i) => (
                <Paper key={i} >
                    <Grid item xl={12} md={12} my={1}>
                        <Box display='flex' alignItems='center' justifyContent='space-between' pr={2} >
                            <Box width="45%">
                                <Box display='flex' alignItems='center' columnGap={1} p={2}  >
                                    <BgImage src={user.image} width="45px" height="45px" borderRadius="50%" />
                                    <Box>
                                        <span style={{ display: "block", fontSize: "small", color: "#6c6c6c" }}>
                                            {p.mode === 'CR' ? "Recieved" : "Sent"} via {p.method} | {p.vendor}
                                        </span>
                                        <Typography>{p.user}</Typography>
                                        <Typography fontSize='small' color='gray'>22 Sept 2022, 09:30 PM</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography color={p.mode === 'CR' ? "success.main" : "error.main"} variant="h6">
                                    &#8377;{new Intl.NumberFormat('en-IN').format(p.amount)}
                                </Typography>
                            </Box>
                            <Box>
                                <Button style={{ color: "#6c6c6c" }}
                                    sx={{ borderRadius: "25px", px: 3, py: 1, border: '1px dashed #6c6c6c', textTransform: "none" }}
                                >
                                    <Download fontSize="small" style={{ marginRight: '10px' }} />  Download Receipt
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Paper>

            ))
        }
    </Box>
}