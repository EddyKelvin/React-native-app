import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Image, View, TouchableOpacity, TextInput, Text, Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import styles from './styles';
import states from '../../../utils/data/states';
import countries from '../../../utils/data/country';
import Colors from '../../../constants/Colors';
import Loading from '../../utils/Loading';
import {createCaseWitness} from '../../../redux/actions/caseActions';

export class step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      showDate: false,
      isLoading: false,
      form: {
        firstNameOfWitness: {
          value: '',
          placeholder: "Witness's first Name",
          type: 'text',
        },
        middleNameOfWitness: {
          value: '',
          placeholder: "Witness's middle Name",
          type: 'text',
        },
        lastNameOfWitness: {
          value: '',
          placeholder: "Witness's last Name",
          type: 'text',
        },
        emailOfWitness: {
          value: '',
          placeholder: "Witness's email address",
          type: 'email',
        },
        dobOfWitness: {
          value: new Date(),
          placeholder: "Witness's date of birth",
          type: 'date',
          entered: false
        },
        phoneNumberOfWitness: {
          value: '',
          placeholder: "Witness's phone number",
          type: 'text',
        },
        genderOfWitness: {
          value: '',
          placeholder: "Witness's Gender",
          type: 'select',
          default: "Witness's Gender",
          options: ['Male', 'Female'],
        },
        residentialAddressOfWitness: {
          value: '',
          placeholder: "Witness's residential address",
          type: 'text',
        },
        countryOfWitness: {
          value: '',
          placeholder: "Witness's country",
          type: 'select',
          default: "Witness's country",
          options: [],
        },
        stateOfWitness: {
          value: '',
          placeholder: "Witness's state",
          type: 'select',
          default: "Witness's state",
          options: [],
        },
        lgaOfWitness: {
          value: '',
          placeholder: "Witness's LGA",
          type: 'select',
          default: "Witness's Local government area",
          options: [],
        },
        witnessOccupation: {
          value: '',
          placeholder: "Witness's Occupation",
          type: 'text',
        },
        witnessOrganizationType: {
          value: '',
          placeholder: "Witness's org type",
          type: 'select',
          default: "Witness's org type",
          options: ["Government", "NGO", "Private", "Self Employed", "Others", "Unknown"],
        },
        witnessOrganizationName: {
          value: '',
          placeholder: "Witness's org name",
          type: 'text',
        },
        otherDetailsOfWitness: {
          value: '',
          placeholder: "Other detail's of Witness",
          type: 'text',
        },
      },
    };
  }

  static getDerivedStateFromProps = (props) => {
    const {getTotalSteps, getCurrentStep} = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };

  componentDidMount() {
    const sortedStates = Object.keys(states).map((el) => el);
    const form = {...this.state.form};
    const formEl = {...form['stateOfWitness']};
    formEl.options = sortedStates;
    const newCountry = {...form['countryOfWitness']};
    newCountry.options = countries;
    form['countryOfWitness'] = newCountry;
    form['stateOfWitness'] = formEl;
    this.setState({form});
  }

  nextStep = () => {
    const {next, saveState} = this.props;
    saveState(this.state);
    this.setState({isLoading: false});
    next();
  };

  onTextChange = (text, el) => {
    const form = {...this.state.form};
    const formEl = {...form[el]};
    formEl.value = text;
    form[el] = formEl;
    if (el === 'stateOfWitness') {
      const locality = {...form['lgaOfWitness']};
      locality.options = states[text];
      form['lgaOfWitness'] = locality;
    }
    this.setState({form});
  };

  onDateChanged = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.form['dobOfWitness'].value;
    // setShow(Platform.OS === 'ios');
    const form = {...this.state.form};
    const formEl = {...form['dobOfWitness']};
    formEl.value = currentDate;
    formEl.entered= true;
    form['dobOfWitness'] = formEl;
    this.setState({form, showDate: false});
  };

  onShowDatePicker = () => {
    this.setState({showDate: true});
  };

  onSubmit = () => {
    this.setState({isLoading: true});
    const data = {};
    Object.keys(this.state.form).map((el) => {
      data[el] = this.state.form[el].value;
    });
    this.props.createCaseWitness(data, this.props.case.case._id, this.nextStep, this.onError);
  };

  onError = () => {
    this.setState({isLoading: false});
    Alert.alert('Case Error', 'Something went wrong', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  renderForm = () => {
    const form = this.state.form;
    return Object.keys(this.state.form).map((el) => {
      if (form[el].type === 'select') {
        return (
          <View style={styles.selectWrapper} key={el}>
            <Picker
              selectedValue={form[el].value}
              style={styles.selectInput}
              onValueChange={(itemValue, itemIndex) =>
                this.onTextChange(itemValue, el)
              }>
              <Picker.Item label={form[el].default} value="" />
              {form[el].options.map((el) => (
                <Picker.Item key={el} label={el} value={el} />
              ))}
            </Picker>
          </View>
        );
      }
      if (form[el].type === 'date') {
        return (
          <TouchableOpacity
            key={el}
            style={styles.dateInput}
            onPress={this.onShowDatePicker}>
            <Text style={styles.dateInputText}>
              {form[el].entered === false
                ? form[el].placeholder
                : moment(form[el].value).format('LL')}
            </Text>
          </TouchableOpacity>
        );
      }
      return (
        <TextInput
          multiline={form[el].type === 'textarea' ? true : false}
          numberOfLines={form[el].type === 'textarea' ? 4 : 1}
          key={el}
          style={styles.input}
          onChangeText={(text) => this.onTextChange(text, el)}
          value={form[el].value}
          placeholder={form[el].placeholder}
          placeholderTextColor={Colors.primary}
          textAlignVertical="top"
        />
      );
    });
  };

  render() {
    const {currentStep, totalSteps} = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <Loading isVisible={this.state.isLoading} />
        <View>
          <Text
            style={
              styles.currentStepText
            }>{`Step ${currentStep} of ${totalSteps}`}</Text>
        </View>
        {this.renderForm()}
        <View style={styles.btnContainer}>
          {/* <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
            <Image
              source={require('../../../assets/arrow.png')}
              style={[styles.btnImage, styles.backBtn]}
              resizeMode="cover"
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={this.onSubmit} style={styles.btnStyle}>
            <Image
              source={require('../../../assets/arrow.png')}
              style={styles.btnImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        {this.state.showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.form['dobOfWitness'].value}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={this.onDateChanged}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  case: state.case
})

export default connect(mapStateToProps, {createCaseWitness})(step4);
