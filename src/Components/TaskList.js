import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Tasks.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Task from './Task'
import TaskFilter from "./TaskFilter";
import axios from "axios";

export class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            userTasks:[],
            filter:{dueDate:"",
                responsible:"",
                status:"",}
        }
    }

    componentDidMount() {
        this.axios = axios.create({
            baseURL: 'http://localhost:8080/api/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("accessToken")}
        });
        this.axios.get("task/")
            .then((response) => {
                console.log(response.data);
                this.setState({userTasks: response.data});
            });

        /*fetch('https://taskplannerv2.azurewebsites.net/api/list-tasks?code=aJTiHo7Fog2qBwr7IdTv/zL4yCUpol8INmfSfyz5dcaghnrToDgvbA==')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({userTasks: data.response});
            });*/
    }

    handleFilter = (filter) => {
        this.setState({
            filter:filter
        })
    }

    render() {

        const todoList = this.state.userTasks.filter((value) => {
            let filter = this.state.filter
            let filtered = true
            if (filter.dueDate!==""){
                filtered = filtered && (value.dueDate===filter.dueDate)
            }
            if (filter.responsible!==""){
                filtered = filtered && (value.responsible.name===filter.responsible)
            }
            if (filter.status!==""){
                filtered = filtered && (value.status===filter.status)
            }
            return(
                filtered
               )
        }).map((todo, i) => {
            return (
                <Task key={i} description={todo.description} status={todo.status} responsible={todo.responsible} dueDate={todo.dueDate}/>
            );
        });

        return (

            <div>

                <Grid container spacing={4} className="grid-container">
                    {todoList}
                </Grid>

                <div style={{ position:"fixed", bottom:"20px", right:"15px"}}>
                    <Link to={{pathname:"/NewTask"}}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Link>
                    <TaskFilter filter={this.handleFilter}/>
                </div>



            </div>
        );


    }

}

export default TaskList