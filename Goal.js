import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import{ Container, Content, Button, Text, Form, Item, Input } from 'native-base';

export default class Goal extends React.Component {

    state = {
      isDateTimePickerVisible: false,
      isTimePickerVisible: false,
      date: '',
      time: '',
      goalName: '',
      goalAmount: ''
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

    setGoalName = data => this.setState({ goalName: data });
    

    setGoalAmount = data => this.setState({ goalAmount: data });
    
    submit = () => {
        
        fetch('https://cumulus-api-dev.herokuapp.com/api/v1/goals/create/', {
            method: 'POST',
            body: JSON.stringify({
                id: 0,
                actualValue: 0,
                targetDate: new Date(this.state.date).getTime(),
                targetValue: this.state.goalAmount,
                type: "Other",
                name: this.state.goalName,
                status: "Not Started",
                owner: "001f400000IIwu5AAD",
                externalId: null,
                createddate: 1523250761000,
                sfid: "" 
                }),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then((data) => {
            console.log(data);
            const navigation = this.props.navigation;
            navigation.pop();
          }).catch((error) => {
            console.log(error);
          });
    }
  
    render() {

        const navigate = this.props.navigation.navigate;
      return (
        <Container>
          <Content padder >
            <View style={{
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <Text style={{ color: '#0e70a1', fontSize: 30, textAlign: 'center', marginBottom: 100 }}>Create a goal</Text>
              <Form>
                <Item>
                  <Input placeholder="Goal Name" onChangeText={this.setGoalName} value={this.state.goalName} />
                </Item>
                <Item>
                <Input placeholder="Amount" onChangeText={this.setGoalAmount} value={this.state.goalAmount} />
                </Item>
                <Item last>
                  <TouchableOpacity onPress={() => { this._showDateTimePicker(); }}>
                    <Input placeholder="Date" pointerEvents="none" value={this.state.date} />
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                  />
                </Item>
                <Button onPress={this.submit} style={{ marginTop: 30, backgroundColor: '#00B35F', width: 360, marginBottom: 15 }}><Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>Set Goal</Text></Button>
              </Form>
            </View>
          </Content>
        </Container>
      );
    }
  }