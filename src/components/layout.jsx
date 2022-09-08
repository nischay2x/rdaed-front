import React from 'react';

import { 
    Search, Person, Home, CurrencyRupee, CardTravel, Leaderboard,
    Comment, ListAlt, Description, MoreHoriz, ArrowDropDown, FolderCopy
} from '@mui/icons-material';
import { 
    Box, Link, Typography, Avatar, Button, Menu, 
    MenuItem, TextField, IconButton 
} from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles"

import BgImage from "../components/bgImage";
import { user } from '../config/constants';

const styles = {
    infoBar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        color: "#fff",
        borderBottom: "1px solid #dddddd"
    },
    propertySearchButton: {
        backgroundColor: "#0047FF",
        color: "#ffffff",
        ":hover": {
            backgroundColor: "#0047DD",
        }
    },
    menuButton: {
      color: "#6c6c6c",
      borderRadius: "25px",
      display: "flex",
      columnGap: "5px",
      padding: "0.7rem",
      alignItems: 'center',
      textTransform: "none",
      ":hover": {
          backgroundColor: "rgba(0, 71, 255, 0.08)",
          boxShadow: "0px 0px 35px rgba(39, 39, 39, 0.04)",
          color: "#0047dd"
      }
    },
    phoneLink: {
        display: "flex",
        alignItems: "center",
        columnGap: "5px",
        fontSize: "0.8rem"
    },
    appBar: {
        display: "flex",
        justifyContent: "space-around",
        padding: "0.5rem 2rem",
        alignItems: "center",
    },
    siteTitle: {
        display: "flex",
        alignItems: "center",
        columnGap: "10px"
    },
    mainHold: {
        py: 4,
        px: 2,
        zIndex: 2,
        minHeight: "73vh",
        backgroundColor: "#EDEDED"
    }
}

const theme = createTheme({
    typography: {
        fontFamily: [
          'Poppins',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        secondary: {
            main: '#E33E7F'
        },
        customBlue: {
            main: '#0047FF'
        }
    }
});

export default function Layout({ children }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const [propertySearchQuery, setPropertySearchQuery] = React.useState("")

    return (
        <ThemeProvider theme={theme}>
            <Box sx={styles.infoBar} >
                <Box sx={styles.siteTitle}>
                    <Avatar alt="Site Logo" sx={{ width: 35, height: 35 }} src="/images/rda_logo.png" variant="square" />
                    <Typography fontWeight="600" color="#D50008" fontSize="1.1rem" fontFamily="inherit">
                        RAIPUR DEVELOPMENT AUTHORITY
                    </Typography>
                </Box>
                <Box display="flex" columnGap={4} alignItems="center" >
                    <form style={{display: "flex", columnGap: "10px"}} onSubmit={() => {}}>
                        <input type="text" value={propertySearchQuery} placeholder="Search property.." 
                            onChange={(e) => { setPropertySearchQuery(e.target.value) }}
                            className='property-search-input'
                        />
                        <IconButton type='submit' sx={styles.propertySearchButton} >
                            <Search />
                        </IconButton>
                    </form>
                    <Box>
                        <Button id="profile-button" aria-controls={open ? 'profile-menu' : undefined} aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} onClick={handleClick}
                        > <BgImage src={user.image} width="37px" height="37px" borderRadius="50%" mr="10px"/> <MoreHoriz />
                        </Button>
                        <Menu id="profile-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'profile-button'}} 
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.appBar}>
                <Box>
                        <Button onClick={handleClick} sx={styles.menuButton}> 
                            <Home /> <span style={{ padding: "0 3px" }} >Home</span>
                        </Button>
                        
                    </Box>
                    <Box>
                        <Button id="properties-button" aria-controls={open ? 'properties-menu' : undefined} aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={styles.menuButton}
                        > <CardTravel /> <span style={{ padding: "0 3px" }} >Properties</span> <ArrowDropDown />
                        </Button>
                        <Menu id="properties-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'properties-button'}} 
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button id="documents-button" aria-controls={open ? 'documents-menu' : undefined} aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={styles.menuButton}
                        > <FolderCopy /> <span style={{ padding: "0 3px" }} >Documents</span> <ArrowDropDown />
                        </Button>
                        <Menu id="documents-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'documents-button'}} 
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button id="services-button" aria-controls={open ? 'services-menu' : undefined} aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={styles.menuButton}
                        > <ListAlt /> <span style={{ padding: "0 3px" }} >Services</span> <ArrowDropDown />
                        </Button>
                        <Menu id="services-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'services-button'}}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button id="information-button" aria-controls={open ? 'information-menu' : undefined} aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={styles.menuButton}
                        > <Leaderboard /> <span style={{ padding: "0 3px" }} >Information</span> <ArrowDropDown />
                        </Button>
                        <Menu id="information-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'information-button'}}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button id="complaints-button" aria-controls={open ? 'complaints-menu' : undefined} aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={styles.menuButton}
                        > <Comment /> <span style={{ padding: "0 3px" }} >Complaints</span> <ArrowDropDown />
                        </Button>
                        <Menu id="complaints-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'complaints-button'}}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Button id="payments-button" aria-controls={open ? 'payments-menu' : undefined} aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={styles.menuButton}
                        > <CurrencyRupee /> <span style={{ padding: "0 3px" }} >Payments</span> <ArrowDropDown />
                        </Button>
                        <Menu id="payments-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                            MenuListProps={{'aria-labelledby': 'payments-button'}}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    
            </Box>
            <Box sx={styles.mainHold}>
                {children}
            </Box>
        </ThemeProvider>
    )
}
