/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, KeyboardAvoidingView, Platform, Keyboard, TextInput, ActivityIndicator, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from '../../styles/case/style';
import inputStyle from '../ReportIncident/steps/styles';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Overlay from '../Overlay';
import PrimaryButton from '../shared/Button/PrimaryButton';
import moment from 'moment';
import axios from 'axios'


const CommentBox = () => {
  return (<View style={{padding: 20}}>

    <Text style={{fontSize: 20, alignSelf: "center", color: "#555353", fontWeight: "500", marginBottom: 10}}>Share your thoughts!</Text>
    <Text style={{fontSize: 13, alignSelf: "center", color: "#555353", fontWeight: "300", fontStyle: "italic"}}>March 30, 2021 13:45 pm</Text>
    <View style={{padding: 20, backgroundColor: "#F3F1F1", borderRadius: 10, width: "100%", marginBottom: 10, marginTop: 20}}>
        <TextInput style={{height: 150, color: "#5d5b5b"}}
          underlineColorAndroid="transparent"
          placeholder="Enter comments"
          placeholderTextColor="#ccc"
          numberOfLines={10}
          multiline={true}
        />
      </View>
    <PrimaryButton text={"Submit"} style={{width: 100, borderRadius: 6,  alignSelf: "center", marginTop: 25 }} />
  </View>)
}


const Comments = ({data}) => {
  const [inputText, setInputText] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [fetchedComments, setFetchedComments] = useState(null)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     () => {
  //       setKeyboardVisible(true); // or some other action
  //     }
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => {
  //       setKeyboardVisible(false); // or some other action
  //     }
  //   );

  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

  const url = "https://sorosokeapi.onrender.com/api/v1/comment/"+data._id;
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setFetchedComments(res.data)
        setIsFetching(false)
        console.log(res.data)
      })
      .catch(err => {
        setIsFetching(false)
        console.log("An error occured")
      })
  }, [url])

  const SingleComment = ({data}) => {
    const commentDate = moment(data.dateOfComment).format('h:mm a');
    return (
      <View style={{ marginBottom: 20, borderColor: "rgba(171, 179, 196, 0.2)", borderBottomWidth: 1, paddingBottom: 20, alignSelf: "center", width: "100%" }}>
        <View style={styles.chatTop}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <View style={{ borderRadius: 20, backgroundColor: "#ccc", width: 40, height: 40 }} >
              <Image source={{uri: data.avatar}} style={{ width: 40, height: 40, borderRadius: 20, }} />
            </View>
            <View style={styles.chatTopRight}>
              <Text style={{ color: "#555353", fontFamily: "poppins", fontWeight: 'bold' }}>John Doe</Text>
              <Text style={{ marginTop: 0, fontSize: 12, color: "#0009" }}>@{data.userName}</Text>
            </View>
          </View>
          <Text style={{ marginTop: 0, fontSize: 12, color: "#555353" }}>{commentDate}</Text>
        </View>
        <Text style={{marginLeft: 50, textAlign: "justify", color: "#000a", fontSize: 13, lineHeight: 15, fontFamily: "poppins" }}>
          {data.comment}
        </Text>
      </View>
    );
  };

  const onTextChanged = (data) => {
    setInputText(data);
  };
  const renderItem = (data) => <SingleComment data={data.item} />;
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}

      >
        <Overlay close={() => { setShowOverlay(false) }} style={{ marginTop: (isKeyboardVisible) ? "10%" : "70%" }} content={CommentBox()} show={showOverlay}></Overlay>
        {isFetching ? <ActivityIndicator size="small" color="#008080" /> : <FlatList
          data={fetchedComments.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: 0, paddingHorizontal: 0 }}
        />}

        <View style={{width: 70, height: 70, borderRadius: 100, backgroundColor: "#FFC866", justifyContent: "center", alignItems: "center", alignSelf: "flex-end", marginTop: -100 }}>
          <TouchableOpacity onPress={() => { setShowOverlay(true) }}>
            <Icon name="reply" size={20} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Comments;
