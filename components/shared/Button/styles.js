import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  grdtContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  grdtText: {
      color: "#fff",
      fontFamily: "Lato",
      fontSize: 16
  },
  primaryText: {
    color: Colors.primary,
    fontFamily: "Lato",
    fontSize: 16
},
  grdtBtn: {
    width: '100%',
    borderRadius: 15,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 0,
    overflow: 'visible',
  }
});

export default styles;
