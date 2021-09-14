import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';
import moment from 'moment';

import styles from './styles';
import states from '../../../utils/data/states';
import countries from '../../../utils/data/country';
import Colors from '../../../constants/Colors';
import {createCase} from '../../../redux/actions/caseActions';
import Loading from '../../utils/Loading';

class step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      showDate: false,
      showTime: false,
      isLoading: false,
      form: {
        caseTitle: {
          value: '',
          placeholder: 'Case Title',
          type: 'text',
        },
        dateOfIncident: {
          value: new Date(),
          placeholder: 'Date of Incident',
          type: 'date',
          entered: false
        },
        hourOfIncident: {
          value: '',
          placeholder: 'Hour of Incident',
          type: 'select',
          default: 'Hour of Incident',
          options: ['Morning', 'Afternoon', 'Night'],
        },
        timeOfIncident: {
          value: new Date(),
          placeholder: 'Time of Incident',
          type: 'time',
          entered: false
        },
        country: {
          value: '',
          placeholder: 'Country',
          type: 'select',
          default: 'Country',
          options: [],
        },
        state: {
          value: '',
          placeholder: 'State',
          type: 'select',
          default: 'State',
          options: [],
        },
        lga: {
          value: '',
          placeholder: 'LGA',
          type: 'select',
          default: 'Local government area',
          options: [],
        },
        addressOfIncident: {
          value: '',
          placeholder: 'Address',
          type: 'text',
        },
        descriptionOfIncident: {
          value: '',
          placeholder: 'Describe the Incident',
          type: 'textarea',
        },
        areYouTheVictim: {
          value: '',
          placeholder: 'Are you the victim?',
          type: 'select',
          default: 'Are you the victim?',
          options: ['Yes', 'No'],
        },
        relationshipWithVictim: {
          value: '',
          placeholder: 'Relationship with the victim?',
          type: 'select',
          default: 'Relationship with the victim?',
          options: ['Friend', 'Family'],
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
    const formEl = {...form['state']};
    formEl.options = sortedStates;
    const newCountry = {...form['country']};
    newCountry.options = countries;
    form['country'] = newCountry;
    form['state'] = formEl;
    this.setState({form});
  }

  nextStep = () => {
    const {next, saveState} = this.props;
    // Save state for use in other steps
    saveState(this.state);
    this.setState({isLoading: false});
    // Go to next step
    next();
  };

  goBack() {
    const {back} = this.props;
    // Go to previous step
    back();
  }

  onSubmit = () => {
    this.setState({isLoading: true});
    const data = {};
    Object.keys(this.state.form).map((el) => {
      data[el] = this.state.form[el].value;
    });
    this.props.createCase(data, this.nextStep, this.onError);
  };

  onError = () => {
    this.setState({isLoading: false});
    Alert.alert('Case Error', 'Could not create case', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  onTextChange = (text, el) => {
    const form = {...this.state.form};
    const formEl = {...form[el]};
    formEl.value = text;
    form[el] = formEl;
    if (el === 'state') {
      const locality = {...form['lga']};
      locality.options = states[text];
      form['lga'] = locality;
    }
    this.setState({form});
  };

  onDateChanged = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.form['dateOfIncident'].value;
    // setShow(Platform.OS === 'ios');
    const form = {...this.state.form};
    const formEl = {...form['dateOfIncident']};
    formEl.value = currentDate;
    formEl.entered= true;
    form['dateOfIncident'] = formEl;
    this.setState({form, showDate: false});
  };

  onTimeChanged = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.form['timeOfIncident'].value;
    // setShow(Platform.OS === 'ios');
    const form = {...this.state.form};
    const formEl = {...form['timeOfIncident']};
    formEl.value = currentDate;
    formEl.entered= true;
    form['timeOfIncident'] = formEl;
    this.setState({form, showTime: false});
  };

  onShowDatePicker = () => {
    this.setState({showDate: true});
  };

  onShowTimePicker = () => {
    this.setState({showTime: true});
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
      if (form[el].type === 'time') {
        return (
          <TouchableOpacity
            key={el}
            style={styles.dateInput}
            onPress={this.onShowTimePicker}>
            <Text style={styles.dateInputText}>
              {form[el].entered === false
                ? form[el].placeholder
                : moment(form[el].value).format('LT')}
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
            value={this.state.form['dateOfIncident'].value}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={this.onDateChanged}
          />
        )}
        {this.state.showTime && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.form['timeOfIncident'].value}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={this.onTimeChanged}
          />
        )}
      </View>
    );
  }
}

export default connect(null, {createCase})(step1);
