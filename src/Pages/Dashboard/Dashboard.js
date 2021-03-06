import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
// import UserOrder from '../UserOrder/UserOrder';
// import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../hook/useAuth';
// import ManageOrders from '../ManageOrders/ManageOrders';
// import Pay from '../Pay/Pay';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import AddProducts from '../AddProducts/AddProducts';
import {Switch, Route, Link, useRouteMatch} from "react-router-dom";
// import DashboardHome from '../DashboardHome/DashboardHome';
import { Button } from '@mui/material';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';


const drawerWidth = 220;

function DashBoard(props) {
    const { logout, admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="drawer-style">
            <Toolbar />
            <Divider />
            <Link className=" link" to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            {admin && <Box>

                <List>
                    <Link className=" link " to={`${url}/addProducts`}><Button color="inherit">AddProducts</Button> </Link>
                </List>
                <List>
                    <Link className=" link " to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                </List>
                <List>
                    <Link className=" link " to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                </List>
                <List>
                    <Link className=" link " to={`${url}/manageOrders`}><Button color="inherit">Manage Orders</Button></Link>
                </List>

            </Box>}
            {!admin && <Box>
                <List>
                    <Link className=" link " to={`${url}/userOrders/:email`} ><Button color="inherit">My Orders</Button> </Link>
                </List>
                <List>
                    <Link className=" link " to={`${url}/reviews`}><Button color="inherit">Review</Button> </Link>
                </List>
                <List>
                    <Link className=" link " to={`${url}/pay`}><Button color="inherit">Payment</Button> </Link>
                </List>
            </Box>}
            <List>
                <Link className=" link " to="/home" > <Button color="inherit"> Home  </Button>  </Link></List>
            <List>
                <Button onClick={logout}> Logout </Button>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return  (
        
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ backgroundColor: 'rgb(33, 37, 41)', width: { sm: "calc(100%-220)"}, ml: { sm: 220 }}}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div"> Dashboard </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true, }} sx={{display: { xs: 'block', sm: 'none' },'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },}}>
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{

                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: "calc(100% - 220)" } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        {/* <DashboardHome /> */}
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addproducts`}>
                        {/* <AddProducts /> */}
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        {/* <ManageProducts /> */}
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        {/* <ManageOrders /> */}
                    </Route>
                    <Route path={`${path}/userOrders/:email`}>
                        {/* <UserOrder /> */}
                    </Route>
                    <Route path='/review'>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        {/* <Pay /> */}
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

DashBoard.propTypes = {
    window: PropTypes.func,
};


export default DashBoard;