import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/jarhsm.jpg'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    textAlign: 'center', // Center align the text
  },
  media: {
    minHeight: 400,
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: 'gray',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: 'white',
      //color: '#3f4771'
    },
  },
}));


export default function Home(){
  const classes = useStyles()
    return (
        <Card className={classes.card}>
          <Typography variant="h5" className={classes.title}>
            HOME PAGE
          </Typography>
          <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/>
          <Typography variant="body2" component="p" className={classes.credit} color="textSecondary"></Typography>
          <CardContent>
            <Typography variant="h5" component="p"className={classes.title}>
              WELCOME TO JARHSM HOME PAGE
            </Typography>
          </CardContent>
        </Card>
    )
}

