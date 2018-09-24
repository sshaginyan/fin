import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import{ Container, Content, Button, Text, Form, Item, Input } from 'native-base';

import Header from './Header';

export default class Contact extends React.Component {

    state = {
      isDateTimePickerVisible: false,
      isTimePickerVisible: false,
      date: '',
      time: ''
    }
  
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = date => {
      this.setState({ date: date.toLocaleDateString("en-US") });
      this._hideDateTimePicker();
    };
  
    _showTimeTimePicker = () => this.setState({ isTimePickerVisible: true });
  
    _hideTimeTimePicker = () => this.setState({ isTimePickerVisible: false });
  
    _handleTimePicked = time => {
      this.setState({ time: time.toLocaleTimeString() });
      this._hideTimeTimePicker();
    };
  
    render() {

        const navigate = this.props.navigation.navigate;
      return (
        <Container>
          <Header title="Contact" />
          <Content padder >
            <View style={{
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <Text style={{ color: '#0e70a1', fontSize: 30, textAlign: 'center', marginBottom: 100 }}>How can we help?</Text>
              <Form>
                <Item>
                  <Input placeholder="Reason for Contact" />
                </Item>
                <Item>
                  <TouchableOpacity onPress={() => { this._showDateTimePicker(); }}>
                    <Input placeholder="Select Appointment Date" pointerEvents="none" value={this.state.date} />
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                  />
                </Item>
                <Item last>
                  <TouchableOpacity onPress={() => { this._showTimeTimePicker(); }}>
                    <Input placeholder="Select Appointment Time" pointerEvents="none" value={this.state.time} />
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isTimePickerVisible}
                    onConfirm={this._handleTimePicked}
                    onCancel={this._hideTimeTimePicker}
                    mode="time"
                  />
                </Item>
                <Button onPress={() => navigate('success')} style={{ marginTop: 30, backgroundColor: '#00B35F', width: 360, marginBottom: 15 }}><Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>Schedule Appointment</Text></Button>
              </Form>
            </View>
          </Content>
        </Container>
      );
    }
  }