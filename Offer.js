import React from 'react';
import { View, Image } from 'react-native';
import{ Container, Content, Button, Text } from 'native-base';

export default class Offer extends React.Component {

    render() {
      return (
        <Container>
          <Header />
          <Content >
            <Image source={require('./loan.jpg')} style={{ width: '100%', height: '80%' }} />
            <View style={{ marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
              <Text style={{ fontSize: 16, textAlign: 'left' }}>Average Rates bases on Credit Score:</Text>
              <Text style={{ fontSize: 16, textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>Excellent</Text>   (720-850) 10.3% - 12.5%</Text>
              <Text style={{ fontSize: 16, textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>Good</Text>          (680-719) 13.5% - 15.5%</Text>
              <Text style={{ fontSize: 16, textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>Average</Text>     (640-679) 17.8% - 19.9%</Text>
              <Text style={{ fontSize: 16, textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>Poor</Text>            (300-639) 28.5% - 32.0%</Text>
              <Button style={{ marginTop: 30, backgroundColor: '#00000000', width: 360, marginBottom: 15, borderWidth: 1, borderColor: '#00B35F' }}><Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', color: '#00B35F' }}>Apply Now</Text></Button>
              <Button style={{ backgroundColor: '#00B35F', width: 360, borderWidth: 1, borderColor: '#00B35F' }}><Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto' }}>Schedule Meeting</Text></Button>
            </View>
          </Content>
        </Container>
      );
    }
  }