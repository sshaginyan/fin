import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import{ Container, Content, Text, Button, Icon } from 'native-base';
import FlipToggle from 'react-native-flip-toggle-button';

import Header from './Header.js';

export default class Accounts extends React.Component {
  
  state = {
    data: [],
    credit_card_lock: false
  }

  async componentDidMount() {
    const response = await fetch('https://cumulus-api-dev.herokuapp.com/api/v1/accounts/001f400000IIwu6AAD');
    const data = await response.json();

    this.setState({
      data: data.data
    });
    
  }
  
  render() {
    return (
      <Container>
        <ImageBackground source={require('./background.jpg')} style={{ height: '100%', width: '100%' }}>
          <Header main={true} />
          <Content padder >
            <View style={{
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%'
            }}>
              <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Hi Claire!</Text>
              <Image source={require('./claire.png')} style={{ width: 200, height: 200, marginTop: 10, marginLeft: 'auto', marginRight: 'auto' }} />
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 30 }}>Welcome back.</Text>
              <View style={{ marginTop: 50, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 10, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row' }}>
               
                  <View style={{ marginLeft: 'auto', flexDirection: 'row' }}>
                    <View style={{ marginRight: 60 }}>
                      <Icon style={{ textAlign: 'center' }} name="git-compare" />
                      <Text>Transfer</Text>
                    </View>
                    <View style={{ marginRight: 15 }}>
                      <Icon style={{ textAlign: 'center' }} name="logo-usd" />
                      <Text>Zelle</Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontWeight: 'bold', color: '#333', fontSize: 16, textAlign: 'left' }}>Recent Transactions</Text>
                 
                </View>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
};
