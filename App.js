import React from 'react';
import * as shape from 'd3-shape';
import { StyleSheet } from 'react-native';
import { StackedAreaChart } from 'react-native-svg-charts';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { View, ImageBackground, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import{ Container, Content, Button, Text, Icon, Form, Item, Input, Right, FooterTab, Footer } from 'native-base';

import Home from './Home';
import Goal from './Goal';
import Offer from './Offer';
import Offers from './Offers';
import Contact from './Contact';
import Success from './Success';
import Accounts from './Accounts';
import Dashboard from './Dashboard';

const Ri = () => {
  return (
    <Right>
      <Button transparent>
        <Icon name='search' style={{ color: 'white' }} />
      </Button>
    </Right>
  );
}

const offers = createStackNavigator({
  offers: {
    screen: Offers
  },
  offer: {
    screen: Offer,
    navigationOptions: {
      title: 'Personal Loan',
      headerStyle: {
        backgroundColor: '#0f92d0',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: <Ri />
    }
  }
});

const dashboard = createStackNavigator({
  dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  goal: {
    screen: Goal,
    navigationOptions: {
      title: 'Goal',
      headerStyle: {
        backgroundColor: '#0f92d0',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: <Ri />
    }
  }
});

export default createBottomTabNavigator({
  accounts: {
    screen: Accounts
  },
  offers: offers,
  home: {
    screen: Home
  },
  dashboard: dashboard,
  contact: {
    screen: Contact
  },
  success: {
    screen: Success
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
              <Text style={styles.footerTabText}>Goals</Text>
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
