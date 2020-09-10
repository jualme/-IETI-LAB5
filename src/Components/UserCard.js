import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";

class UserCard extends Component {

    constructor(props) {
        super(props);
        this.state = {'user': {}}
    }


    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                {localStorage.getItem("name").charAt(0)}
                            </Avatar>
                        }
                        action={
                            <Link to={{pathname:"/profile"}}>
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            </Link>
                        }
                        title={localStorage.getItem("name")}
                        subheader= {localStorage.getItem("email")}
                    />
                </Card>

            </div>
        )
    }
}

export default UserCard;