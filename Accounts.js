import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import{ Container, Content, Text, Button, Icon } from 'native-base';
import FlipToggle from 'react-native-flip-toggle-button';

import Header from './Header.js';

export default class Accounts extends React.Component {
  
  state = {
    data: [],
    transactions: [],
    credit_card_lock: false,
    creditcards: [],
    accounts: []
  }

  async componentDidMount() {
    const response = await fetch('https://cumulus-api-dev.herokuapp.com/api/v1/accounts/001f400000IIwu6AAD');
    const data = await response.json();

    let trans = [];
    let accounts = [];
    let creditcards = [];

    data.data.forEach(aa => {
     let d = {};

    d.name = aa.name;

    if(aa.type == 'Credit Card') {
      d.lock = aa.lock;
      d.balance = aa.balance * -1;
      creditcards.push(d)
    } else if(aa.type != 'Mutual Fund') {
      d.balance = aa.balance;
      accounts.push(d);
    }

      aa.transactions.forEach(bb => {
        trans.push(bb)
      })
    });

    trans = trans.sort((a,b) => {
      if (a.date < b.date)
        return 1;
      if (a.date > b.date)
        return -1;
      return 0;
    });

    this.setState({
      data: data.data,
      transactions: trans,
      accounts: accounts,
      creditcards: creditcards
    });
    
  }
  
  render() {

    console.log('==========', this.state.accounts);

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
                  <View>
                    <Text style={{ fontWeight: 'bold', color: '#333', fontSize: 16, textAlign: 'left' }}>Bank Accounts</Text>
                      {
                        this.state.accounts.map((data, index) => {
                          return <Text key={index} style={{ color: '#333', fontSize: 14, textAlign: 'left' }}>{data.name}: ${data.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>;
                        })
                      }
                    <View style={{ padding: 10, flexDirection: 'row' }}></View>
                    <Text style={{ fontWeight: 'bold', color: '#333', fontSize: 16, textAlign: 'left' }}>Credit Cards</Text>
                    
                    {
                      this.state.creditcards.map((data, index) => {
                        return(
                          <View key={index}>
                            <Text style={{ color: '#333', fontSize: 14, textAlign: 'left' }}>{data.name}: {data.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace('-', '-$')}</Text>
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
                        );
                      })
                    }
                    
                    
                  </View>

                  </View>
                  <View style={{ marginLeft: 'auto', flexDirection: 'row' }}>
                    <View style={{ marginRight: 20 }}>
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
                  {
                    this.state.transactions.map((data, index) => {
                      return(
                        <View key={index} style={{ flexDirection: 'row', marginTop: 8 }}>
                          <Text style={{ color: '#333', fontSize: 14, textAlign: 'left' }}>{data.description}</Text>
                          <Text style={{ color: '#333', fontSize: 14, marginLeft: 'auto' }}>{data.amount}</Text>
                        </View>
                      );
                    })
                  }
                </View>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
};
