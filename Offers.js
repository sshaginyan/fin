import React from 'react';
import { View } from 'react-native';
import{ Container, Content, Button, Text, Icon } from 'native-base';

import Header from './Header.js';

export default class Offers extends React.Component {

    static navigationOptions = {
        header: null
      }

    render() {

        const navigation = this.props.navigation;
      return (
        <Container>
          <Header title="Offers" />
          <Content padder >
            <View style={{
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <Text style={{ color: '#0e70a1', fontSize: 30, textAlign: 'center', marginBottom: 100 }}>Loans tailored{`\n`}to your needs.</Text>
              <Button onPress={() => navigation.push('offer', { name: 'Jane' })} style={{ backgroundColor: '#EEEDED', width: 360, marginBottom: 25, height: 60,
                               elevation: 4,
                               shadowOffset: { width: 2, height: 2 },
                               shadowColor: "black",
                               shadowOpacity: 0.7,
                               shadowRadius: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="ios-home" style={{  color: '#595959', fontSize: 30 }} />
                  <Text style={{ color: '#595959', fontWeight: 'bold', marginTop: 8 }}>Mortgage</Text>
                </View>
  
              </Button>
              <Button onPress={() => navigation.push('offer', { name: 'Jane' })} style={{ backgroundColor: '#00B35F', width: 360, marginBottom: 25, height: 60,
                               elevation: 4,
                               shadowOffset: { width: 2, height: 2 },
                               shadowColor: "black",
                               shadowOpacity: 0.7,
                               shadowRadius: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="logo-usd" style={{ color: 'white', fontSize: 30 }} />
                  <Text style={{ fontWeight: 'bold', marginTop: 8 }}>Personal Loan</Text>
                </View>
              </Button>
              <Button onPress={() => navigation.push('offer', { name: 'Jane' })} style={{ backgroundColor: '#4C4C4C', width: 360, height: 60,
                               elevation: 4,
                               shadowOffset: { width: 2, height: 2 },
                               shadowColor: "black",
                               shadowOpacity: 0.7,
                               shadowRadius: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="ios-car-outline" style={{ color: 'white', fontSize: 30 }} />
                  <Text style={{ fontWeight: 'bold',  marginTop: 8 }}>Auto Loan</Text>
                </View>
              </Button>
            </View>
          </Content>
        </Container>
      );
    }
  }