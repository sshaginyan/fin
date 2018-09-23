import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import{ Container, Content, Button, Text } from 'native-base';

import Header from './Header.js';

export default class Home extends React.Component {
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
              marginRight: 'auto'
            }}>
              <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>Hi Claire!</Text>
              <Image source={require('./claire.png')} style={{ width: 200, height: 200, marginTop: 10 }} />
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 30 }}>Welcome back.</Text>
              <Button onPress={() => navigate('offers', { name: 'Jane' })} style={{ backgroundColor: 'white', borderRadius: 0, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
                <Text style={{ color: '#3985ae', fontWeight: 'bold' }} >    See Offers    </Text>
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
};
