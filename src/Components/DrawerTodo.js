import React, {Component} from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import UserCard from "./UserCard";
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

class DrawerTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.logout = this.logout.bind(this);
    }

    toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({open: open})
    };

    logout(){
        this.props.changeIsLoggedIn();
    }


    render() {
        return (
            <div>

                <Button style={{color: "white", position: "absolute", backgroundColor:"grey", left:"5%" ,top:"75px"}} onClick={this.toggleDrawer(true)}>
                    <MenuIcon/>
                </Button>
                <Drawer anchor='left' open={this.state.open} onClose={this.toggleDrawer(false)}>
                    <UserCard/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <MenuList>
                            <Link to={{pathname:"/tasks"}} style={{textDecoration: 'none', color:"black" }} >
                                <MenuItem style={{paddingLeft:13}}>Tasks</MenuItem>
                            </Link>
                            <MenuItem style={{paddingLeft:13}} onClick={this.logout}>Logout</MenuItem>
                        </MenuList>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default DrawerTodo;