import React from 'react';
import { StyleSheet } from 'react-native';
import{ Footer, FooterTab, Button, Text, Icon } from 'native-base';

export default props => {
  return (
    <Footer>
      <FooterTab style={styles.footerTab}>
        <Button style={props.active === 'goals' ? styles.activeButton : null} active={props.active === 'goals' ? true : false}>
          <Icon style={styles.icon}>$</Icon>
          <Text style={styles.footerTabText}>Goals</Text>
        </Button>
        <Button style={props.active === 'accounts' ? styles.activeButton : null} active={props.active === 'accounts' ? true : false}>
          <Icon name='ios-contacts-outline' style={styles.icon} />
          <Text style={styles.footerTabText}>Accounts</Text>
        </Button>
        <Button style={props.active === 'offers' ? styles.activeButton : null} active={props.active === 'offers' ? true : false}>
          <Icon name='ios-create-outline' style={styles.icon} />
          <Text style={styles.footerTabText}>Offers</Text>
        </Button>
        <Button style={props.active === 'dashboard' ? styles.activeButton : null} active={props.active === 'dashboard' ? true : false}>
          <Icon name='ios-speedometer-outline' style={styles.icon} />
          <Text style={styles.footerTabText}>Dashboard</Text>
        </Button>
        <Button style={props.active === 'contact' ? styles.activeButton : null} active={props.active === 'contact' ? true : false}>
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
