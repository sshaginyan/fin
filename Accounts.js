import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import{ Container, Content, Text, Button, Icon } from 'native-base';
import FlipToggle from 'react-native-flip-toggle-button';

import Header from './Header.js';

export default class Accounts extends React.Component {
  
  state = {
    checkings: '',
    savings: '',
    credit_card: '',
    transactions: [],
    credit_card_lock: false
  }

  async componentDidMount() {
    const response = await fetch('https://raw.githubusercontent.com/sshaginyan/my-app-api/master/accounts.json');
    const data = await response.json();

    this.setState(data);
    
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
                  <View>
                    <Text style={{ fontWeight: 'bold', color: '#333', fontSize: 16, textAlign: 'left' }}>Bank Accounts</Text>
                    <Text style={{ color: '#333', fontSize: 14, textAlign: 'left' }}>Checkings: {this.state.checkings}</Text>
                    <Text style={{ color: '#333', fontSize: 14, textAlign: 'left' }}>Savings: {this.state.savings}</Text>
                    <View style={{ padding: 10, flexDirection: 'row' }}></View>
                    <Text style={{ fontWeight: 'bold', color: '#333', fontSize: 16, textAlign: 'left' }}>Credit Cards</Text>
                    <Text style={{ color: '#333', fontSize: 14, textAlign: 'left' }}>Credit Card: {this.state.credit_card}</Text>
                    <FlipToggle
                      value={this.state.credit_card_lock}
                      buttonWidth={120}
                      buttonHeight={24}
                      buttonRadius={50}
                      sliderWidth={20}
                      sliderHeight={20}
                      sliderRadius={50}
                      onLabel={'locked'}
                      offLabel={'unlocked'}
                      labelStyle={{ color: 'black' }}
                      buttonOffColor={'#5DC963'}
                      buttonOnColor={'#EC584F'}
                      sliderOnColor={'white'}
                      sliderOffColor={'white'}

                      onToggle={newState => {
                        this.setState({
                          credit_card_lock: newState
                        });
                      }} 
                    />
                  </View>
                  <View style={{ marginLeft: 'auto' }}>
                  <Button block rounded iconLeft style={{ height: 50, marginBottom: 10 }}>
                    <Icon name="logo-google" />
                    <Text>Transfer</Text>
                  </Button>
                  <Button block rounded iconLeft style={{ height: 53, marginBottom: 10 }}>
                    <Icon name="logo-google" />
                    <Text>Transfer</Text>
                  </Button>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontWeight: 'bold', color: '#333', fontSize: 16, textAlign: 'left' }}>Recent Transactions</Text>
                  {
                    this.state.transactions.map((data, index) => {
                      return(
                        <View key={index} style={{ flexDirection: 'row', marginTop: 8 }}>
                          <Text style={{ color: '#333', fontSize: 14, textAlign: 'left' }}>{data.name}</Text>
                          <Text style={{ color: '#333', fontSize: 14, marginLeft: 'auto' }}>{data.amount}</Text>
                        </View>
                      );
                    })
                  }
                  <Text style={{ color: '#333', fontSize: 10, textAlign: 'left' }}>{}</Text>
                  <Text style={{ color: '#333', fontSize: 10, textAlign: 'left' }}>{}</Text>
                </View>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
};
