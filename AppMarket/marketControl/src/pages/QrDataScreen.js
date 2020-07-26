import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import Modal from '../modals/modal';




const _onLongPressButton = (item,openModal) =>{
  openModal(true,item);
}

const Item = ({ item ,openModal }) => (
  <View style={styles.item}>
    <TouchableOpacity  onLongPress={()=>{_onLongPressButton(item ,openModal)}}>
      <Text Text style={styles.date}>date : {item.date }</Text>
      <Text style={styles.itemData}>phone : {item.phone }</Text>
      <Text style={styles.itemData}>email : {item.email }</Text>
      <Text style={styles.itemData}>name : {item.name }</Text>
    </TouchableOpacity>
  </View>
);



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null, datalist : null , isModal : false ,currentData : null
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.openModal = this.openModal.bind(this);
  }
 
  openModal =(state,data)=>{
    this.setState({isModal:state, currentData : data});
  }

  renderItem = ({ item }) => (
      <Item item={item} openModal={this.openModal}> </Item>
  )

  async onDateChange(date) {
    var date = new Date(date);
    const dateKey = date.getUTCFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getUTCDate();
    const data = await AsyncStorage.getItem(dateKey);

    var datalist =  [];
  
    if(data != null){
      var jsonData = JSON.parse(data);
     
      jsonData.map(i=>{
        datalist.push({date:i.time,name:i.name, phone:i.phone, email:i.email});
      })
      
    }

    this.setState({
      selectedStartDate: date, datalist: datalist
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
            data={this.state.datalist}
            renderItem={this.renderItem}
          />
        </View>
        </ScrollView>
        <Modal isModal={this.state.isModal} currentData={this.state.currentData} openModal={this.openModal}></Modal>
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