import React, { useEffect } from 'react'
import { View, Image, Animated } from 'react-native'
import Slider from '@react-native-community/slider';

import barra from './assets/barra.png'
import smileFeliz from './assets/smilefeliz.png'
import smileTriste from './assets/smiletriste.png'

function SliderSmile({ value, minimumValue, maximumValue }) {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: 30, height: 30, backgroundColor: '#2a1852', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginRight: 8 }}>
                <Image source={smileTriste} style={{ width: 30, height: 30 }} />
            </View>

            <View style={{ width: '100%', height: 30, flex: 1 }}>

                <Image source={barra} style={{ position: 'absolute', top: 16, width: '100%' }} />
                <Slider
                    minimumValue={minimumValue ? minimumValue : 1}
                    maximumValue={maximumValue ? maximumValue : 10}
                    value={value ? value : 5}
                    minimumTrackTintColor='transparent'
                    maximumTrackTintColor='transparent'
                />
            </View>
            <View style={{ width: 30, height: 30, backgroundColor: '#2a1852', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginLeft: 8 }}>
                <Image source={smileFeliz} style={{ width: 30, height: 30 }} />
            </View>
        </View>
    )
}

export default SliderSmile