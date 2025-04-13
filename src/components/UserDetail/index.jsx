// import React from "react";
// import {Typography} from "@mui/material";

// import "./styles.css";
import {useParams} from "react-router-dom";

// /**
//  * Define UserDetail, a React component of Project 4.
//  */
// function UserDetail() {
//     const user = useParams();
//     return (
//         <>
//           <Typography variant="body1">
//             This should be the UserDetail view of the PhotoShare app. Since it is
//             invoked from React Router the params from the route will be in property match.
//             So this should show details of user: {user.userId}.
//             You can fetch the model for the user from models.userModel.
//           </Typography>
//         </>
//     );
// }

import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Chip, 
  Avatar, 
  Button, 
  Box, 
  Divider 
} from '@mui/material';
import { 
  LocationOn, 
  Work, 
  InsertPhoto, 
  Person 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import models from "../../modelData/models";

function UserDetail({setUserId, setView}) {
  const params = useParams();
  const user_id = params.userId;
  const user = models.userModel(user_id);
  if (!user) return null;
  setUserId(user_id);
  setView("userDetail");
  
  return (
    <Card elevation={3} sx={{ maxWidth: '800px', margin: '20px auto', borderRadius: '12px', overflow: 'hidden' }}>
      <Box sx={{ 
        height: '100px', 
        bgcolor: '#bbdefb',
        display: 'flex',
        justifyContent: 'center'
      }}>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: -6 }}>
        <Avatar
          sx={{ 
            width: 120, 
            height: 120, 
            border: '4px solid white',
            bgcolor: '#1976d2'
          }}
        >
          <Typography variant="h3" component="div">
            {user.first_name.charAt(0)}
          </Typography>
        </Avatar>
      </Box>
      
      <CardContent sx={{ pt: 5 }}>
        <Typography variant="h4" component="div" align="center" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          {user.description}
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">{user.location}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Work color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">{user.occupation}</Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button
            variant="contained"
            startIcon={<InsertPhoto />}
            component={Link}
            to={`/photos/${user._id}`}
            sx={{ 
              borderRadius: '20px', 
              px: 3,
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)'
            }}
          >
            Xem bộ sưu tập ảnh
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default UserDetail;
