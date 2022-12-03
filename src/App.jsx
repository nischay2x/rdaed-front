import Layout from "./components/layout";
import Home from "./pages/Home";
import { Routes, Route, Outlet, Navigate, Link } from "react-router-dom";
import Upload, { UploadList } from "./pages/Upload";
import "./styles.css";

import { Box, CircularProgress, Typography } from "@mui/material";

import PropertyList from "./pages/Properties/list";
import RejectedPropertyList from "./pages/Properties/rejected";
import DocsList from "./pages/Docs/list";
import RejectedDocsList from "./pages/Docs/rejected";
import BidList from "./pages/Services/bidList";
import LotteryList from "./pages/Services/lotterList";
import ReceivedList from "./pages/Complaints/receivedList";
import ResolvedList from "./pages/Complaints/resolvedList";
import Payments from "./pages/Payments/payments";

import LoginHandler from "./components/LoginHandler.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./config/api-config";
import { useUserContext } from "./components/UserContext";
import Profile from "./pages/Profile/profile";

export default function App() {
  return (
    <Routes>

      <Route path="employee_portal/auth/callback" element={<LoginHandler />} />
      <Route path="" element={<Navigate to="/employee_portal" />}></Route>
      <Route path="/employee_portal" element={<RequireAuth />}>

        <Route path="" element={<Layout><Home /></Layout>} />

        <Route path="properties/list" element={<Layout><PropertyList /></Layout>} />
        <Route path="properties/rejected" element={<Layout><RejectedPropertyList /></Layout>} />

        <Route path="docs/received" element={<Layout><DocsList /></Layout>} />
        <Route path="docs/rejected" element={<Layout><RejectedDocsList /></Layout>} />

        <Route path="services/bid" element={<Layout><BidList /></Layout>} />
        <Route path="services/lottery" element={<Layout><LotteryList /></Layout>} />

        <Route path="complaints/received" element={<Layout><ReceivedList /></Layout>} />
        <Route path="complaints/resolved" element={<Layout><ResolvedList /></Layout>} />

        <Route path="payments" element={<Layout><Payments /></Layout>} />

        <Route path="profile" element={<Layout><Profile /></Layout>} />
      </Route>
    </Routes>
  );
}



async function getAccessToken(refreshToken, username) {
  try {
    const { data } = await axios.post(`${baseUrl}/api/token/refresh/`, {
      refresh: refreshToken
    });
    return { error: false, data };
  } catch (error) {
    return { error };
  }
}

function RequireAuth() {
  // const token = sessionStorage.getItem('token') || "Some";
  const refreshToken = localStorage.getItem('refresh');
  const userContext = useUserContext();
  const userData = userContext.useUser();
  const updateUser = userContext.useUserUpdate();
  const logout = userContext.userLogout();

  console.log(userData);

  const [suspense, setSuspense] = useState(true);

  useEffect(() => {
    if (userData.token) return;
    getAccessToken(refreshToken).then((res) => {
      if (res.error) {
        logout();
      } else {
        const otherUserData = JSON.parse(sessionStorage.getItem('data'));
        updateUser({
          ...otherUserData,
          token: res.data.access,
          username: sessionStorage.getItem('username'),
          verified: /^true$/.test(sessionStorage.getItem('verified'))
        });
      }
      setSuspense(false);
    })
  }, [userData.token, refreshToken])

  if (userData.token) return <Outlet />;

  else if (refreshToken && !userData.token) return <Suspense />;

  return <LoggedOut />
  // return token ? <Outlet /> : <AccessDenied />
}

function AccessDenied() {
  return (
    <Box sx={{ width: "100%", height: "97vh", display: 'grid', placeItems: 'center' }}>
      <Box display='flex' flexDirection='column' alignItems='center' rowGap={2}>
        <Typography variant="h4" >Access Denied. Please Log In First.</Typography>
      </Box>
    </Box>
  )
}

function LoggedOut() {
  return (
    <Box sx={{ width: "100%", height: "97vh", display: 'grid', placeItems: 'center' }}>
      <Box display='flex' flexDirection='column' alignItems='center' rowGap={2}>
        <Typography variant="h4" >You have been logged out. Please login again.</Typography>
        <a href='http://test-rda.org/login/' >Login</a>
      </Box>
    </Box>
  )
}

function Suspense() {
  return (
    <Box sx={{ width: "100%", height: "97vh", display: 'grid', placeItems: 'center' }}>
      <Box display='flex' flexDirection='column' alignItems='center' rowGap={2}>
        <CircularProgress />
        <Typography variant="h4" pt={2}>Logging In...</Typography>
      </Box>
    </Box>
  )
}

function Nothing() {
  return (
    <Box
      sx={{ width: "100%", height: "100vh" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box p={2}>
        <Typography>Nothing Here !!</Typography>
      </Box>
    </Box>
  );
}
