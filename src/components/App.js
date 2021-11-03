import React, { useState } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Users from './Users'
import LoginForm from './LoginForm'
import Alcohols from './Alcohols'
import RegisterForm from './RegisterForm'
import Cart from './Cart'
import Welcome from './Welcome'
import PaymentForm from './PaymentForm'
import ThankYouPage from './ThankYouPage'
import './Styles.css'

const App = () => {
  const [users, setUsers] = useState([])
  const [alcohols, setAlcohols] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("data")))

  return (
    <Router>
      <Switch>
      <div className="App">
      <Navbar 
        user = {user}
        setUser = {setUser}
        />
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path='/alcohol'>
        <Alcohols
        alcohols = {alcohols}
        setAlcohols = {setAlcohols}
        user = {user}
        />
      </Route>
      <Route path='/registerUserAccount'>
        <RegisterForm
        username = {username}
        setUsername = {setUsername}
        password = {password}
        setPassword = {setPassword}
        setUser = {setUser}
        />
      </Route>
      <Route path='/loginUserAccount'>
        <LoginForm
        username = {username}
        setUsername = {setUsername}
        password = {password}
        setPassword = {setPassword}
        setUser = {setUser}
        />
      </Route>
      <Route path='/cart'>
        <Cart 
        user = {user}
        />
      </Route>
      <Route path='/users'>
      <Users
        users = {users}
        setUsers = {setUsers}
      />
      </Route>
      <Route path='/paymentform'>
        <PaymentForm />
      </Route>
      <Route path='/thankyoupage'>
        <ThankYouPage />
      </Route>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
