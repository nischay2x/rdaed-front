import { Grid } from "@mui/material"
import DocumentCard from "./DocumentCard";

export default function RejectedDocsList() {

    return <Grid container>
        <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
            <DocumentCard type="REJECTED" />
        </Grid>
        <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
            <DocumentCard type="REJECTED" />
        </Grid>
        <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
            <DocumentCard type="REJECTED" />
        </Grid>
        <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
            <DocumentCard type="REJECTED" />
        </Grid>
    </Grid>
}