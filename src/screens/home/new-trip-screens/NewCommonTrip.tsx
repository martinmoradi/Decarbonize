import React, { useEffect, useRef } from 'react';
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
import * as Yup from 'yup';
import { useFormik } from 'formik';

const NewTripSchema = Yup.object().shape({
  distance: Yup.number().required('Required').positive().integer(),
});

type PropsNewCommonTrip = {
  route: TripStackNavigationProps<'NewCommonTrip'>;
  navigation: TripStackNavigationProps<'NewCommonTrip'>;
  url: string;
};

const NewCommonTrip = ({ route, navigation, url }: PropsNewCommonTrip) => {
  const theme = useTheme();
  const distance = useRef<RNTextInput>(null);
  const { postCommonTrip } = useActions();

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

  const { errorMessage, isLoading } = useTypedSelector(state => state.trips);

  const getImage = (url: string | undefined) => {
    switch (route.params.type) {
      case 'train':
        return (url = require('../../../../assets/images/train.png'));
      case 'tramway':
        return (url = require('../../../../assets/images/tramway.png'));
      case 'metro':
        return (url = require('../../../../assets/images/metro.png'));
      case 'bus':
        return (url = require('../../../../assets/images/autobus.png'));
      default:
        return;
    }
  };

  const getColor = (url: string | undefined) => {
    switch (route.params.type) {
      case 'train':
        return '#bc5090';
      case 'tramway':
        return '#0000ff';
      case 'metro':
        return '#9d02d7';
      case 'bus':
        return '#ff6361';
      default:
        return;
    }
  };

  useEffect(() => {
    setFieldValue('vehicle_type', route.params.type);
  }, [route.params.type]);

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
          marginTop: 40,
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
          <Text variant="titleCard" marginBottom="s" style={{ color: theme.colors.text }}>
            New <Text color="primary">{route.params.type}</Text> trip
          </Text>
          <Box style={[styles.imgContainer, { backgroundColor: getColor(url) }]}>
            <Image source={getImage(url)} style={styles.imgStyle} />
          </Box>

          <Box marginTop="xl" style={{ alignItems: 'center' }}>
            <Box style={{ alignItems: 'center' }}>
              <Text variant="body">What will be the distance of the trip ?</Text>
            </Box>
            <Box marginTop="s" marginBottom="m" style={{ width: wp(70) }}>
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

          <Box style={{ marginTop: hp(4) }}>
            <Checkbox
              label="Is it a round trip?"
              checked={values.round_trip}
              onChange={() => setFieldValue('round_trip', !values.round_trip)}
            />
          </Box>

          <Box alignItems="center" style={{ justifyContent: 'center', marginTop: hp(4) }}>
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
            <Box style={{ marginTop: hp(3) }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Box
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text variant="body" style={{ color: '#ff6361' }}>
                    Cancel
                  </Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  boxInfo: {
    width: wp('100%'),
    height: hp('82%'),
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
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: hp(10),
  },
});

export default NewCommonTrip;
