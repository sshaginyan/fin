import React from 'react';
import { StyleSheet } from 'react-native';
import{ Footer, FooterTab, Button, Text, Icon } from 'native-base';

export default props => {

  const { navigate } = props.navigation;
  const routeName = props.navigation.state.routeName;

  return (
    <Footer>
      <FooterTab style={styles.footerTab}>
        <Button style={routeName === 'accounts' ? styles.activeButton : null} active={routeName === 'accounts' ? true : false}>
          <Icon name='ios-contacts-outline' style={styles.icon} />
          <Text style={styles.footerTabText}>Accounts</Text>
        </Button>
        <Button style={routeName === 'offers' ? styles.activeButton : null} active={routeName === 'offers' ? true : false}  onPress={() => navigate('offers', { name: 'Jane' }) }>
          <Icon name='ios-create-outline' style={styles.icon} />
          <Text style={styles.footerTabText}>Offers</Text>
        </Button>
        <Button style={routeName === 'home' ? styles.activeButton : null} active={routeName === 'home' ? true : false} onPress={() => navigate('home', { name: 'Jane' }) }>
          <Icon name="ios-home-outline" style={styles.icon}/>
          <Text style={styles.footerTabText}>Home</Text>
        </Button>
        <Button style={routeName === 'dashboard' ? styles.activeButton : null} active={routeName === 'dashboard' ? true : false}>
          <Icon name='ios-speedometer-outline' style={styles.icon} />
          <Text style={styles.footerTabText}>Dashboard</Text>
        </Button>
        <Button style={routeName === 'contact' ? styles.activeButton : null} active={routeName === 'contact' ? true : false}>
          <Icon name='ios-mail-outline' style={styles.icon} />
          <Text style={styles.footerTabText}>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};



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
