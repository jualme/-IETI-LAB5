import React, {Component} from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import moment from "moment";
import axios from "axios";

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            status: '',
            responsible: "",
            responsibleEmail: "",
            dueDate: moment()
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        })
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date.target.value
        });
    }

    handleResponsibleChange = (e) => {
        this.setState({
            responsible: e.target.value
        });
    }

    handleResponsibleEmailChange = (e) => {
        this.setState({
            responsibleEmail: e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.axios = axios.create({
            baseURL: 'http://localhost:8080/api/',
            timeout: 1000,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                'Content-Type': 'application/json'
            }
        });
        var data = {
            "description": this.state.description,
            "responsible": {"name": this.state.responsible, "email": this.state.responsibleEmail},
            "status": this.state.status,
            "dueDate": this.state.dueDate
        }

        this.axios.post("task/", JSON.stringify(data))
            .then((response) => {
                console.log(response);
                this.setState({
                    description: '',
                    status: '',
                    responsible: '',
                    responsibleEmail: ''
                })
                window.location.href = "/tasks"
            }, (error) => {
                console.log(error);
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
                               autoComplete="status"
                               value={this.state.status}
                               onChange={this.handleStatusChange}/>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="responsible">Responsible:</InputLabel>
                        <Input id="responsible" name="responsible"
                               autoComplete="responsible"
                               value={this.state.responsible}
                               onChange={this.handleResponsibleChange}/>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="responsibleEmail">Responsible Email:</InputLabel>
                        <Input id="responsibleEmail" name="responsibleEmail"
                               autoComplete="responsible_Email"
                               value={this.state.responsibleEmail}
                               onChange={this.handleResponsibleEmailChange}
                               type="email"/>
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
                            onClick={this.handleSubmit}
                    >
                        Add
                    </Button>


                </div>
            </div>
        );
    }
}

export default NewTask;