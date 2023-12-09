import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import unicornbikeImg from './../assets/images/unicornbikeImg.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
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
    minHeight: 300,
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
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  const handleExploreClick = () => {
    // Redirect to the desired route
    history.push('/explore');
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h4" className={classes.title}>
        Welcome to JARHSM
      </Typography>
      <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle" />
      <CardContent className={classes.content}>
        <Typography variant="body1" className={classes.welcomeText}>
          Experience the beauty of our E-Commerce Website named JARHSM. Explore and discover all that we offer.
        </Typography>
        <Button variant="contained" className={classes.exploreButton} onClick={handleExploreClick}>
          Explore Now
        </Button>
      </CardContent>
    </Card>
  );
}
