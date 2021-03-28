import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Box, Text, Button, Checkbox, useTheme, TextInput } from '../../../components';
import { TripStackNavigationProps } from '../../../routers';
import { useActions, useTypedSelector } from '../../../hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput as RNTextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { Slider } from 'react-native-elements';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const NewTripSchema = Yup.object().shape({
  distance: Yup.number().required('Required').positive().integer(),
});

const NewCarTrip = ({ navigation }: TripStackNavigationProps<'NewCarTrip'>) => {
  const [selectedMotor, setSelectedMotor] = useState<number>(1);
  const theme = useTheme();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: NewTripSchema,
    initialValues: {
      distance: 0,
      vehicle_type: '',
      round_trip: false,
    },
    onSubmit: () => {
      postCommonTrip(values);
    },
  });

  const distance = useRef<RNTextInput>(null);
  const radioButtonsData: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1',
        label: 'Diesel',
        value: 'diesel_car',
        selected: true,
        labelStyle: { fontSize: 14, fontFamily: 'Avenir-Regular', color: 'rgba(54, 54, 83, 0.7)' },
        size: 20,
      },
      {
        id: '2',
        label: 'Petrol',
        value: 'petrol_car',
        labelStyle: { fontSize: 14, fontFamily: 'Avenir-Regular', color: 'rgba(54, 54, 83, 0.7)' },
        size: 20,
      },
      {
        id: '3',
        label: 'Electric',
        value: 'electric_car',
        labelStyle: { fontSize: 14, fontFamily: 'Avenir-Regular', color: 'rgba(54, 54, 83, 0.7)' },
        size: 20,
      },
    ],
    [selectedMotor]
  );

  const { postCommonTrip } = useActions();
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData);
  const { isLoading } = useTypedSelector(state => state.trips);
  const [people, setPeople] = useState<number>(1);

  const onPressRadio = (radioButtonsArray: RadioButtonProps[]) => {
    setRadioButtons(radioButtonsArray);
  };

  useEffect(() => {
    radioButtons.forEach((item, index) => {
      if (item.selected) {
        setSelectedMotor(index);
        item.color = '#39D697';
      } else {
        item.color = 'rgba(54, 54, 83, 0.7)';
      }
    });
  }, [radioButtons, selectedMotor]);

  useEffect(() => {
    switch (selectedMotor) {
      case 0:
        setFieldValue('vehicle_type', 'diesel_car');
      case 1:
        setFieldValue('vehicle_type', 'petrol_car');
      case 2:
        setFieldValue('vehicle_type', 'electric_car');
      default:
        return;
    }
  }, [selectedMotor]);

  return (
    <Box>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></Box>
      <KeyboardAwareScrollView
        style={{
          backgroundColor: theme.colors.secondary,
          marginTop: 50,
        }}
      >
        <Box
          alignItems="center"
          style={styles.boxInfo}
          backgroundColor="lightgray"
          paddingBottom="xl"
          paddingTop="m"
          marginTop="m"
        >
          <Box
            style={{
              position: 'absolute',
              left: 20,
              top: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Box style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text variant="body" style={{ color: '#ff6361', textDecorationLine: 'underline' }}>
                  Cancel
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
          <Text variant="titleCard" marginBottom="s" style={{ color: theme.colors.text }}>
            New <Text color="primary">car</Text> trip
          </Text>
          <Box style={styles.imgContainer}>
            <Image source={require('../../../../assets/images/van.png')} style={styles.imgStyle} />
          </Box>

          <Box marginTop="l">
            <RadioGroup layout="row" radioButtons={radioButtons} onPress={id => onPressRadio(id)} />
          </Box>
          <Box marginTop="l">
            <Text variant="body">
              <Text variant="bodyHighlight">{people}</Text> {people === 1 ? 'person' : 'people'}{' '}
              will travel in the car
            </Text>
          </Box>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={5}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={1}
            onValueChange={(value: number) => setPeople(value)}
            orientation="horizontal"
            step={1}
            style={{ width: wp(70), height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20, backgroundColor: theme.colors.secondary }}
            value={people}
          />

          <Box marginTop="m" style={{ alignItems: 'center' }}>
            <Box style={{ alignItems: 'center' }}>
              <Text variant="body">What will be the distance of the trip ?</Text>
            </Box>
            <Box marginTop="s" style={{ width: wp(70) }}>
              <TextInput
                icon="chevrons-right"
                ref={distance}
                keyboardType="numeric"
                error={errors.distance}
                onChangeText={handleChange('distance')}
                onBlur={handleBlur('distance')}
                touched={touched.distance}
                style={{
                  borderRadius: 40,
                  paddingHorizontal: 30,
                }}
              />
              <Box
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 50,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text variant="button">km</Text>
              </Box>
            </Box>
          </Box>

          <Box marginTop="l">
            <Checkbox
              label="Is it a round trip?"
              checked={values.round_trip}
              onChange={() => setFieldValue('round_trip', !values.round_trip)}
            />
          </Box>

          <Box
            alignItems="center"
            marginTop="l"
            style={{ flexDirection: 'row-reverse', justifyContent: 'center' }}
          >
            {isLoading ? (
              <Button
                variant="primary"
                style={{ width: 180 }}
                onPress={() => 'void'}
                label={<ActivityIndicator color="#ffffff" />}
              />
            ) : (
              <Button
                variant="primary"
                onPress={handleSubmit}
                label="Save this trip"
                style={{ width: 180 }}
              />
            )}
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  boxInfo: {
    width: wp('100%'),
    height: hp('80%'),
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 5,
  },
  boxContainer: {
    width: wp(100),
    height: 50,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxDistance: {
    width: wp(100) - 40,
    height: 300,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 10,
  },
  inputStyle: {
    height: 40,
    width: 100,
    margin: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  Button: { width: 100, margin: 5 },
  imgStyle: {
    height: 86,
    width: 86,
    borderRadius: 15,
    tintColor: 'white',
  },
  imgContainer: {
    width: wp(95),
    borderRadius: 10,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NewCarTrip;
