
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {orderProducts,filterProducts} from '../../actions/products';
import {addProductToCart,deleteToCart,setLoading} from '../../actions/carts';
import Headers from '../../components/pages/Header';
import ProductList from '../ProductList';



class Products extends React.Component {

  static propTypes = {
    products : PropTypes.array.isRequired
  }

  componentDidMount(){
  }
    
    render() {
      return (
        <div>    
          <Headers carts={this.props.carts} setLoading = {this.props.setLoading} isCartLoading= { this.props.isCartLoading}  deleteToCart={this.props.deleteToCart}></Headers>
          <ProductList products={this.props.products} setLoading = {this.props.setLoading} isCartLoading= { this.props.isCartLoading} carts={this.props.carts} addProductToCart = {this.props.addProductToCart} not_filter_products={this.props.not_filter_products} categories={this.props.categories} productFilters = {this.props.productFilters} productOrders = {this.props.productOrders} orderProducts={this.props.orderProducts} filterProducts = {this.props.filterProducts}></ProductList>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      products:state.productReducer.products,
      productOrders:state.productReducer.productOrders,
      productFilters:state.productReducer.productFilters,
      categories:state.productReducer.categories,
      not_filter_products:state.productReducer.not_filter_products,
      carts : state.cartReducer.carts,
      isCartLoading: state.cartReducer.isLoading
    }
  }
  const mapDispatchToProps = {
    orderProducts,
    filterProducts,
    addProductToCart,
    deleteToCart,
    setLoading
  }

export default connect(mapStateToProps,mapDispatchToProps)(Products);