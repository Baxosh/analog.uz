import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, TextInput } from 'react-native'
import QRCode from "../../assets/Icons/QRCode.png"
import { useNavigation } from "@react-navigation/native"
import search from '../../assets/Icons/SearchThin.png'
import { data } from '../components/data'

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>
                    Добро пожаловать!
                </Text>
            </View>

            <View style={styles.searchBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Поиск лекарств"
                    placeholderTextColor="#B9C9E4"
                />

                <Image source={search} style={styles.searchIcon}/>
                <TouchableOpacity onPress={() => navigation.navigate('QrCodeCamera')}>
                    <Image source={QRCode}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Частые запросы</Text>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.resultContainer}>
                {data.map((item) => (
                    <TouchableOpacity key={item.id}>
                        <View style={styles.result}>
                            <View style={styles.imageContainer}>
                                <Image source={item.image} style={styles.image}/>
                            </View>
                            <View style={{ marginLeft: 11 }}>
                                <Text style={{ fontSize: 16, color: '#3A72D4' }}>{item.name}</Text>
                                <Text style={{ fontSize: 14, color: '#B9C9E4' }}>{item.firm}</Text>
                                <Text style={{ fontSize: 14, color: 'black' }}>от {item.sum} сум</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        margin: 30,
    },
    welcome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30,
        marginLeft: 0,
    },
    welcomeText: {
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 26,
        color: '#3A72D4',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    input: {
        width: '70%',
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
        color: 'black'
    },
    searchIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        marginLeft: 20,
    },
    title: {
        fontWeight: '400',
        fontSize: 18,
        color: '#484848',
        marginTop: '10%',
        marginBottom: '5%'
    },
    resultContainer: {
        flexDirection: 'column',
    },
    result: {
        width: '100%',
        height: 95,
        borderRadius: 25,
        borderWidth: 1.35,
        marginTop: 9,
        borderColor: '#B9C9E4',
        padding: 11,
        flexDirection: 'row',
    },
    imageContainer: {
        width: '22%',
        height: '100%',
        borderRadius: 18,
        position: 'relative',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
})
