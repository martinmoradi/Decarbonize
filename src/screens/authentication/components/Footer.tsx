import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Text } from '../../../components';
import SocialLogin from './SocialLogin';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <BorderlessButton {...{ onPress }}>
          <Text variant="button" color="background">
            <Text>{`${title} `}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;
