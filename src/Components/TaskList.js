import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Tasks.css';
import moment from "moment";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Task from './Task'
import TaskFilter from "./TaskFilter";

export class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items: [],
            description: '',
            responsible: {name: localStorage.getItem("name"), email: localStorage.getItem("email")},
            status: '',
            dueDate: moment(),
            filter:{dueDate:"",
                responsible:"",
                status:"",}
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("tasks")){
            this.setState({
                    items: JSON.parse(localStorage.getItem("tasks"))
                }
            )
        }
        this.handleSubmit()
    }

    handleDescriptionChange(desc) {
        this.setState({
            description: desc
        });
    }

    handleStatusChange(stat) {
        this.setState({
            status: stat
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleFilter = (filter) => {
        this.setState({
            filter:filter
        })
    }


    handleSubmit() {
        //e.preventDefault();
        if (this.props.location.props){
            if (!this.props.location.props.description.length || !this.props.location.props.status.length || !this.props.location.props.dueDate)
                return;

            const newItem = {
                description: this.props.location.props.description,
                status: this.props.location.props.status,
                responsible: {name: this.props.location.props.responsible, email:""},
                dueDate: this.props.location.props.dueDate,
            };

            this.setState(prevState => ({
                items: prevState.items.concat(newItem),
                description: '',
                status: '',
                responsible: {name: "", email:""} ,
                dueDate: ''
            }), () => {localStorage.setItem("tasks", JSON.stringify(this.state.items) )});
        }
    }



    render() {

        const todoList = this.state.items.filter((value) => {
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