import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
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