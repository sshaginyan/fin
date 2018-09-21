import React from 'react';
import * as shape from 'd3-shape';
import { createStackNavigator } from 'react-navigation';
import { StackedAreaChart } from 'react-native-svg-charts';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { View, ImageBackground, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import{ Container, Content, Button, Text, Icon, Form, Item, Input, DatePicker } from 'native-base';

import Footer from './Footer.js';
import Header from './Header.js';


class Screen1 extends React.Component {
  render() {
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
              <Button style={{ backgroundColor: 'white', borderRadius: 0, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}><Text style={{ color: '#3985ae', fontWeight: 'bold' }} >    See Offers    </Text></Button>
            </View>
          </Content>
          <Footer active="offers" />
        </ImageBackground>
      </Container>
    );
  }
}


class Screen4 extends React.Component {

  render() {
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
              <Image source={require('./claire.png')} style={{ width: 200, height: 200, marginTop: 10, marginLeft: 'auto', marginRight: 'auto' }} />
              <View style={{ flexDirection: 'row' }}>
                <Button style={{ width: 170, height: 60, backgroundColor: '#0e7aa1', borderRadius: 0, marginTop: 50, marginLeft: 'auto', marginRight: 5 }}><Text style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', fontWeight: 'bold', textAlign: 'center' }} >Personal{`\n`}Loan Offers</Text></Button>
                <Button style={{ backgroundColor: '#0e7aa1', width: 170, height: 60, borderRadius: 0, marginTop: 50, marginLeft: 5, marginRight: 'auto' }}><Text style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', fontWeight: 'bold', textAlign: 'center' }} >Loan{'\n'}Calculator</Text></Button>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Button style={{ width: 170, height: 60, backgroundColor: '#0e7aa1', borderRadius: 0, marginTop: 10, marginLeft: 'auto', marginRight: 5 }}><Text style={{ color: 'white', marginLeft: 'auto', marginRight: 'auto', fontWeight: 'bold', textAlign: 'center' }} >Loan{`\n`}Use Cases</Text></Button>
                <Button style={{ width: 170, height: 60, backgroundColor: '#0e7aa1', borderRadius: 0, marginTop: 10, marginLeft: 5, marginRight: 'auto' }}><Text style={{ color: 'white', marginLeft: 'auto', marginRight: 'auto', fontWeight: 'bold', textAlign: 'center' }} >Testimonials</Text></Button>
              </View>


            </View>
          </Content>
          <Footer />
        </ImageBackground>
      </Container>
    );
  }
}

class Screen2 extends React.Component {

