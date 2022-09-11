import React, { useState } from 'react';

import { Box, Paper, Container, Grid, Button, Typography, Link, Tabs, Tab, Input, TextareaAutosize } from "@mui/material";
import { ControlPoint, ArrowRight } from '@mui/icons-material';
import TabPanel from "../../components/tabPanel.jsx"

import BgImage from "../../components/bgImage.jsx";
import { user, properties, recentPayments } from "../../config/constants.js";

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
        borderRadius: "50px",
        overflow: 'hidden',
        maxHeigth: 300
    },
    bugBox: {
        borderRadius: "40px",
        overflow: 'hidden'
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
    
    const [bugTab, setBugTab] = useState(0);
    const [report, setReport] = useState({
        title: "", file: "", description: ""
    });
    
    const handleReportChange = (e) => {
        setReport(prev => ({...prev, [e.target.name]: e.target.value}));
    }
    
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
                <Box display="flex" alignItems="center" px={3} py={3}>
                    <Typography variant='h5' fontWeight={500}>Recent Payments </Typography> <ArrowRight/> 
                </Box>
                <Grid container rowSpacing={1} maxHeight="220px" className='no-scrollbar' style={{overflowY: "scroll"}}>
                    {
                        recentPayments.map((p, i) => <Grid item xl={12} md={12} key={i}>
                            <Box display='flex' alignItems='center' justifyContent='space-between' style={{ backgroundColor: "#ededed" }} px={3} py={1} >
                                <Box width="50%">
                                    <Typography color="grey.main" variant="span" fontSize="small" sx={{ display: "block" }}>
                                        {p.mode === 'CR' ? "Recieved" : "Sent"} via {p.method} | {p.vendor}
                                    </Typography>
                                    <Typography variant="h6">
                                        {p.user}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color="grey.main" variant="span" fontSize="small">
                                        {p.date}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color={ p.mode === 'CR' ? "success.main": "error.main" } variant="h6">
                                        &#8377;{new Intl.NumberFormat('en-IN').format(p.amount)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>)
                    }
                </Grid>
            </Paper>
            <br/>
            <Paper sx={styles.bugBox}>
                <Tabs value={bugTab} sx={{ borderBottom: "1px solid #ededed"}} onChange={(e, nv) => { setBugTab(nv) }} 
                    aria-label="basic tabs example" id="bug-tabs" variant="fullWidth">
                    <Tab sx={{textTransform: "none", fontSize: "1.1rem"}} label="Report Bug" id='simple-tab-0' aria-controls='simple-tabpanel-0'/>
                    <Tab sx={{textTransform: "none", fontSize: "1.1rem"}} label="Track Reported Bug" id='simple-tab-1' aria-controls='simple-tabpanel-1'/>
                </Tabs>
                
                <TabPanel value={bugTab} index={0}>
                    <form encType='multipart/form-data' onSubmit={() => {}}>
                        <Box display="flex" justifyContent='space-between'>
                            <input type="text" placeholder='Title *' required name="title"
                                className='c-text-input' style={{minWidth: "200px"}}  
                                value={report.title} onChange={handleReportChange}
                            />
                            <input type="file" placeholder='Upload Screenshots' />
                        </Box>  
                        <br/>
                        <Box pr={3}>
                            <textarea value={report.description} 
                                placeholder='Describe the issue* (maximum of 30 words)'
                                className='c-text-input'
                                style={{width: "100%"}}
                                rows={4}
                            ></textarea>
                        </Box>
                        <br/>
                        <Box display="flex">
                            <Button type="submit" style={{ backgroundColor: "black", color: "#fff" }} 
                                variant="contained" sx={{ borderRadius: "25px", px: 5, ml: 'auto' }}
                            >
                                Report
                            </Button>
                        </Box>
                    </form>
                </TabPanel>
                <TabPanel value={bugTab} index={1}>
                    two
                </TabPanel>
            </Paper>
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