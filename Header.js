import React from 'react';
import { StyleSheet } from 'react-native';
import{ Header, Left, Body, Button, View, Title, Right, Icon, Text } from 'native-base';

export default props => {

  let leftIcon = null;
  let titleIcon = null;

  if(props.main) {
    titleIcon = <View style={{ marginTop: 8, marginRight: 4 }}>
                  <Icon name='ios-cloud-outline' style={{ color: 'white', fontSize: 35 }} />
                </View>;
    leftIcon =  <Button transparent>
                  <Icon name="menu" style={styles.icon} />
                </Button>;
  } else {
    leftIcon =  <Button transparent>
                  <Icon name="ios-arrow-back" style={styles.icon} />
                  <Text style={styles.icon}>Back</Text>
                </Button>;
  }



  return (
    <Header style={ props.main ? styles.main : styles.other }>
      <Left>
        { leftIcon }
      </Left>
      <Body>
        <View style={{ flexDirection: 'row' }}>
          { titleIcon }
          <Title style={styles.title}>Cumulus Bank</Title>
        </View>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='search' style={styles.icon} />
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 3
  },
  icon: {
    color: 'white'
  },
  main: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  },
  other: {
    backgroundColor: '#0f92d0'
  }
});
