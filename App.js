import React from 'react';
import * as shape from 'd3-shape';
import { StyleSheet } from 'react-native';
import { StackedAreaChart } from 'react-native-svg-charts';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { View, ImageBackground, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import{ Container, Content, Button, Text, Icon, Form, Item, Input, DatePicker, FooterTab, Footer } from 'native-base';

import Home from './Home';
import Offer from './Offer';
import Offers from './Offers';
import Accounts from './Accounts';
//import Footer from './Footer.js';
import Header from './Header';

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

    console.log(this.props);
    return (
      <Container>
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

                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>

                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>

                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>

                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>

                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>

                  <Text style={{fontWeight: 'bold'}} >Hiking Backpack</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold' }}>January 3, 2018</Text>
              </View>
              <View style={{ backgroundColor: '#F4F4F4', height: 2, width: 360, marginLeft: 'auto', marginRight: 'auto' }}></View>

               <View style={{ padding: 20, flexDirection: 'row' }}>
                <View>

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

const offers = createStackNavigator({ Offers, Offer });

export default createBottomTabNavigator({
  accounts: {
    screen: Accounts
  },
  offers,
  home: {
    screen: Home
  }
}, {
  tabBarPosition: 'bottom',
  initialRouteName: 'home',
  tabBarComponent: props => {

    const index = props.navigation.state.index;
    const navigate = props.navigation.navigate;

    return (
      <Footer>
        <FooterTab style={styles.footerTab}>
          <Button onPress={() => navigate('accounts', { name: 'Jane' })}
            style={index === 0 ? styles.activeButton : null}
            active={index === 0 ? true : false}>
              <Icon name='ios-contacts-outline' style={styles.icon} />
              <Text style={styles.footerTabText}>Accounts</Text>
          </Button>
          <Button onPress={() => navigate('offers', { name: 'Jane' })}
            style={index === 1 ? styles.activeButton : null}
            active={index === 1 ? true : false}>
              <Icon name='ios-create-outline' style={styles.icon} />
              <Text style={styles.footerTabText}>Offers</Text>
          </Button>
          <Button  onPress={() => navigate('home', { name: 'Jane' })}
            style={index === 2 ? styles.activeButton : null}
            active={index === 2 ? true : false}>
              <Icon name="ios-home-outline" style={styles.icon}/>
              <Text style={styles.footerTabText}>Home</Text>
          </Button>
          <Button onPress={() => navigate('dashboard', { name: 'Jane' })}
            style={index === 3 ? styles.activeButton : null}
            active={index === 3 ? true : false}>
              <Icon name='ios-speedometer-outline' style={styles.icon} />
              <Text style={styles.footerTabText}>Dashboard</Text>
          </Button>
          <Button onPress={() => navigate('contact', { name: 'Jane' })}
            style={index === 4 ? styles.activeButton : null}
            active={index === 4 ? true : false}>
              <Icon name='ios-mail-outline' style={styles.icon} />
              <Text style={styles.footerTabText}>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
});

const styles = StyleSheet.create({
  activeButton: {
    borderRadius: 0,
    backgroundColor: '#0D709F'
  },
  icon: {
    color: 'white'
  },
  footerTab: {
    backgroundColor: '#0F91CE'
  },
  footerTabButtonActive: {
    borderRadius: 0,
    backgroundColor: '#0D709F'
  },
  footerTabText: {
    fontSize: 9,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
