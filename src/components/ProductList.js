import React from 'react';

import ProductCard from './ProductCard';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        float: "right"
    }
}));

const ProductList = (props) => {

    const classes = useStyles();

    const [filterFirstValue, setFilterFirstValue] = React.useState(props.productOrders[0].key);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setFilterFirstValue(event.target.value);
        props.orderProducts(event.target.value);
    };

    const checkboxChange = (event) => {

        const target = event.currentTarget;
        props.setLoading(true);
          setTimeout(() => {
              console.log("evennt",props);
              console.log("event",target);
              props.filterProducts(target.value,props.categories,props.not_filter_products);
              setFilterFirstValue(props.productOrders[0].key);
              props.orderProducts(props.productOrders[0].key);
              props.setLoading(false);
      }, 500);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const productFilters = (
         <FormGroup row>
                 {
                  
                    props.productFilters.categories.map((productFilter) =>  <Grid item xs={12}>
                                          <FormControlLabel
                      control={ <Checkbox
                        label={productFilter.value}
                        iconStyle={{fill: '#000'}}
                        value={productFilter.id}
                        onChange ={checkboxChange}
                      />}
                      label={productFilter.value}
                    />
                    </Grid>
                )
                 }
           </FormGroup> 
    )

    const productOrders = (

        <FormControl className={
            classes.formControl
        }>
            <InputLabel id="demo-controlled-open-select-label">Sırala</InputLabel>
            <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={filterFirstValue}
                onChange={handleChange}>
                {
                props.productOrders.map((productOrder) => <MenuItem value={
                  productOrder.key
                }>
                    {
                    productOrder.value
                }</MenuItem>)
            } </Select>
        </FormControl>
    )

    const productList = (
        <div className={
            classes.root
        }>
            <Grid container
                spacing={3}>
                {
                props.products.map((product) => <Grid item
                    xs={4}>
                    <ProductCard setLoading={props.setLoading} isCartLoading={props.isCartLoading} product={product} addProductToCart={props.addProductToCart} carts={props.carts}></ProductCard>
                </Grid>)
            } </Grid>
        </div>

    )

    return (

        <div> 
            <Grid container>
                <Grid xs={12}>
                    {productOrders} </Grid>
                <Grid xs={2} style={{'textAlign':"center"}}>
                  {productFilters}
                </Grid>
                <Grid xs={10}>
                    {productList} </Grid>
            </Grid>

        </div>
    )
}

export default ProductList;
