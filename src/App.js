import React, {Component} from 'react';
import logo from './logo.svg';
import {Login} from './Components/Login'
import DrawerTodo from "./Components/DrawerTodo"
import './App.css';
import {BrowserRouter as Router, Route, Redirect,} from 'react-router-dom';
import NewTask from "./Components/NewTask";
import TaskList from "./Components/TaskList"
import UserProfile from "./Components/UserProfile";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
        select:"home",
        userList: [],

    }
    localStorage.setItem("isLoggedIn",false);
    this.changeIsLoggedIn = this.changeIsLoggedIn.bind(this);
  }

    changeIsLoggedIn(){
        this.setState({ isLoggedIn : !this.state.isLoggedIn });
        localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
    }

    componentDidMount() {
        fetch('http://ja21086162.eastus.azurecontainer.io:8080/users')
            .then(response => response.json())
            .then(data => {
                let usersList = [];
                console.log(data)
                data.forEach(function (user) {
                    usersList.push({
                        user
                    })
                });
                this.setState({userList: usersList});
            });
    }

  render() {
      const LoginView = () => (
          <Login changeIsLoggedIn = {this.changeIsLoggedIn} />
      );
      return (
          <Router>
              <div className="App">
                  <header className="App-header">
                      <div className="Float-menu">
                          {(this.state.isLoggedIn)?<DrawerTodo changeIsLoggedIn = {this.changeIsLoggedIn} isLoggedIn ={this.state.isLoggedIn}/>:<Redirect to={{pathname: "/"}}/>}
                      </div>
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h1 className="App-title">Task Planner</h1>
                  </header>
                  <ul>
                      {this.state.userList.map( (value,index) => {console.log(value); return(<div key={index}>
                              <h2>values from the api</h2>
                          <li >{value.user.name}</li>
                              <li>{value.user.email}</li>
                          </div>
                      )} )}
                  </ul>
                  <div>
                      <Route exact path="/" component={LoginView}/>
                      <Route exact path="/newTask" component={NewTask}/>
                      <Route exact path="/tasks" component={TaskList}/>
                      <Route exact path="/profile" component={UserProfile}/>
                  </div>
              </div>
          </Router>

      );
  }

}

export default App;
