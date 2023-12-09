import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import unicornbikeImg from './../assets/images/unicornbikeImg.jpg';  // Fix the path here

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 700,
    margin: 'auto',
    marginTop: theme.spacing(3),
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  media: {
    minHeight: 450,
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: '100%',
      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)',
    },
  },
  content: {
    padding: theme.spacing(2),
  },
  welcomeText: {
    fontSize: '1.2rem',
    marginTop: theme.spacing(2),
  },
  exploreButton: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  copyright: {
    marginTop: theme.spacing(2),
    fontSize: '0.8rem',
    color: '#555',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <Typography variant="h4" className={classes.title}>
          Welcome to JARHSM
        </Typography>
        <a href="assets/images/unicornbikelmg.jpg" target="_blank" rel="noopener noreferrer">
          <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle" />
        </a>
        <CardContent className={classes.content}>
          <Typography variant="body1" className={classes.welcomeText}>
            Experience the beauty of our E-Commerce Website named JARHSM. Explore and discover all that we offer.
          </Typography>
          <Button
            variant="contained"
            className={classes.exploreButton}
            href="/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Now
          </Button>
        </CardContent>
      </Card>
      <AppBar position="static" style={{ background: '#f2f2f2', color: '#2E3B4E' }}>
        <Toolbar>
          <Typography variant="body2" className={classes.copyright}>
            &copy; 2023 JARHSM E-COMMERCE. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
