import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {useState} from 'react';
import LoginForm from "./src/components/LoginForm";
import Welcome from "./src/components/Welcome";

const App = () => {
  const [token, setToken] = useState(undefined);
  const isAuthenticated = token !== undefined;

  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.container}>
        <LoginForm onSuccess={(token) => setToken(token)}/>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Welcome onLogout={() => setToken(undefined)} token={token}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
