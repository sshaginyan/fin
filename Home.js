import React from 'react';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import{ Container, Content, Text, Button } from 'native-base';

import Header from './Header.js';

export default class Home extends React.Component {

  state = {
    checkings: '',
    savings: '',
    credit_card: '',
    transactions: [],
    credit_card_lock: false,
    accounts: [],
    creditcards: []
  }
  
  async componentDidMount() {
    const response = await fetch('https://cumulus-api-dev.herokuapp.com/api/v1/accounts/001f400000IIwu6AAD');
    const data = await response.json();

    let accounts = [];
    let creditcards = [];
    
    data.data.forEach(data => {
      
      const d = {}

      d.name = data.name;
      
      
      if(data.type == 'Credit Card') {
        d.lock = data.lock;
        d.balance = data.balance * -1;
        creditcards.push(d);
      } else if(data.type != 'Mutual Fund') {
        d.balance = data.balance;
        accounts.push(d);
      }
    });

    this.setState({
      accounts: accounts,
      creditcards: creditcards
    });
  }
  
  render() {

    const navigate = this.props.navigation.navigate;

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
              <Image source={require('./claire.png')} style={{ width: 200, height: 200, marginTop: 10, marginLeft: 'auto', marginRight: 'auto', }} />
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 30 }}>Welcome back.</Text>

            <TouchableOpacity onPress={() => navigate('accounts') } >
                <View  style={{ marginTop: 50, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 10, borderRadius: 10 }}>
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
                        return <Text key={index} style={{ color: '#333', fontSize: 14, textAlign: 'left' }}>{data.name}: {data.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace('-', '-$')}</Text>;
                      })
                    }
                </View>
              </TouchableOpacity>
            
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
};
