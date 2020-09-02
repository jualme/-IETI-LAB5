import React from 'react';
import {TodoList} from "./TodoList";
import moment from "moment";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import './Todo.css'


export class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            description: '',
            responsible: {name: localStorage.getItem("name"), email: localStorage.getItem("email")},
            status: '',
            dueDate: moment()
        };
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: moment(date.target.value)
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.description.length || !this.state.status.length || !this.state.dueDate)
            return;

        const newItem = {
            description: this.state.description,
            status: this.state.status,
            responsible: this.state.responsible,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            status: '',
            dueDate: ''
        }));
    }

    render() {

        return (
            <div className="Todo">

                <div className="todo-form">
                    <h3>New TODO</h3>

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
                    <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={this.handleSubmit}>
                        Add
                    </Button>
                </div>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
        );
    }

}