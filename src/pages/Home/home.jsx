import React, { useRef, useState } from 'react';

import { Box, Paper, Container, Grid, Button, Typography, Link, Tabs, Tab, Input, TextareaAutosize } from "@mui/material";
import { ControlPoint, ArrowRight, Upload, Call, Mail, LocationOn } from '@mui/icons-material';
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
    },
    userInfoInput: { 
        p: 1, 
        borderRadius: "10px", 
        backgroundColor: "#ededed" 
    },
    editProfileButton: {
      color: "#fff",
      borderRadius: "25px",
      backgroundColor: "rgba(0, 71, 255)",
      display: "flex",
      p: 1,
      textTransform: "none",
      ":hover": {
          backgroundColor: "rgba(0, 71, 255, 0.9)",
          boxShadow: "0px 0px 35px rgba(39, 39, 39, 0.04)",
          color: "#fff"
      }
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
    
    const screenshotsRef = useRef();
    
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
                                    <span style={{display: "block", fontSize: "small", color: "#6c6c6c"}}>
                                        {p.mode === 'CR' ? "Recieved" : "Sent"} via {p.method} | {p.vendor}
                                    </span>
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
                            <Button onClick={() => {screenshotsRef.current.click()}}  style={{ color: "#6c6c6c" }} 
                                sx={{ borderRadius: "25px", px: 4, border: '1px dashed #6c6c6c', textTransform: "none" }}
                            >
                               <Upload fontSize="small"/>  Upload Screenshots
                            </Button>
                            <input ref={screenshotsRef} style={{display: 'none'}} type="file" name="screenshots" placeholder='Upload Screenshots' />
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
        <Box px={1}>
            <Paper sx={{ borderRadius: "30px", overflow: "hidden"}}>
                <Box py={2} display="flex" justifyContent="center">
                    <BgImage src={user.image} width="9rem" height="9rem" borderRadius="50%" />
                </Box>
                <Typography variant="h6" textAlign="center" fontWeight={600}>
                    {user.name}
                </Typography>
                <Typography varaint="span" textAlign="center" fontWeight={500} style={{color: "#6c6c6c"}}>
                    Employee
                </Typography>
                <Box py={3} px={4} display="flex" flexDirection="column" rowGap={2} mx='auto' style={{maxWidth: "350px"}}>
                    <Box >
                        <span style={{color: "#6c6c6c", fontSize: "small"}} >Phone Number</span>
                        <Box display="flex" columnGap={1}>
                            <Box sx={styles.userInfoInput} style={{width: "30px"}}>
                                <input value={`+91`} type="text" className='hidden-input' />
                            </Box>
                            <Box sx={styles.userInfoInput} display="flex" columnGap={1} alignItems="center" style={{width: "150px"}} >
                               <Call fontSize='small' sx={{ ml: 2}}/> <input value="6264-22-177" type="tel" className='hidden-input' />
                            </Box>
                        </Box>
                    </Box>
                    <Box >
                        <span style={{color: "#6c6c6c", fontSize: "small"}} >Email</span>
                        <Box sx={styles.userInfoInput} display="flex" columnGap={1} alignItems="center" >
                            <Mail fontSize='small' sx={{ ml: 2}}/> <input value={user.email} type="mail" className='hidden-input' />
                        </Box>
                    </Box>
                    <Box >
                        <span style={{color: "#6c6c6c", fontSize: "small"}} >Address</span>
                        <Box sx={styles.userInfoInput} display="flex" columnGap={1}  >
                            <LocationOn fontSize='small' sx={{ ml: 2}}/> <textarea value={user.address} className='hidden-input'></textarea>
                        </Box>
                    </Box>
                    <Box pt={3}>
                        <Button style={{width: "100%"}} sx={styles.editProfileButton} >Edit Profile</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
