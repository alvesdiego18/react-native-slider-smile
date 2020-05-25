import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Slider from './Slider'
import barra from './../assets/barra.png'
import smileFeliz from './../assets/smilefeliz.png'
import smileTriste from './../assets/smiletriste.png'

function SliderSmile({ value, onValueChange, showInText, top, showNumber = true }) {

    return (
        <>
            {
                top ?

                    // SMILES ACIMA DA BARRA
                    <View style={{ width: '100%' }}>

                        <View style={styles.viewTop}>
                            <View style={[styles.smileImage]}>
                                <Image source={smileTriste} style={styles.imageSizeSmile} />
                            </View>
                            <View>
                                {
                                    showInText ?
                                        <Text style={styles.textTop}>{showInText[value]}</Text>
                                        :
                                        <Text style={[styles.textTop, { fontWeight: 'bold' }]}>{value}</Text>
                                }
                            </View>
                            <View style={styles.smileImage}>
                                <Image source={smileFeliz} style={styles.imageSizeSmile} />
                            </View>
                        </View>

                        <View style={{ width: '100%', height: 30 }}>
                            <Image source={barra} style={styles.barra} />
                            <Slider
                                style={{ width: '100%', color: '#FFF' }}
                                minimumTrackTintColor='transparent'
                                maximumTrackTintColor='transparent'
                                minimumValue={1}
                                maximumValue={10}
                                value={value}
                                step={1}
                                thumbImage={showNumber}
                                thumbTintColor='#FFF'
                                onValueChange={onValueChange}
                            />
                        </View>

                    </View> :

                    // SMILES AOS LADOS
                    <View style={styles.viewLados}>
                        <View style={[styles.viewSmileLados, { marginRight: 6 }]}>
                            <Image source={smileTriste} style={{ width: 30, height: 30 }} />
                        </View>
                        <View style={styles.viewSlider}>
                            <Image source={barra} style={styles.barraLado} />
                            <Slider
                                style={{ width: '100%', color: '#FFF' }}
                                minimumTrackTintColor='transparent'
                                maximumTrackTintColor='transparent'
                                minimumValue={1}
                                maximumValue={10}
                                value={value}
                                step={1}
                                thumbTintColor='#FFF'
                                thumbImage={showNumber}
                                onValueChange={onValueChange}
                            />
                        </View>
                        <View style={[styles.viewSmileLados, { marginLeft: 6 }]}>
                            <Image source={smileFeliz} style={{ width: 30, height: 30 }} />
                        </View>
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    smileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -7
    },
    imageSizeSmile: {
        width: 30,
        height: 30
    },
    viewTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTop: {
        color: '#FFF',
        fontSize: 14,
        marginTop: 4
    },
    barra: {
        position: 'absolute',
        top: 18,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain'
    },
    viewLados: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewSmileLados: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
    },
    barraLado: {
        position: 'absolute',
        top: 18,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain'
    },
    viewSlider: {
        width: '100%',
        height: 30,
        flex: 1
    }

})

export default SliderSmile