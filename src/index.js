import React from 'react';
import 'react-native-gesture-handler';

import AppStack from './routes/AppStack';

import {GlobalStorage} from './GlobalContext';

const index = () => {
  return (
    <GlobalStorage>
      <AppStack />
    </GlobalStorage>
  );
};

export default index;
