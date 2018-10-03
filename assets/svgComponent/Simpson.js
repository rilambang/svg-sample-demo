import React from 'react'
import { View, Text } from 'react-native'

import simpson from '../svgImage/simpson.js'
import SvgImage from 'react-native-svg-uri';
// import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

// const svgContent = require('./assets/simpson').default
const Simpson = () => (
  <View style={{width:100, height:100}}>
    <SvgImage
      svgXmlData={simpson}
    />
  </View>
);

export default Simpson
