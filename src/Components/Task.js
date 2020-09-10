import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Tasks.css';

export class Task extends React.Component {

    render() {
        return (
            <Grid item xs={12} sm={6} md={3} mt={3} className="grid-item" >
                <Card className="card">
                    <CardContent>
                        <Typography>{this.props.description}</Typography>
                        <Typography>{this.props.status}</Typography>
                        <Typography>{this.props.responsible.name}</Typography>
                        <Typography>{this.props.dueDate}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }

}

export default Task