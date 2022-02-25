import React from 'react';
import {
  makeStyles,
  Toolbar,
  Typography,
  Box,
  Grid,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));

const videos = [
    {
      id: 1,
      title: 'Thanks for watching my youtube frontend',
      channel: 'Hitesh Chawla',
      views: '12 mil views',
      date: '20 jul 2021',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb.png',
    },
    {
      id: 2,
      title: 'Thanks for watching my youtube frontend',
      channel: 'Hitesh Chawla',
      views: '957 mil views',
      date: '20 jul 2021',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb.png',
    },
    {
      id: 3,
      title: 'Thanks for watching my youtube frontend',
      channel: 'Hitesh Chawla',
      views: '106 mil views',
      date: '20 jul 2021',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb.png',
    },
    {
      id: 4,
      title: 'Thanks for watching my youtube frontend',
      channel: 'Hitesh Chawla',
      views: '5.6 mil views',
      date: '20 jul 2021',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb.png',
    },
    {
      id: 5,
      title: 'Thanks for watching my youtube frontend',
      channel: 'Hitesh Chawla',
      views: '2.2 mil views',
      date: '20 jul 2021',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb.png',
    },
    {
      id: 6,
      title: 'Thanks for watching my youtube frontend' ,
      channel: 'Hitesh Chawla',
      views: '233 mil views',
      date: '20 jul 2021',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb.png',
    },
    {
      id: 7,
      title: 'Thanks for watching my youtube frontend',      channel: 'Hitesh Chawla',
      views: '118 mil views',
      date: '20 jul 2021',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb.png',
    },
    {
      id: 8,
      title: 'Thanks for watching my youtube frontend',      channel: 'Hitesh Chawla',
      views: '1.9 mil  views',
      date: '20 jul 2021',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb.png',
    },
  ];

function mainarea({ darkMode, setDarkMode }) {

  return (
      <>
      <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 , paddingBottom: '10px' }}
          >
            Trending
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
)}

export default mainarea;