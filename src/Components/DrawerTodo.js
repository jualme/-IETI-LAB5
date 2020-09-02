import React, {Component} from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import UserCard from "./UserCard";

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
                <Button style={{color: "white", position: "absolute", backgroundColor:"grey", left:"5%" ,top:"75px"}} onClick={this.toggleDrawer(true)}>Menú</Button>
                <Drawer anchor='left' open={this.state.open} onClose={this.toggleDrawer(false)}>
                    <UserCard/>
                    <Button onClick={this.logout}>Logout</Button>
                </Drawer>
            </div>
        );
    }
}

export default DrawerTodo;