import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthenticatedRoute from './src/components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './src/components/AutoDismissAlert/AutoDismissAlert'
import Header from './src/components/Header/Header'
import SignUp from './src/components/SignUp/SignUp'
import SignIn from './src/components/SignIn/SignIn'
import SignOut from './src/components/SignOut/SignOut'
import ChangePassword from './src/components/ChangePassword/ChangePassword'

export default function App() {
  constructor () {
  super()

  this.state = {
    user: null,
    alerts: []
  }
}

setUser = user => this.setState({ user })

clearUser = () => this.setState({ user: null })

alert = ({ heading, message, variant }) => {
  this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
}

  render () {

    return (
      <View>
      // <View style={styles.container}>
        // <Text>Open up App.js to start working on your app!</Text>

        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={({ match }) => (
            <Prompts alert={this.alert} user={user} match={match} />
          )} />
          {/* // <Route exact path='/' user={user} render={({ match }) => (
          //   <Home user={user} match={match}/>
          // )} /> */}
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
