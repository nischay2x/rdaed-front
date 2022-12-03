import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useUserContext } from "../../components/UserContext";
import { baseUrl } from "../../config/api-config";
import { Container } from "@mui/system";

export default function Profile() {

    // const [profileData, setProfileData] = useState("");
    // const [loading, setLoading] = useState(true);
    const userContext = useUserContext();
    const userData = userContext.useUser();

    // useEffect(() => {
    //     getProfileData(userData.username);
    // }, []);

    // async function getProfileData(username) {
    //     try {
    //         const { data } = await axios.get(`${baseUrl}/citizen_portal/getprofile?username=${username}`, {
    //             headers: {
    //                 // 'x-api-key': 12345,
    //                 // 'token': 'rdawebsite',
    //                 // 'client': 'website',
    //                 'authorization': 'Bearer '+userData.token
    //             }
    //         });

    //         setProfileData(JSON.stringify(data));
    //     } catch (error) {
    //         console.log(error);
    //         alert("Error Occured, See Console.")
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    return (
        <Container maxWidth="xl">
            <Paper elevation={3} sx={{p: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                        Name : {userData.fullname}
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                        Username : {userData.username}
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                        Mobile : {userData.mobile}
                    </Grid>
                    
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                        Email : {userData.user_email}
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
                        Level : {userData.user_level}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )

    return (<>
        {
            loading ? <CircularProgress /> : <></>
        }
        <Typography>{profileData}</Typography>
    </>
    )
}