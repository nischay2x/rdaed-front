import React from 'react';

import { Box, Paper, Container, Grid, Button, Typography, Link } from "@mui/material";
import { ControlPoint, ArrowRight } from '@mui/icons-material';

import BgImage from "../../components/bgImage.jsx";
import { user, properties } from "../../config/constants.js";

const styles = {
    boxButtons: {
        color: "#fff",
        textAlign: "center",
        py: 1
    },
    userInfo: {
        py: 1,
        px: 2,
        border: "1px solid rgba(0, 0, 0, 0.5)",
        borderRadius: "3px"
    },
    alertBox: {
        borderRadius: "3px",
        color: "#C60F2D", 
        border: "1px solid #c60f2d", 
        textAlign: "center", 
        background: "rgba(198, 15, 45, 0.04)",
        display: "flex",
        flexDirection: "column",
        gap: 2
    },
    dueBox: {
        backgroundColor: "#fff",
        border: "1px solid #C60F2D",
        padding: "4px 8px",
        borderRadius: "5px",
        fontSize: "0.8rem",
        width: "fit-content",
        margin: "auto"
    },
    addProperty: {
        border: "2px dashed #6C6C6C",
        px: 2,
        fontFamily: "inherit",
        fontSize: "0.9rem",
        fontWeight: 500,
        color: "#6C6C6C",
        display: "flex",
        columnGap: "3px",
        textTransform: "none",
        marginLeft: "auto"
    },
    propertyBox: {
        padding: 3,
        borderRadius: "50px",
        backgroundColor: "#fff",
        mt: 3,
        boxShadow: "2px 2px 170px rgba(0, 0, 0, 0.1);",
    },
    knowProperty: {
        borderRadius: "50px",
        margin: "auto",
        textTransform: "none",
        py: 1,
        px: 2
    },
    // this page
    approvalBox: {
        background: 'linear-gradient(282.97deg, #FF3A1F 37.65%, rgba(255, 46, 0, 0) 249.25%)',
        filter: 'drop-shadow(0px 0px 60px rgba(255, 58, 31, 0.4))',
        color: "#fff",
        px:3, py: 2,
        borderRadius: "40px"
    },
    complaintBox: {
        background: 'linear-gradient(282.97deg, #272727 37.65%, #FFFFFF 249.25%)',
        boxShadow: '0px 0px 60px rgba(39, 39, 39, 0.32)',
        color: "#fff",
        px:3, py: 2,
        borderRadius: "40px"
    },
    paymentBox: {
        p: 2,
        borderRadius: "50px",
        overflow: 'hidden',
        maxHeigth: 300
    }
}

export default function Home() {
  return (
      <Container maxWidth="xl">
              <Grid container justifyContent="space-around">
                  <Grid item md={7} lg={8} xl={8}>  
                    <LeftPart/>
                  </Grid>
                  <Grid item md={5} lg={4} xl={4}>
                      <RightPart/>
                  </Grid>
              </Grid>
      </Container>
  )
}

function LeftPart () {
    return(
        <Box sx={{ px: 2 }} >  
            <Box sx={{ display: "flex", columnSpacing: 3, flexWrap: "nowrap", overflow: { y: "scroll" }, columnGap: 2 }}  >
                <Grid item xl={4} lg={6} md={8}>
                    <Box sx={styles.approvalBox}>
                        <Box display="flex" alignItems="center">
                            <Typography>Pending Approvals </Typography> <ArrowRight/> 
                        </Box>
                        <Typography lineHeight="5.5rem" display="block" variant='span' fontSize="5rem" fontWeight="500">
                            04
                        </Typography>
                        <Typography variant='span' lineHeight="0.7rem" fontSize="0.7rem" maxWidth="70%">
                            Click the card to get detailed information about the pending properties.
                        </Typography>
                    </Box>
                </Grid>  
                <Grid item xl={4} lg={6} md={8}>
                    <Box sx={styles.complaintBox}>
                        <Box display="flex" alignItems="center">
                            <Typography>Pending Approvals </Typography> <ArrowRight/> 
                        </Box>
                        <Typography lineHeight="5.5rem" display="block" variant='span' fontSize="5rem" fontWeight="500">
                            04
                        </Typography>
                        <Typography variant='span' lineHeight="0.7rem" fontSize="0.7rem" maxWidth="70%">
                            Click the card to view/manage/resolve the complaints received.
                        </Typography>
                    </Box>
                </Grid>    
            </Box>
            <br/>
            <Paper sx={styles.paymentBox}>
                <Box display="flex" alignItems="center">
                    <Typography variant='h6' fontWeight={500}>Recent Payments </Typography> <ArrowRight/> 
                </Box>
            </Paper>
            <Grid container rowSpacing={2} py={2}>
                <Grid item xs={12} md={12}>
                    <Box sx={styles.userInfo}>
                        <span style={{ color: "#6c6c6c" }}>Name :</span> {user.name}
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box sx={styles.userInfo}>
                        <span style={{ color: "#6c6c6c" }}>Mobile :</span> {user.mobile}
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box sx={styles.userInfo}>
                        <span style={{ color: "#6c6c6c" }}>Address :</span> {user.address}
                    </Box>
                </Grid>
            </Grid>
            <Link href="#" underline="none">
                <Box sx={{...styles.boxButtons, backgroundColor: "var(--dark-blue)", borderRadius: "3px"}}
                >Know More</Box>
            </Link>
            <br/>
            <Box sx={styles.alertBox} py={2} >
                <Typography fontFamily="inherit">
                    <b>Your Payment Is Due</b>
                </Typography>
                <Box sx={styles.dueBox}>
                    <span >Due Type : </span> <span style={{fontWeight: 500}}>Water Bill</span>
                </Box>
                <Box sx={styles.dueBox}>
                    <span>Due Date : </span> <span style={{fontWeight: 500}}>02.03.2022</span>
                </Box>
                <Link href="#" color="inherit">Know More</Link>
            </Box>
        </Box>
    )
}

function RightPart () {
    return(
        <Box sx={{px: 2}}>
            <Grid container justifyContent="space-between" pl={3}>
                <Grid item md={5} lg={5} xl={3}>
                    <Box sx={{...styles.boxButtons, backgroundColor: "#C60F2D"}}>Properties</Box>
                </Grid>
                <Grid item md={4} lg={3} xl={2}>
                    <Button sx={styles.addProperty}>
                        <ControlPoint fontSize="small" /> Add Property
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{ borderLeft: "1px solid #dddddd", pl: 3 }}>
                { properties.map((p, i) => <PropertyCard data={p} key={i} />) }
            </Box>
        </Box>
    )
}

function PropertyCard ({ data }) {
    return(
        <Grid container sx={styles.propertyBox}>
            <Grid item md={3}>
                <BgImage src={data.image} borderRadius="50px" overflow="hidden" width="100%" height="100%"/>
            </Grid>
            
            <Grid item md={7}>
            <Grid container px={3} rowSpacing={1} sx={{fontSize: "0.9rem"}}>
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
            
            <Grid item md={2} display="flex">
                <Button variant="contained" sx={styles.knowProperty} color="primary">Know More</Button>
            </Grid>
        </Grid>
    )
}