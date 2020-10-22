import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import axios from "axios";
import jwt_decode from "jwt-decode";


export class Login extends React.Component{


    constructor(props){
        super(props);
        this.state = {email : '', password : ''}
        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
        this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
        localStorage.setItem("email","juanM@mail.com");
        localStorage.setItem("password","ieti2020")
        localStorage.setItem("name","Juan Mejia");
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" type="email" autoFocus onChange = {this.handleOnChangeEmail}  />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleOnChangePassword}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleOnChangeEmail(event){
        this.setState({email : event.target.value});
    }

    handleOnChangePassword(event){
        this.setState({password : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/user/login', {
            username: 'test@mail.com',
            password: 'password'
        })
            .then(function (response) {
                // Check if its possible to decode the token - validate
                jwt_decode(response.data.accessToken)
                localStorage.setItem("accessToken", response.data.accessToken)
                console.log(response.data.accessToken);
            })
            .catch(function (error) {
                console.log(error);
            }, () => {
                this.props.changeIsLoggedIn();
                window.location.href = "/tasks";
        });

    }
}