  render() {
    return (
      <Container>
        <Header />
        <Content padder >
          <View style={{
            marginTop: 50,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <Text style={{ color: '#0e70a1', fontSize: 30, textAlign: 'center', marginBottom: 100 }}>Ways to Lower Your{`\n`}Interest Payments</Text>
            <Button style={{ backgroundColor: '#EEEDED', width: 360, marginBottom: 25, height: 60,
                             elevation: 4,
                             shadowOffset: { width: 2, height: 2 },
                             shadowColor: "black",
                             shadowOpacity: 0.7,
                             shadowRadius: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="ios-leaf" style={{  color: '#595959', fontSize: 30 }} />
                <Text style={{ color: '#595959', fontWeight: 'bold', marginTop: 8, fontSize: 20 }}>Personal Loan</Text>
              </View>

            </Button>
            <Button style={{ backgroundColor: '#00B35F', width: 360, marginBottom: 25, height: 60,
                             elevation: 4,
                             shadowOffset: { width: 2, height: 2 },
                             shadowColor: "black",
                             shadowOpacity: 0.7,
                             shadowRadius: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="md-pulse" style={{ color: 'white', fontSize: 30 }} />
                <Text style={{ fontWeight: 'bold', marginTop: 8 }}>Line of Credit</Text>
              </View>
            </Button>
            <Button style={{ backgroundColor: '#4C4C4C', width: 360, height: 60,
                             elevation: 4,
                             shadowOffset: { width: 2, height: 2 },
                             shadowColor: "black",
                             shadowOpacity: 0.7,
                             shadowRadius: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="ios-card-outline" style={{ color: 'white', fontSize: 30 }} />
                <Text style={{ fontWeight: 'bold',  marginTop: 8 }}>Low Interest Credit Card</Text>
              </View>
            </Button>
          </View>
        </Content>
        <Footer active="offers" />
      </Container>
    );
  }
}

class Screen5 extends React.Component {

  render() {
    return (
      <Container>
        <Header />
        <Content padder >
          <View style={{
            marginTop: 50,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <Text style={{ color: '#0e70a1', fontSize: 30, textAlign: 'center', marginBottom: 100 }}>Loans tailored{`\n`}to your needs.</Text>
            <Button style={{ backgroundColor: '#EEEDED', width: 360, marginBottom: 25, height: 60,
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
            <Button style={{ backgroundColor: '#00B35F', width: 360, marginBottom: 25, height: 60,
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
            <Button style={{ backgroundColor: '#4C4C4C', width: 360, height: 60,
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
        <Footer active="offers" />
      </Container>
    );
  }
}

class Screen3 extends React.Component {

  render() {
    return (
      <Container>
        <Header />
        <Content >
          <Image source={require('./loan.jpg')} style={{ width: '100%', height: '80%' }} />
          <View style={{
            marginTop: 50,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <Text style={{ fontSize: 16, textAlign: 'left' }}>Average Rates bases on Credit Score:</Text>
            <Text style={{ fontSize: 16, textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>Excellent</Text>   (720-850) 10.3% - 12.5%</Text>
            <Text style={{ fontSize: 16, textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>Good</Text>          (680-719) 13.5% - 15.5%</Text>
            <Text style={{ fontSize: 16, textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>Average</Text>     (640-679) 17.8% - 19.9%</Text>
            <Text style={{ fontSize: 16, textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>Poor</Text>            (300-639) 28.5% - 32.0%</Text>
            <Button style={{ marginTop: 30, backgroundColor: '#00000000', width: 360, marginBottom: 15, borderWidth: 1, borderColor: '#00B35F' }}><Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', color: '#00B35F' }}>Apply Now</Text></Button>
            <Button style={{ backgroundColor: '#00B35F', width: 360, borderWidth: 1, borderColor: '#00B35F' }}><Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto' }}>Schedule Meeting</Text></Button>
          </View>
        </Content>
        <Footer />
      </Container>
    );
  }
}

class Screen7 extends React.Component {

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
    return (
      <Container>
        <Header />
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
              <Button style={{ marginTop: 30, backgroundColor: '#00B35F', width: 360, marginBottom: 15 }}><Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>Schedule Appointment</Text></Button>
            </Form>
          </View>
        </Content>
        <Footer />
      </Container>
    );
  }
}

class Screen8 extends React.Component {

  render() {
    return (
      <Container>
        <Header />
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
        <Footer />
      </Container>
    );
  }
}

class Screen9 extends React.Component {

  render() {
    return (
      <Container>
        <Header />
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

              <Button style={{ marginLeft: 'auto', marginTop: 'auto', marginBottom: 10, marginRight: 10, backgroundColor: 'transparent', borderWidth: 3, borderRadius: 0, borderColor: 'white' }}><Text style={{ fontSize: 12, fontWeight: 'bold' }}>Create New Goal</Text></Button>
              {/* <Modal */}
              {/*   animationType="slide" */}
              {/*   transparent={true} */}
              {/*   visible={true} */}
              {/*   onRequestClose={() => { */}
              {/*     alert('Modal has been closed.'); */}
              {/*   }}> */}
              {/*   <View style={{ backgroundColor: '#EDEDED', width: '92%', borderRadius: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 150 }}> */}
              {/*     <View style={{ padding: 10 }}> */}
              {/*       <Text>Create a new goal.-l</Text> */}
              {/*     </View> */}
              {/*   </View> */}
              {/* </Modal> */}
              <Text style={{ position: 'relative', top: 16, fontSize: 10, marginLeft: 'auto', color: 'white', marginRight: 10 }}>January 4, 2018 - March 31, 2018</Text>







            </StackedAreaChart>
            <View style={{ backgroundColor: '#4FA665', width: '100%', height: 5 }}></View>
            <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginLeft: 'auto', marginRight: 'auto', height: 45, backgroundColor: 'white' }}>
      <View style={{ alignSelf: 'flex-end', borderBottomWidth: 5, borderBottomColor: 'white' }}><Text style={{ paddingLeft: '10%', paddingRight: '10%', fontWeight: 'bold' }}>Goal</Text></View>
      <View style={{ alignSelf: 'flex-end', borderBottomWidth: 5, borderBottomColor: '#4FA665' }}><Text style={{ paddingLeft: '10%', paddingRight: '10%', fontWeight: 'bold' }}>Note</Text></View>
      <View style={{ alignSelf: 'flex-end', borderBottomWidth: 5, borderBottomColor: 'white' }}><Text style={{ paddingLeft: '10%', paddingRight: '10%', fontWeight: 'bold'  }}>Archived</Text></View>
            </View>
            <View style={{ backgroundColor: 'white', marginLeft: 10, marginRight: 10 }}>
              <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>
                  <Text style={{ color: '#51A667', fontWeight: 'bold' }}>+ 18.75</Text>
                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>
                  <Text style={{ color: '#51A667', fontWeight: 'bold' }}>+ 18.75</Text>
                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>
                  <Text style={{ color: '#51A667', fontWeight: 'bold' }}>+ 18.75</Text>
                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>
                  <Text style={{ color: '#51A667', fontWeight: 'bold' }}>+ 18.75</Text>
                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>
                  <Text style={{ color: '#51A667', fontWeight: 'bold' }}>+ 18.75</Text>
                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>
                  <Text style={{ color: '#51A667', fontWeight: 'bold' }}>+ 18.75</Text>
                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>
                  <Text style={{ color: '#51A667', fontWeight: 'bold' }}>+ 18.75</Text>
                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>




            </View>
          </View>
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: Screen9,
    navigationOptions: {
      header: null
    }
  }
});
