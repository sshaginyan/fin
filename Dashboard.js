import React from 'react';
import * as shape from 'd3-shape';
import { View, Modal, TouchableOpacity } from 'react-native';
import { StackedAreaChart } from 'react-native-svg-charts';
import{ Container, Content, Button, Text, Input, Form, Item } from 'native-base';
import * as Progress from 'react-native-progress';
import DateTimePicker from 'react-native-modal-datetime-picker';


import Header from './Header';

export default class Dashboard extends React.Component {

    state = {
        goals: [],
        date: '',
        isDateTimePickerVisible: false
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _handleDatePicked = date => {
        this.setState({ date: date.toLocaleDateString("en-US") });
        this._hideDateTimePicker();
      };

      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
   
    async componentDidMount() {
        const response = await fetch('https://cumulus-api-dev.herokuapp.com/api/v1/goals/owner/001f400000IIwu5AAD');
        const data = await response.json();

        this.setState({
            goals: data.data
        });

    }

    render() {
  
      return (
        <Container>
            <Header title="Goals" />
          <Content style={{ backgroundColor: '#C9C9C9' }}>
            <View style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
            }}>
              <View style={{ backgroundColor: '#4FA665', paddingTop: 20 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>Goal(s): 6</Text>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 10 }}>Progress: 75%</Text>
              </View>
              <StackedAreaChart
                style={ { height: 200, width: '100%',  paddingVertical: 16, backgroundColor: '#4FA665' } }
                data={ [
                  {
                    month: new Date(2015, 0, 1),
                    apples: 3840,
                    bananas: 1920,
                    cherries: 960,
                    dates: 400,
                  },
                  {
                    month: new Date(2015, 1, 1),
                    apples: 1600,
                    bananas: 1440,
                    cherries: 960,
                    dates: 400,
                  },
                  {
                    month: new Date(2015, 2, 1),
                    apples: 640,
                    bananas: 960,
                    cherries: 3640,
                    dates: 400,
                  },
                  {
                    month: new Date(2015, 3, 1),
                    apples: 3320,
                    bananas: 480,
                    cherries: 640,
                    dates: 400,
                  },
                ] }
                keys={ [ 'apples', 'bananas', 'cherries', 'dates' ] }
                colors={ [ '#8800cc', '#aa00ff', '#cc66ff', '#eeccff' ] }
                curve={ shape.curveNatural }
                showGrid={ false }
                svgs={ [
                  { onPress: () => console.log('apples') },
                  { onPress: () => console.log('bananas') },
                  { onPress: () => console.log('cherries') },
                  { onPress: () => console.log('dates') },
                ] }
              >
  
                <Button onPress={this._showDateTimePicker} style={{ marginLeft: 'auto', marginTop: 'auto', marginBottom: 10, marginRight: 10, backgroundColor: 'transparent', borderWidth: 3, borderRadius: 0, borderColor: 'white' }}><Text style={{ fontSize: 12, fontWeight: 'bold' }}>Create New Goal</Text></Button>
                <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isDateTimePickerVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 70, width: '80%', backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', borderColor: '#0064FF', borderWidth: 5, borderRadius: 10, padding: 10 }}>
            <View>
              <Text style={{ textAlign: 'center', color: '#0e70a1', fontSize: 30 }}>Create a new goal</Text>
              
              <Form>
                  <Item>
                      <Input placeholder="Goal" />
                    </Item>
                  <Item><Input placeholder="Amount" /></Item>
                  <Item style={{ padding: 20 }} last>
                    <TouchableOpacity onPress={() => { this._showDateTimePicker(); }}>
                    <Input placeholder="Goal Date"  value={this.state.date} />
                    </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                  />      
                      
                      
                </Item>
              </Form>
              

              {/* <TouchableHighlight
                onPress={() => {
                  
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight> */}
            </View>
          </View>
        </Modal>
  
  
                
  
  
  
  
              </StackedAreaChart>
             
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