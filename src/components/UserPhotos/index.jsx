// import React from "react";
// import { Typography } from "@mui/material";

// import "./styles.css";
import {useParams} from "react-router-dom";

// /**
//  * Define UserPhotos, a React component of Project 4.
//  */
// function UserPhotos () {
//     const user = useParams();
//     return (
//       <Typography variant="body1">
//         This should be the UserPhotos view of the PhotoShare app. Since it is
//         invoked from React Router the params from the route will be in property
//         match. So this should show details of user:
//         {user.userId}. You can fetch the model for the user
//         from models.photoOfUserModel(userId):
//       </Typography>
//     );
// }

import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Box, 
  Avatar, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Divider, 
  Paper 
} from '@mui/material';
import { Link } from 'react-router-dom';
import { formatDate } from '../../lib/utils'; // Bạn cần tạo hàm này để format ngày
import models from "../../modelData/models";

function UserPhotos({setUserId, setView}) {
  const params = useParams();
  const user_id = params.userId;
  const user = models.userModel(user_id);
  const username = user.username;
  const photos = models.photoOfUserModel(user_id);

  if (!photos || !photos.length) return <Typography>Không có ảnh nào.</Typography>;
  setUserId(user_id);
  setView("userPhotos");

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'medium' }}>
        Bộ sưu tập ảnh của {username}
      </Typography>
      
      <Grid container spacing={4}>
        {photos.map((photo) => (
          <Grid item xs={12} md={6} key={photo._id}>
            <Card elevation={2} sx={{ 
              borderRadius: '12px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <CardMedia
                component="img"
                height="300"
                image={require(`../../images/${photo.file_name}`)}
                alt="Photo"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Đăng tải: {formatDate(photo.date_time)}
                  </Typography>
                </Box>
                
                <Paper variant="outlined" sx={{ mt: 2, p: 1, bgcolor: '#f5f5f5', borderRadius: '8px' }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, px: 1 }}>
                    Bình luận ({photo.comments ? photo.comments.length : 0})
                  </Typography>
                  
                  <List dense>
                    {photo.comments && photo.comments.map((comment) => (
                      <div key={comment._id}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar component={Link} to={`/users/${comment.user._id}`}>
                              {comment.user.first_name.charAt(0)}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography 
                                  component={Link} 
                                  to={`/users/${comment.user._id}`}
                                  sx={{ 
                                    fontWeight: 'bold',
                                    color: '#1976d2',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                  }}
                                >
                                  {comment.user.first_name} {comment.user.last_name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {formatDate(comment.date_time)}
                                </Typography>
                              </Box>
                            }
                            secondary={
                              <Typography 
                                variant="body2" 
                                sx={{ whiteSpace: 'pre-wrap', mt: 0.5 }}
                              >
                                {comment.comment}
                              </Typography>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </div>
                    ))}
                  </List>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UserPhotos;
