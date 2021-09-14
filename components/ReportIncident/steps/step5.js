import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, View, TouchableOpacity, TextInput, Text, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import Loading from '../../utils/Loading';
import {editCase} from '../../../redux/actions/caseActions';

import styles from './styles';
import Colors from '../../../constants/Colors';

export class step5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: '',
      currentStep: '',
      isLoading: false,
      coverModal: false,
      coverPhoto: null,
      multipleImages: null
    };
  }

  static getDerivedStateFromProps = (props) => {
    const {getTotalSteps, getCurrentStep} = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
    };
  };

  toggleCoverModal = () => {
    this.setState({coverModal: !this.state.coverModal});
  };

  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      this.setState({coverPhoto: image.path});
      this.toggleCoverModal();
    });
  };
  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      this.setState({coverPhoto: image.path});
      this.toggleCoverModal();
    });
  };
  chooseMultipleImages = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
    //   console.log(images.length);
      this.setState({multipleImages: images});
    });
  }

  onCaseCreated = () => {
    Alert.alert('Complete', 'Case created successfully', [
      {text: 'OK', onPress: () => {
        this.props.next()
      }},
    ]);
  }

  onSubmit = () => {
    this.setState({isLoading: true});
    console.log(this.state.multipleImages)
    // setTimeout(() => {
    //   this.setState({isLoading: false});

    //   this.onCaseCreated();
    // }, 3000);
    // const data = {};
    // Object.keys(this.state.form).map((el) => {
    //   data[el] = this.state.form[el].value;
    // });
    // this.props.editCase(data, this.props.case.case._id, this.nextStep, this.onError);
  };

  onError = () => {
    this.setState({isLoading: false});
    Alert.alert('Case Error', 'Something went wrong', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
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
        {this.state.coverPhoto && (
          <View style={{marginTop: 20}}>
            <Image
              source={{uri: this.state.coverPhoto}}
              style={{height: 150, width: 150}}
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.dateInput}
          onPress={this.toggleCoverModal}>
          <Text style={styles.dateInputText}>Add Cover Photograph</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={this.chooseMultipleImages}>
          {this.state.multipleImages ? <Text style={styles.dateInputText}>{`${this.state.multipleImages.length} images selected`}</Text> : <Text style={styles.dateInputText}>Attach Evidence(s)... Max 5 Files</Text>}
        </TouchableOpacity>
        {/* MODAL */}
        <Modal isVisible={this.state.coverModal}>
          <View style={styles.modalWrapper}>
            <View style={styles.modalBody}>
              <Text style={styles.modalTitle}>Upload Photo</Text>
              <Text style={styles.modalSubTitle}>Choose your cover photo</Text>
              <View style={{marginTop: 30}}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={this.takePhotoFromCamera}>
                  <Text style={styles.modalButtonText}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={this.choosePhotoFromLibrary}>
                  <Text style={styles.modalButtonText}>
                    Choose From Library
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.modalButton, backgroundColor: '#FD003A'}}
                  onPress={this.toggleCoverModal}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* MODAL */}
        {/* <View style={[styles.btnContainer, styles.marginAround]}> */}
        <View style={styles.btnContainer}>
          {/* <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
            <Image
              source={require('../../../assets/arrow.png')}
              style={[styles.btnImage, styles.backBtn]}
              resizeMode="cover"
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={this.onSubmit} style={styles.btnStyle}>
            <Text style={{color: 'white'}}>Finish</Text>
            {/* <Image
              source={require('../../../assets/arrow.png')}
              style={styles.btnImage}
              resizeMode="cover"
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  case: state.case
})

export default connect(mapStateToProps, {editCase})(step5);
