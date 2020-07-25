import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
   ScrollView,
   FlatList,
   AsyncStorage
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
 


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.date}>date : {title.date}</Text>
    <Text style={styles.itemData}>phone : {title.phone}</Text>
    <Text style={styles.itemData}>email : {title.email}</Text>
    <Text style={styles.itemData}>name : {title.name}</Text>
  </View>
);



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null, datalist : null
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }
 
  renderItem = ({ item }) => (
    <Item title={item} />
  )

  async onDateChange(date) {
    var date = new Date(date);
    const dateKey = date.getUTCFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getUTCDate();
    const data = await AsyncStorage.getItem(dateKey);
    if(data == null){
      this.setState({
        selectedStartDate: date,datalist: null
      });
    }else{
      var jsonData = JSON.parse(data);
      var datalist =  [];
      jsonData.map(i=>{
        datalist.push({date:i.time,name:i.name, phone:i.phone, email:i.email});
      })
      this.setState({
        selectedStartDate: date,datalist: datalist
      });
    }
    
   
  }
  
  render() {
    const { selectedStartDate } = this.state;
    const date = new Date();
    date.setDate(date.getDate() - 5)
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    
    

    console.log(date);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <CalendarPicker
          selectedStartDate={startDate}
          onDateChange={this.onDateChange}
        />
 
        <View>
          <Text>     SELECTED DATE : { startDate }</Text>
        </View>
        <View>
          <FlatList
            data={this.state.datalist}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  item: {
    backgroundColor: '#efefef',
    padding: 2,
    paddingLeft:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  date:{
    fontSize : 19,
  }
  ,
  itemData: {
    fontSize: 10,
    paddingLeft:5,
  },
});