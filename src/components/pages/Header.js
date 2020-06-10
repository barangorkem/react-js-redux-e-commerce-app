import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${
            theme.spacing(4)
        }px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const deleteToCart = (product) => {
        props.setLoading(true);
        setTimeout(() => {
            props.deleteToCart(props.carts,product);
            // props.setLoading(false);
        }, 500)
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (

        <Menu anchorEl={anchorEl}
            anchorOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            id={menuId}
            keepMounted
            transformOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            open={isMenuOpen}
            onClose={handleMenuClose}>
            {
            props.carts.map((productCart) => <MenuItem onClick={handleMenuClose}><h3 style={{paddingRight:"18px"}}>{productCart.title}</h3>
                  <Button size="small" variant="contained" onClick={()=>deleteToCart(productCart)}  color="secondary">
          Çıkar
        </Button>
            </MenuItem>)
        }
 </Menu>

    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl}
            anchorOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            id={mobileMenuId}
            keepMounted
            transformOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                    <ShoppingCartIcon/>
                </IconButton>
                <p>Shopping Cart</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={
            classes.grow
        }>
            <AppBar position="static">
                <Toolbar> 
                    <div className={
                        classes.grow
                    }/>
                    <div className={
                        classes.sectionDesktop
                    }>
                       
                        <IconButton edge="end" aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit">
                            <ShoppingCartIcon/>
                        </IconButton>
                    </div>
                    <div className={
                        classes.sectionMobile
                    }>
                        <IconButton aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit">
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {props.carts.length>0 ? renderMenu:""} </div>
    );
}
export default Header;
