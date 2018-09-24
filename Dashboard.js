import React from 'react';
import * as shape from 'd3-shape';
import { View } from 'react-native';
import { StackedAreaChart } from 'react-native-svg-charts';
import{ Container, Content, Button, Text, Footer } from 'native-base';

import Header from './Header';

export default class Dashboard extends React.Component {

    render() {
  
      console.log(this.props);
      return (
        <Container>
            <Header title="FW Dashboard" />
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