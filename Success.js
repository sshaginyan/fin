import React from 'react';
import { View } from 'react-native';
import{ Container, Content, Text, Icon } from 'native-base';

import Header from './Header';

export default class Success extends React.Component {
    render() {
      return (
        <Container>
          <Header title="Contact" />
          <Content padder >
            <View style={{
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <Text style={{ color: '#0e70a1', fontSize: 30, textAlign: 'center', marginBottom: 20,  marginLeft: 'auto', marginRight: 'auto' }}>Thank you!{`\n`}Your appointment{`\n`}is confirmed.</Text>
              <Icon name="ios-checkmark-circle" style={{ color: '#00B35F', fontSize: 96, marginLeft: 'auto', marginRight: 'auto' }} />
            </View>
          </Content>
        </Container>
      );
    }
  }