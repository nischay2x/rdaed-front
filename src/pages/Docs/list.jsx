import { Grid, Paper, Typography, Button } from "@mui/material"
import axios from "axios";
import DocumentCard from "./DocumentCard";
import { baseUrl } from "../../config/api-config.js";
import { useEffect } from "react";
import { useUserContext } from "../../components/UserContext.js";
import { useState } from "react";
import { Box } from "@mui/system";



async function getDocuments (token) {
    try {
        const { data } = await axios.get(`${baseUrl}/employee_portal/get/documents/`, {
            headers: {
                authorization: 'Bearer '+token
            }
        });
        return { data, error: false }
    } catch (error) {
        return { error }
    }
}


export default function DocsList() {

    const userContext = useUserContext();
    const userData = userContext.useUser();
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        if(!userData.token) return;
        getDocuments(userData.token).then((res) => {
            if(res.error) {
                alert('Error While Fetching Documents.')
            } else {
                setDocs(res.data);
            }
        })
    }, [userData.token])

    return <Grid container spacing={2}>
        {
            docs.map((d, i) => <Grid key={i} item xs={12} sm={10} md={6} lg={4} xl={3}>
                <DocCard data={d} />
            </Grid>)
        }
    </Grid>
}

function DocCard ({ data }) {
    return (
        <Paper sx={{ p: 1 }} elevation={2}>
            <Typography><b>Filename :</b> {data.name}</Typography>
            <Typography><b>Type :</b> {data.doc_type}</Typography>
            <Typography><b>Status :</b> {data.status}</Typography>
            <a href={baseUrl+data.file} target='_blank'>Click To View</a>
            <Box py={1} display='flex' justifyContent='center' columnGap={1}>
                <Button variant="contained" color="primary" size='small'>Accept</Button>
                <Button variant="contained" color="warning" size='small'>Reject</Button>
            </Box>
        </Paper>
    )
}