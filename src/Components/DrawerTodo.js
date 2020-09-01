import React, {Component} from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

class DrawerTodo extends Component {

    constructor(props) {
        super(props);
        this.state={open:true};
    }


    toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({open:open})
    };



    render() {
        return (
            <div>
                <Drawer anchor='left' open={this.state.open} onClose={this.toggleDrawer(false)}>
                    {<Button>Add to Do</Button>}
                </Drawer>
            </div>
        );
    }
}

export default DrawerTodo;