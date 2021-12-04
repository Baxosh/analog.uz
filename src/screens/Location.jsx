import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Image } from 'react-native'
import MapView from 'react-native-maps'
import search from "../../assets/Icons/SearchThin.png";

export default function () {
    const [mapRegion] = useState({
        latitude: 39.77472,
        longitude: 64.42861,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    return (
        <View style={styles.container}>
            <MapView
                style={{ alignSelf: 'stretch', height: '100%' }}
                region={mapRegion}
            />

            <View style={{
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 60,
                marginLeft: 8,
            }}>
                <TextInput
                    style={styles.input}
                    placeholder="Поиск ближайшей аптеки"
                    placeholderTextColor="#B9C9E4"
                />
                <Image source={search} style={styles.searchIcon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        width: '98%',
        height: 50,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#fff',
        paddingLeft: 55,
        fontWeight: '400',
        fontSize: 16,
        marginRight: 5,
        borderColor: '#B9C9E4',
        borderWidth: 1,
        color: 'black',
        justifyContent: 'center'
    },
    searchIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        marginLeft: 20,
    },
})
