import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
   ScrollView,
   FlatList
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
 
const DATA = [
  {
    date : 'date : ',
    name : 'name : ',
    phone : 'phone : ',
    email : 'email : ',
  },
  {
    date : 'date : ',
    name : 'name : ',
    phone : 'phone : ',
    email : 'email : ',
  },
  {
    date : 'date : ',
    name : 'name : ',
    phone : 'phone : ',
    email : 'email : ',
  },
  {
    date : 'date : ',
    name : 'name : ',
    phone : 'phone : ',
    email : 'email : ',
  },
  {
    date : 'date : ',
    name : 'name : ',
    phone : 'phone : ',
    email : 'email : ',
  },
  {
    date : 'date : ',
    name : 'name : ',
    phone : 'phone : ',
    email : 'email : ',
  },

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.date}>{title.date}</Text>
    <Text style={styles.itemData}>{title.phone}</Text>
    <Text style={styles.itemData}>{title.email}</Text>
    <Text style={styles.itemData}>{title.name}</Text>
  </View>
);



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }
 
  renderItem = ({ item }) => (
    <Item title={item} />
  )

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
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
            data={DATA}
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