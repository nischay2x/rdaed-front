import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import BgImage from "../../components/bgImage";
import { user } from "../../config/constants";
import axios from "axios";
import { baseUrl } from "../../config/api-config.js";
import { useEffect } from "react";
import { useUserContext } from "../../components/UserContext.js";
import { useState } from "react";

async function getComplaints (token) {
    try {
        const { data } = await axios.get(`${baseUrl}/employee_portal/get/complaints/`, {
            headers: {
                authorization: 'Bearer '+token
            }
        });
        return { data, error: false }
    } catch (error) {
        return { error }
    }
}


export default function ReceivedList() {

    const userContext = useUserContext();
    const userData = userContext.useUser();
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        if(!userData.token) return;
        getComplaints(userData.token).then((res) => {
            if(res.error) {
                alert('Error While Fetching Complaints.')
            } else {
                setComplaints(res.data);
            }
        })
    }, [userData.token])

    return (
        <Grid container spacing={2}>
            {
                complaints.map((c, i) => <ComplaintCard  data={c} key={i} />
                )
            }
            {/* <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/>
            <ComplaintCard/> */}
        </Grid>
    )
}

[{
    "id":1,
    "username":"abhi1820",
    "name":"Abhishek Soni",
    "complaint_id":"abhi182051",
    "subject":"something",
    "file":"/rdamedia/rdamedia/complaint/product-jpeg-500x500.jpeg",
    "description":"kuch toh hua hai",
    "date":"2022-12-04T12:53:11.424750Z",
    "status":"Waiting"
}]

function ComplaintCard({data}) {
    return (
        <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
            <Box sx={{ borderRadius: '25px', backgroundColor: '#fff' }}>
                <Box display='flex' alignItems='center' columnGap={1} p={2}  >
                    <BgImage src={user.image} width="40px" height="40px" borderRadius="50%" />
                    <Box>
                        <Typography>{data.name}</Typography>
                        <Typography fontSize='small' color='gray'>{new Date(data.date).toLocaleString()}</Typography>
                    </Box>
                </Box>
                <Box px={2} pb={2}>
                    <Typography pb={1} fontWeight='500'>
                        {data.subject}
                    </Typography>

                    <Typography fontSize='small' sx={{ lineHeight: '2ch' }}>
                        {data.description}
                    </Typography>
                </Box>
                <Box pb={2} px={2} textAlign='center'>
                    <Button color="customBlue"
                        sx={{
                            minWidth: '150px',
                            boxShadow: '0px 0px 63px rgba(39, 39, 39, 0.15)',
                            color: '#fff',
                            textTransform: 'none',
                            borderRadius: '25px'
                        }} variant="contained">Resolve</Button>
                </Box>
                <Box textAlign='center' sx={{ backgroundColor: '#ededed', py: '4px' }}>
                    <Typography fontSize='small' color='#6c6c6c'>Complaint Number: {data.id}</Typography>
                </Box>
            </Box>
        </Grid>
    )
}