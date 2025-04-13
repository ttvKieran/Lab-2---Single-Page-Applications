// import React from "react";
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
// } from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";

// /**
//  * Define UserList, a React component of Project 4.
//  */
// function UserList () {
//     const users = models.userListModel();
//     return (
//       <div>
//         <Typography variant="body1">
//           This is the user list, which takes up 3/12 of the window. You might
//           choose to use <a href="https://mui.com/components/lists/">Lists</a>{" "}
//           and <a href="https://mui.com/components/dividers/">Dividers</a> to
//           display your users like so:
//         </Typography>
//         <List component="nav">
//           {users.map((item) => (
//             <>
//               <ListItem>
//                       <ListItemText primary={item.first_name}/>
//               </ListItem>
//               <Divider />
//             </>
//           ))}
//         </List>
//         <Typography variant="body1">
//           The model comes in from models.userListModel()
//         </Typography>
//       </div>
//     );
// }

// export default UserList;

import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar, 
  Typography, 
  Divider, 
  Paper 
} from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

function UserList() {
  const users = models.userListModel();
  return (
    <Paper elevation={2} sx={{ height: '100%', overflow: 'auto', borderRadius: '8px' }}>
      <Typography variant="h6" sx={{ p: 2, backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
        Danh sách người dùng
      </Typography>
      <List sx={{ padding: 0 }}>
        {users.map((user, index) => (
          <div key={user._id}>
            <ListItem 
              button 
              component={Link} 
              to={`/users/${user._id}`}
              sx={{ 
                '&:hover': { 
                  backgroundColor: '#e3f2fd'
                } 
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: `hsl(${index * 40}, 70%, 60%)` }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary={`${user.first_name} ${user.last_name}`} 
                secondary={user.occupation} 
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default UserList;
