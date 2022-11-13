import { useState } from "react";
import { Download, FilterList } from "@mui/icons-material";
import { Paper, Box, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material"
import BgImage from "../../components/bgImage"
import { user } from "../../config/constants"

export default function DocumentCard({ type = "NORMAL" }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Paper sx={{ borderRadius: '25px', mx: 1, my: 1 }} elevation={2} >
            <Box display='flex' justifyContent='space-between' alignItems='center' px={1} sx={{ pt: '4px' }}>
                <Typography noWrap maxWidth="200px" sx={{ textOverflow: 'ellipsis' }}>
                    Filename.jpg
                </Typography>
                <IconButton size="small">
                    <Download />
                </IconButton>
            </Box>
            <Box height='350px' overflow='hidden' className="doc-outer">
                <img width='100%' src="https://royalpatiala.in/wp-content/uploads/2022/04/WM-Letter-regarding-PoIPoBPoA-notification_page-0002.jpg"></img>
                <Box className="doc-inner" display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' alignItems='center' columnGap={1} >
                        <BgImage src={user.image} width="45px" height="45px" borderRadius="50%" />
                        <Typography color='#fff'>Ravi Mishra</Typography>
                    </Box>
                    <Box>
                        <IconButton size="small" color="white"
                            id="demo-positioned-button"
                            aria-controls={open ? "demo-positioned-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        >
                            <FilterList />
                        </IconButton>
                        <Menu
                            id="demo-positioned-menu"
                            className="rounded-edge"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                        >
                            <MenuItem onClick={handleClose}>Form</MenuItem>
                            <MenuItem onClick={handleClose}>Adhaar Card</MenuItem>
                            <MenuItem onClick={handleClose}>PAN Card</MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' columnGap={2} alignItems='center' pt={1} pb={1}>
                {
                    type === "NORMAL" ? <>
                        <Button color="white" sx={{
                            color: '#000',
                            border: '1px solid black',
                            textTransform: 'none',
                            width: '100px',
                            borderRadius: '25px'
                        }}>Reject</Button>
                        <Button color="customBlue" sx={{
                            color: '#fff',
                            width: "100px",
                            textTransform: 'none',
                            borderRadius: '25px'
                        }} variant="contained">Accept</Button>
                    </> :
                        <Button color="white" sx={{
                            color: 'red',
                            border: '1px solid red',
                            textTransform: 'none',
                            width: '100px',
                            borderRadius: '25px'
                        }}>Rejected</Button>
                }

            </Box>
        </Paper>
    )

}