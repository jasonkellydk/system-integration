import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import parser from 'fast-xml-parser';

const Welcome = ({token, onLogout}) => {
  const [salary, setSalary] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [taxPercentage, setTaxPercentage] = useState(undefined);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000', {
      headers: {'Authentication': `Bearer ${token}`}
    })
      .then((response) => {
        console.log(response.data);
        const responseBalance = response.data.balance;
        setBalance(responseBalance)
      })
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/taxes', {responseType: 'text', headers: {'Authentication': `Bearer ${token}`}})
      .then((response) => {
        const xml = response.data;
        // handle success
        const data = parser.parse(xml);
        setSalary(data.tax.salary);
        setTaxPercentage(data.tax.taxPercentage);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text>
          Welcome back {jwt_decode(token).name}
        </Text>
        <Button onPress={onLogout} title={'logout'}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.accountHeader}>Balance ${balance}</Text>
        <Text style={styles.accountHeader}>Salery ${salary}</Text>
        <Text style={styles.accountHeader}>Taxes %{taxPercentage}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#575fcf',
    justifyContent: 'space-between',
    padding: 40,
    borderRadius: 6,
  },
  accountHeader: {
    fontSize: 50,
    color: '#f2f2f2'
  }
});

export default Welcome;
