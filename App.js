import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import{ Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Left, Right, Body, Title, Form, Item, Input, DatePicker } from 'native-base';


class Screen1 extends React.Component {

  state = {

  }

  render() {
    return (
      <Container>
        <ImageBackground source={require('./background.jpg')} style={{ height: '100%', width: '100%' }}>
          <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}>
            <Left>
              <Button transparent>
                <Icon name="menu" style={{ color: 'white' }} />
              </Button>
            </Left>
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <View transparent style={{ marginTop: 8, marginRight: 10 }}>

                  <Icon name='menu' style={{ color: 'white', fontSize: 35 }} />
                </View>
                <Title style={{ color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 3 }}>Cumulus Bank</Title>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' style={{ color: 'white' }} />
              </Button>
            </Right>
          </Header>
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
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button style={{ backgroundColor: '#0D709F', borderRadius: 0 }} active>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Offers</Text>
              </Button>
              <Button>
                <Icon name='ios-document-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Cases</Text>
              </Button>
              <Button>
                <Icon name='ios-mail-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  footerTab: {
    backgroundColor: '#0F91CE'
  },
  footerTabButtonActive: {
    borderRadius: 0,
    backgroundColor: '#0D709F'
  },
  footerTabText: {
    fontSize: 11
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class Screen2 extends React.Component {

  state = {

  }

  render() {
    return (
      <Container>
        <ImageBackground source={require('./background.jpg')} style={{ height: '100%', width: '100%' }}>
          <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}>
            <Left>
              <Button transparent>
                <Icon name="menu" style={{ color: 'white' }} />
              </Button>
            </Left>
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <View transparent style={{ marginTop: 8, marginRight: 10 }}>
                  <Icon name='menu' style={{ color: 'white', fontSize: 35 }} />
                </View>
                <Title style={{ color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 3 }}>Cumulus Bank</Title>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' style={{ color: 'white' }} />
              </Button>
            </Right>
          </Header>
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
          <Footer>
            <FooterTab style={{ backgroundColor: '#0F91CE' }}>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={{ fontSize: 11 }}>Accounts</Text>
              </Button>
              <Button style={{ backgroundColor: '#0D709F', borderRadius: 0 }} active>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={{ fontSize: 11 }}>Offers</Text>
              </Button>
              <Button>
                <Icon name='ios-document-outline' style={{ color: 'white' }} />
                <Text style={{ fontSize: 11 }}>Cases</Text>
              </Button>
              <Button>
                <Icon name='ios-mail-outline' style={{ color: 'white' }} />
                <Text style={{ fontSize: 11 }}>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

class Screen3 extends React.Component {

  state = {

  }

  render() {
    return (
      <Container>

          <Header style={{ backgroundColor: '#0f92d0' }}>
            <Left>
              <Button transparent>
                <Icon name="ios-arrow-back" style={{ color: 'white' }} />
      <Text style={{ color: 'white' }}>Back</Text>
              </Button>
            </Left>
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <Title style={{ width: 200, color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 3 }}>Product Options</Title>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' style={{ color: 'white' }} />
              </Button>
            </Right>
          </Header>
          <Content padder >
            <View style={{
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <Text style={{ color: '#0e70a1', fontSize: 30, textAlign: 'center', marginBottom: 100 }}>Ways to Lower Your{`\n`}Interest Payments</Text>
              <Button style={{ backgroundColor: '#EEEDED', width: 360, marginBottom: 25,
                               elevation: 4,
                               shadowOffset: { width: 2, height: 2 },
                               shadowColor: "black",
                               shadowOpacity: 0.7,
                               shadowRadius: 1 }}><Text style={{ color: '#595959', fontWeight: 'bold' }}><Icon name="menu" />Personal Loan</Text></Button>
              <Button style={{ backgroundColor: '#00B35F', width: 360, marginBottom: 25,
                               elevation: 4,
                               shadowOffset: { width: 2, height: 2 },
                               shadowColor: "black",
                               shadowOpacity: 0.7,
                               shadowRadius: 1 }}><Text style={{ fontWeight: 'bold' }}><Icon name="menu" style={{ color: 'white' }} />Line of Credit</Text></Button>
              <Button style={{ backgroundColor: '#4C4C4C', width: 360,
                               elevation: 4,
                               shadowOffset: { width: 2, height: 2 },
                               shadowColor: "black",
                               shadowOpacity: 0.7,
                               shadowRadius: 1 }}><Text style={{ fontWeight: 'bold' }}><Icon name="menu" style={{ color: 'white' }} />Low Interest Credit Card</Text></Button>
            </View>
          </Content>
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button style={{ backgroundColor: '#0D709F', borderRadius: 0 }} active>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Offers</Text>
              </Button>
              <Button>
                <Icon name='ios-document-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Cases</Text>
              </Button>
              <Button>
                <Icon name='ios-mail-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

class Screen4 extends React.Component {

  state = {

  }

  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#0f92d0' }}>
            <Left>
              <Button transparent>
                <Icon name="ios-arrow-back" style={{ color: 'white' }} />
      <Text style={{ color: 'white' }}>Back</Text>
              </Button>
            </Left>
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <Title style={{ width: 200, color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 3 }}>Product Options</Title>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' style={{ color: 'white' }} />
              </Button>
            </Right>
          </Header>
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
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button style={{ backgroundColor: '#0D709F', borderRadius: 0 }} active>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Offers</Text>
              </Button>
              <Button>
                <Icon name='ios-document-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Cases</Text>
              </Button>
              <Button>
                <Icon name='ios-mail-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

class Screen5 extends React.Component {

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

          <Header style={{ backgroundColor: '#0f92d0' }}>
            <Left>
              <Button transparent>
                <Icon name="ios-arrow-back" style={{ color: 'white' }} />
      <Text style={{ color: 'white' }}>Back</Text>
              </Button>
            </Left>
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <Title style={{ width: 200, color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 3 }}>Contact</Title>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' style={{ color: 'white' }} />
              </Button>
            </Right>
          </Header>
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
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button style={{ backgroundColor: '#0D709F', borderRadius: 0 }} active>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Offers</Text>
              </Button>
              <Button>
                <Icon name='ios-document-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Cases</Text>
              </Button>
              <Button>
                <Icon name='ios-mail-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

class Screen6 extends React.Component {

  render() {
    return (
      <Container>

          <Header style={{ backgroundColor: '#0f92d0' }}>
            <Left>
              <Button transparent>
                <Icon name="ios-arrow-back" style={{ color: 'white' }} />
      <Text style={{ color: 'white' }}>Back</Text>
              </Button>
            </Left>
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <Title style={{ width: 200, color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 3 }}>Contact</Title>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' style={{ color: 'white' }} />
              </Button>
            </Right>
          </Header>
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
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button style={{ backgroundColor: '#0D709F', borderRadius: 0 }} active>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Offers</Text>
              </Button>
              <Button>
                <Icon name='ios-document-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Cases</Text>
              </Button>
              <Button>
                <Icon name='ios-mail-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

class Screen7 extends React.Component {

  render() {
    return (
      <Container>

        <Header style={{ backgroundColor: '#0f92d0', height: 90 }}>
            <Left>
              <Button transparent>
                <Icon name="ios-arrow-back" style={{ color: 'white' }} />
      <Text style={{ color: 'white' }}>Back</Text>
              </Button>
            </Left>
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <Title style={{ width: 200, color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 3 }}>FW Dashboard</Title>
              </View>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' style={{ color: 'white' }} />
              </Button>
            </Right>
          </Header>
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
          <Footer>
            <FooterTab style={styles.footerTab}>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Accounts</Text>
              </Button>
              <Button style={{ backgroundColor: '#0D709F', borderRadius: 0 }} active>
                <Icon name='ios-apps-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Offers</Text>
              </Button>
              <Button>
                <Icon name='ios-document-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Cases</Text>
              </Button>
              <Button>
                <Icon name='ios-mail-outline' style={{ color: 'white' }} />
                <Text style={styles.footerTabText}>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: Screen6,
    navigationOptions: {
      header: null
    }
  },
  Screen2: {
    screen: Screen2
  }
});
