import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import './Tasks.css';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class TaskFilter extends Component {

    constructor(props) {
        super(props);
        this.state={
          open: false,
            dueDate:"",
            responsible:"",
            status:"",
        }
        this.handleOpen=this.handleOpen.bind(this)

    }

    handleOpen(){
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleDueDateChange = (e) =>{
        this.setState({dueDate:e.target.value });
    }

    handleResponsibleChange = (e) =>{
        this.setState({responsible:e.target.value });
    }

    handleStatusChange = (e) =>{
        this.setState({status:e.target.value });
    }

    handleClear = () =>{
        this.props.filter({
            dueDate:"",
            responsible:"",
            status:""
        });
        this.setState({
            open: false,
            dueDate:"",
            responsible:"",
            status:"",
        })
    }

    handleSubmit = () =>{
        this.props.filter({
            dueDate:this.state.dueDate,
            responsible:this.state.responsible,
            status:this.state.status
        });
        this.setState({
            open: false,
        })
    }


    render() {
        const body = (
            <div className={"filter-paper"}>
                <TextField
                    id="date"
                    label="Due date"
                    type="date"
                    defaultValue="2020-01-01"
                    InputLabelProps={{shrink: true, required: true}}
                    onChange={this.handleDueDateChange}
                    fullWidth
                />

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
                    <InputLabel htmlFor="status">Status:</InputLabel>
                    <Input id="status" name="status"
                           value={this.state.status}
                           onChange={this.handleStatusChange}/>
                </FormControl>
                <br/>
                <br/>
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={this.handleClear}>
                    Clear
                </Button>
                <br/>
                <br/>
                <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={this.handleSubmit}>
                    Apply
                </Button>
            </div>
        );

        return (
            <div>
                <button type="button" onClick={this.handleOpen}>
                    filter
                </button>
                <Modal
                    style={{display:'flex', alignItems: "center", justifyContent: "center" }}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div>
        );
    }
}

export default TaskFilter;