import React, {Component} from 'react';
import logo from './logo.svg';
import {Login} from './Components/Login'
import {TodoApp} from "./Components/TodoApp";
import DrawerTodo from "./Components/DrawerTodo"
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Button from '@material-ui/core/Button';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    localStorage.setItem("isLoggedIn",false);
    this.changeIsLoggedIn = this.changeIsLoggedIn.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.ref1 = React.createRef();
  }

    changeIsLoggedIn(){
        this.setState({ isLoggedIn : true });
        localStorage.setItem("isLoggedIn",true);
        console.log(localStorage.getItem("isLoggedIn"));
    }

    openDrawer(e) {
      e.preventDefault();
      this.ref1.current.toggleDrawer(true)
    }

  render() {
      const LoginView = () => (
          <Login changeIsLoggedIn = {this.changeIsLoggedIn} />
      );
      return (
          <Router>
              <div className="App">
                  <DrawerTodo ref={this.ref1}/>
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h1 className="App-title">Task Planner</h1>
                      <Button onClick={this.openDrawer}>Menú</Button>
                  </header>
                  <ul>
                      <li><Link to="/">Login</Link></li>
                      {this.state.isLoggedIn && (<li><Link to="/todo">Todo</Link></li>)}
                  </ul>
                  <div>
                      <Route exact path="/" component={LoginView}/>
                      <Route path="/todo" component={TodoApp}/>
                  </div>
              </div>
          </Router>
      );
  }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }
}

export default App;
