import React, {Component} from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confPassword: '',
        }
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfPasswordChange = this.handleConfPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFullNameChange(e) {
        this.setState({
            fullName:e.target.value
        })
    }

    handleEmailChange(e) {
        this.setState({
            email:e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleConfPasswordChange(e) {
        this.setState({
            confPassword: e.target.value
        });
    }

    handleSubmit(){
        if (!this.state.fullName.length || !this.state.email.length)
            return;
        localStorage.setItem("email",this.state.email);
        localStorage.setItem("password",this.state.password)
        localStorage.setItem("name",this.state.fullName);

        this.setState({
            fullName: '',
            email: '',
            password: '',
            confPassword: '',
        })
    }


    render() {
        const isSubmitDisabled =
            !this.state.password ||
            !this.state.confPassword ||
            this.state.password !== this.state.confPassword;

        return (
            <div className="Todo">
                <div className="todo-form">
                    <h3>Registration</h3>
                    <AccountCircleIcon fontSize={"large"}/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="fullName">Full Name:</InputLabel>
                        <Input id="fullName" name="fullName"
                               autoComplete="FullName" autoFocus
                               value={this.state.fullName}
                               onChange={this.handleFullNameChange}/>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email:</InputLabel>
                        <Input id="email" name="email"
                               autoComplete="email"
                               value={this.state.email}
                               onChange={this.handleEmailChange}/>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password:</InputLabel>
                        <Input id="password" name="password" type="password"
                               value={this.state.password}
                               onChange={this.handlePasswordChange}/>
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="confPassword">Confirm Password:</InputLabel>
                        <Input id="confPassword" name="confPassword"
                               value={this.state.confPassword} type="password"
                               onChange={this.handleConfPasswordChange}/>
                    </FormControl>


                    <br/>
                    <Divider variant="fullWidth"/>
                    <br/>
                    <br/>
                        <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                disabled={isSubmitDisabled}
                                onClick={this.handleSubmit}>
                            Submit
                        </Button>
                </div>
            </div>
        );
    }
}

export default UserProfile;