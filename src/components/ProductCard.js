

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const ProductCard = (props) => {


    const classes = useStyles();

    const addToCart = (product) => {
       props.setLoading(true);
      setTimeout(() => {
        props.addProductToCart(props.carts,product);
      }, 500)
    }

    return(
      <div>
      {props.isCartLoading ? <CircularProgress color="secondary" /> :  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.product.image}
          title={props.product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" style={{"float":"left",flex: 1,"backgroundColor":"#9c27b0" }} color="primary">
        {props.product.price} TL
        </Button>
        <Button size="small" variant="contained" onClick={()=>addToCart(props.product)} raised  style={{"float":"right",flex: 1 }} color="primary">
         EKLE
        </Button>
      </CardActions>
    </Card>  } 

      </div>

      

    )
}

export default ProductCard;