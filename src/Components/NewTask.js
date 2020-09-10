import React, {Component} from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import moment from "moment";
import {Link} from "react-router-dom";

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            status: '',
            dueDate: moment()
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDescriptionChange(e) {
        this.setState({
            description:e.target.value
        })
    }

    handleStatusChange(e) {
        this.setState({
            status:e.target.value
        })
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date.target.value
        });
    }

    render() {
        return (
            <div className="Todo">
                <div className="todo-form">
                    <h3>New Task</h3>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="description">Description:</InputLabel>
                        <Input id="description" name="description"
                               autoComplete="description" autoFocus
                               value={this.state.description}
                               onChange={this.handleDescriptionChange}/>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="status">Status:</InputLabel>
                        <Input id="status" name="status"
                               autoComplete="status" autoFocus
                               value={this.state.status}
                               onChange={this.handleStatusChange}/>
                    </FormControl>

                    <br/>
                    <br/>
                    <TextField
                        id="date"
                        label="Due date"
                        type="date"
                        defaultValue="2020-01-01"
                        InputLabelProps={{shrink: true, required: true}}
                        onChange={this.handleDateChange}
                        fullWidth
                    />

                    <br/>
                    <Divider variant="fullWidth"/>
                    <br/>
                    <br/>
                    <Link to={{pathname:"/tasks", props:{description:this.state.description,
                            status:this.state.status, dueDate:this.state.dueDate }}}>
                        <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                >
                            Add
                        </Button>
                    </Link>

                </div>
            </div>
        );
    }
}

export default NewTask;