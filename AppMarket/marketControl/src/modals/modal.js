import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import qs from 'qs';

function ModalTester(props) {
  const currentData = props.currentData == null ? "" : props.currentData;
  const toggleModal = () => {
    props.openModal(false,null);
  };

  const clickCallEvent= () =>{
    Linking.openURL(`tel:${currentData.phone}`)
  }

  const clickSendEmailEvent = () =>{
    const { cc, bcc } = "";
    let url = `mailto:${currentData.email}`;

    // Create email link query
    const query = qs.stringify({
        subject: 'subject',
        body: 'body',
        cc: cc,
        bcc: bcc
    });

    if (query.length)
        url += `?${query}`;

    // check if we can use this link
    Linking.canOpenURL(url).then(i => {
      if(i == true){
        Linking.openURL(url);
        url = null;
      }
    });
  }

 
    return (
        <Modal isVisible={props.isModal}>
          <View style={styles.container}>
              <View style={styles.body}>
                <View style={styles.items}>
                    <View style={styles.row}>
                        <Text style={styles.itemTitle}>
                            {currentData.name} : {currentData.date}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item} title="Hide modal" onPress={clickCallEvent} >
                            <Text style={styles.itemTitle}>
                                전화걸기 : {currentData.phone}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item} title="Hide modal" onPress={clickSendEmailEvent} >
                            <Text style={styles.itemTitle}>
                                이메일 작성 : {currentData.email}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.modalButton}>
                    <TouchableOpacity style={styles.closeModal} title="Hide modal" onPress={toggleModal} >
                        <Text style={styles.closeBtn}>
                            CLOSE
                        </Text>
                     </TouchableOpacity>
                </View>
              </View>
          </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    body :{  
        height:"100%",
        width:"100%",
    },
    items: {
      height:"24%",
      width:"100%",
      marginTop:"45%",
      backgroundColor: '#efefef',
      margin:"auto",
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemTitle:{
        fontSize : 18,
        textAlign:"center",
        backgroundColor:"#efefef"
    },
    row:{
        width:"80%",
        backgroundColor:"grey",
        marginTop:10,
    },
    modalButton:{
      width:"100%",
      height:"10%",
      backgroundColor:"grey",
      margin:"auto", 
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeBtn:{
        fontSize:25
    },
    closeModal:{
        borderRadius: 100/2,
        width:"70%",
        height:"50%",
        backgroundColor:"#efefef",
        margin:"auto", 
        justifyContent: 'center',
        alignItems: 'center'
    }
    
  });

export default ModalTester;