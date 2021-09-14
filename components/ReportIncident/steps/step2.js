import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, View, TouchableOpacity, TextInput, Text, Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import styles from './styles';
import states from '../../../utils/data/states';
import countries from '../../../utils/data/country';
import Colors from '../../../constants/Colors';
import Loading from '../../utils/Loading';
import {createCaseVictim} from '../../../redux/actions/caseActions';

export class step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      showDate: false,
      isLoading: false,
      form: {
        firstNameOfVictim: {
          value: '',
          placeholder: "Victim's first Name",
          type: 'text',
        },
        middleNameOfVictim: {
          value: '',
          placeholder: "Victim's middle Name",
          type: 'text',
        },
        lastNameOfVictim: {
          value: '',
          placeholder: "Victim's last Name",
          type: 'text',
        },
        emailOfVictim: {
          value: '',
          placeholder: "Victim's email address",
          type: 'email',
        },
        dobOfVictim: {
          value: new Date(),
          placeholder: "Victim's date of birth",
          type: 'date',
          entered: false
        },
        phoneNumberOfVictim: {
          value: '',
          placeholder: "Victim's phone number",
          type: 'text',
        },
        genderOfVictim: {
          value: '',
          placeholder: "Victim's Gender",
          type: 'select',
          default: "Victim's Gender",
          options: ['Male', 'Female'],
        },
        residentialAddressOfVictim: {
          value: '',
          placeholder: "Victim's residential address",
          type: 'text',
        },
        countryOfVictim: {
          value: '',
          placeholder: "Victim's country",
          type: 'select',
          default: "Victim's country",
          options: [],
        },
        stateOfVictim: {
          value: '',
          placeholder: "Victim's state",
          type: 'select',
          default: "Victim's state",
          options: [],
        },
        lgaOfVictim: {
          value: '',
          placeholder: "Victim's LGA",
          type: 'select',
          default: "Victim's Local government area",
          options: [],
        },
        victimOccupation: {
          value: '',
          placeholder: "Victim's Occupation",
          type: 'text',
        },
        victimOrganizationType: {
          value: '',
          placeholder: "Victim's org type",
          type: 'select',
          default: "Victim's org type",
          options: ["Government", "NGO", "Private", "Self Employed", "Others", "Unknown"],
        },
        victimOrganizationName: {
          value: '',
          placeholder: "Victim's org name",
          type: 'text',
        },
        otherDetailsOfVictim: {
          value: '',
          placeholder: "Other detail's of victim",
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
    const formEl = {...form['stateOfVictim']};
    formEl.options = sortedStates;
    const newCountry = {...form['countryOfVictim']};
    newCountry.options = countries;
    form['countryOfVictim'] = newCountry;
    form['stateOfVictim'] = formEl;
    this.setState({form});
  }

  nextStep = () => {
    const {next, saveState} = this.props;
    saveState(this.state);
    this.setState({isLoading: false});
    next();
  };

  onSubmit = () => {
    this.setState({isLoading: true});
    const data = {};
    Object.keys(this.state.form).map((el) => {
      data[el] = this.state.form[el].value;
    });
    this.props.createCaseVictim(data, this.props.case.case._id, this.nextStep, this.onError);
  };

  onError = () => {
    this.setState({isLoading: false});
    Alert.alert('Case Error', 'Something went wrong', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  onTextChange = (text, el) => {
    const form = {...this.state.form};
    const formEl = {...form[el]};
    formEl.value = text;
    form[el] = formEl;
    if (el === 'stateOfVictim') {
      const locality = {...form['lgaOfVictim']};
      locality.options = states[text];
      form['lgaOfVictim'] = locality;
    }
    this.setState({form});
  };

  onDateChanged = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.form['dobOfVictim'].value;
    // setShow(Platform.OS === 'ios');
    const form = {...this.state.form};
    const formEl = {...form['dobOfVictim']};
    formEl.value = currentDate;
    formEl.entered= true;
    form['dobOfVictim'] = formEl;
    this.setState({form, showDate: false});
  };

  onShowDatePicker = () => {
    this.setState({showDate: true});
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
            value={this.state.form['dobOfVictim'].value}
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

export default connect(mapStateToProps, {createCaseVictim})(step2);
