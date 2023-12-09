import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CartItems from './CartItems';
import { StripeProvider } from 'react-stripe-elements';
import config from '../../config/config';
import Checkout from './Checkout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  checkoutContainer: {
    marginTop: theme.spacing(2),
  },
}));

export default function Cart() {
  const classes = useStyles();
  const [checkout, setCheckout] = useState(false);

  const showCheckout = (val) => {
    setCheckout(val);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CartItems checkout={checkout} setCheckout={showCheckout} />
        </Grid>
        {checkout && (
          <Grid item xs={12} sm={6} className={classes.checkoutContainer}>
            <StripeProvider apiKey={config.stripe_test_api_key}>
              <Checkout />
            </StripeProvider>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
