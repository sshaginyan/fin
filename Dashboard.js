import React from 'react';
import * as shape from 'd3-shape';
import { View, Modal, TouchableOpacity } from 'react-native';
import{ Container, Content, Button, Text, Input, Form, Item, Icon } from 'native-base';
import * as Progress from 'react-native-progress';
import DateTimePicker from 'react-native-modal-datetime-picker';


import Header from './Header';

export default class Dashboard extends React.Component {

    state = {
        goals: [],
        date: '',
        isDateTimePickerVisible: false,
        actualValue: 0,
        targetValue: 0,
        rat: [0, 1]
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _handleDatePicked = date => {
        this.setState({ date: date.toLocaleDateString("en-US") });
        this._hideDateTimePicker();
      };

      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
      abc = async () => {
        const response = await fetch('https://cumulus-api-dev.herokuapp.com/api/v1/goals/owner/001f400000IIwu5AAD');
        const data = await response.json();

      const rat = data.data.reduce((c, data) => { c[0] += data.actualValue; c[1] += data.targetValue; return c; }, [0, 0]);


        this.setState({
            goals: data.data,
            rat
        });
      }
   
    async componentDidMount() {
      this.abc();

    }

    render() {

      const navigate = this.props.navigation.navigate;
  
      return (
        <Container>
            <Header title="Goals" fu={this.abc} />
          <Content style={{ backgroundColor: '#C9C9C9' }}>
            <View style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
            }}>
            <Progress.Circle style={{ marginLeft: 'auto', marginRight: 'auto' }} formatText={() => { return ((this.state.rat[0]/this.state.rat[1]) * 100).toFixed(0) + '%'; }} progress={this.state.rat[0]/this.state.rat[1]} size={200} thickness={10} showsText={true} />
  
                <Button onPress={() => { navigate('goal') }} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, backgroundColor: 'transparent', borderWidth: 3, borderRadius: 0, borderColor: 'white' }}><Text style={{ fontSize: 30, fontWeight: 'bold' }}>Create New Goal</Text></Button>
          
              <View style={{ backgroundColor: 'white', marginLeft: 10, marginRight: 10, marginTop: 20 }}>
              
               
                {

                    this.state.goals.map((goal, index) => {
                        
                        
                        
                        return (
                            <View key={index}>
                                <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 10, flexDirection: 'row' }}>
                                    <View>
                                        <Text style={{fontWeight: 'bold'}} >{goal.name}</Text>
                                    </View>
                                    <View style={{ marginLeft: 'auto' }}>
                                        <Text>${goal.targetValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                    </View>
                                </View>
                                <Progress.Bar progress={goal.actualValue/goal.targetValue} width={300} style={{ marginLeft: 20, marginBottom: 5 }} />
                                <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 260, marginLeft: 'auto', marginRight: 'auto' }}></View>
                            </View>
                        );
                    })
                }
                
               
  
                
  
  
  
  
              </View>
            </View>
          </Content>
        </Container>
      );
    }
  }