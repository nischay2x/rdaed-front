import { Container, Box, Button, Paper, Grid } from "@mui/material";
import { Upload } from "@mui/icons-material";
import BgImage from "../../components/bgImage";

export const properties = [
    {
        plot: "AB1", sector: "B4", allotmentDate: "02/01/2022", value: "10.53", owner: "Rohit Sharma",
        image: "https://images.pexels.com/photos/60638/namibia-africa-landscape-nature-60638.jpeg?auto=compress&cs=tinysrgb&w=480&h=285&dpr=1"
    },
    {
        plot: "AB2", sector: "B4", allotmentDate: "02/01/2022", value: "10.53", owner: "Rohit Sharma",
        image: "https://images.pexels.com/photos/60638/namibia-africa-landscape-nature-60638.jpeg?auto=compress&cs=tinysrgb&w=480&h=285&dpr=1"
    },
    {
        plot: "AB3", sector: "B4", allotmentDate: "02/01/2022", value: "10.53", owner: "Rohit Sharma",
        image: "https://images.pexels.com/photos/60638/namibia-africa-landscape-nature-60638.jpeg?auto=compress&cs=tinysrgb&w=480&h=285&dpr=1"
    }
]

const styles = {
    boxButtons: {
        color: "#fff",
        textAlign: "center",
        py: 1
    },
    propertyBox: {
        padding: 2,
        borderRadius: "50px",
        backgroundColor: "#fff",
        justifyContent: 'space-between',
        boxShadow: "2px 2px 170px rgba(0, 0, 0, 0.1);",
    },
    knowProperty: {
        borderRadius: "50px",
        margin: "auto 0 auto auto",
        textTransform: "none",
        py: 1,
        pl: 2
    }
}

export default function PropertyList() {
    return <Container>
        <Box textAlign='center' pb={4}>
            <Button style={{ color: "#6c6c6c" }}
                sx={{ borderRadius: "25px", px: 3, py: 1, border: '1px dashed #6c6c6c', textTransform: "none" }}
            >
                <Upload fontSize="small" style={{ marginRight: '10px' }} />  Add Property
            </Button>
        </Box>
        <Box display='flex' flexDirection='column' rowGap={2}>
            {properties.map((p, i) => <Grid item md={10} lg={6} key={i} >
                <PropertyCard data={p} key={i} />
            </Grid>
            )}
        </Box>
    </Container>
}

function PropertyCard({ data }) {
    return (
        <Grid container sx={styles.propertyBox}>
            <Grid item md={3} lg={2}>
                <BgImage src={data.image} borderRadius="50px" overflow="hidden" width="100%" height="100%" />
            </Grid>

            <Grid item md={7}>
                <Grid container px={3} rowGap="3px" sx={{ fontSize: "0.9rem" }}>
                    <Grid item xs={12} md={6}>
                        <span className="text-secondary">Plot Number : </span> {data.plot}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <span className="text-secondary">Allotment Date : </span> {data.plot}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <span className="text-secondary">Sector : </span> {data.sector}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <span className="text-secondary">Value : </span> {data.value}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <span className="text-secondary">Owner : </span> {data.owner}
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={2} display="flex" columnGap={1}>
                <Button variant="contained" sx={{...styles.knowProperty, border: '1px solid black'}} color="white">Reject</Button>
                <Button variant="contained" sx={{...styles.knowProperty, color: '#fff'}} color="customBlue">Accept</Button>
            </Grid>
        </Grid>
    )
}