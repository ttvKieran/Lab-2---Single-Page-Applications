import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";
// import "./styles.css";

// /**
//  * Define TopBar, a React component of Project 4.
//  */
// function TopBar () {
//     return (
//       <AppBar className="topbar-appBar" position="absolute">
//         <Toolbar>
//           <Typography variant="h5" color="inherit">
//             This is the TopBar component
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     );
// }

// export default TopBar;

import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import {Home} from '@mui/icons-material';

import models from "../../modelData/models";

function TopBar({userId, view}) {
  const user = userId ? models.userModel(userId) : null;
  return (
    <AppBar position="static" elevation={3} sx={{ 
      background: 'linear-gradient(90deg, #1976d2 0%, #2196f3 100%)' 
    }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Home />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Tạ Trường Vũ
        </Typography>
        
        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ mr: 2 }}>
              {view === 'userPhotos' ? `Photos of ${user.first_name} ${user.last_name}` : user.first_name + ' ' + user.last_name}
            </Typography>
            <Avatar alt={user.first_name} src="/static/images/avatar/1.jpg" />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;