import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container:{
    marginBottom: 15
  },
  textInput: {
      borderRadius: 15,
      backgroundColor: "#F5F5F5",
      borderColor: "#F5F5F5",
      padding: 15,
    //   paddingHorizontal: 15,
      fontFamily: 'Poppins-SemiBold',
      fontSize: 13,
  },
  label: {
    fontFamily: 'Whitney',
    fontSize: 16,
    color: "#5E5E5E",
    marginBottom: 18,
    fontWeight: 'bold'
  },
  errorText: {
    color: "#db3357",
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10
  }
});

export default styles;
