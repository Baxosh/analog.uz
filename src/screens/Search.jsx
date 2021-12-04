import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import { data } from "../components/data"
import search from "../../assets/Icons/SearchThin.png"

export default function Search() {
    return (<View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

            <TextInput
                style={styles.input}
                placeholder="Поиск лекарств"
                placeholderTextColor="#B9C9E4"
            />

            <Image style={styles.searchIcon} source={search}/>
        </View>
        <Text style={styles.title}>Результаты поиска</Text>
        <ScrollView style={styles.resultContainer} showsVerticalScrollIndicator={false}>
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
                </TouchableOpacity>))}
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingHorizontal: 30, paddingTop: 66,
    }, input: {
        width: '100%',
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
    }, searchIcon: {
        width: 20, height: 20, position: 'absolute', marginLeft: 20,
    }, title: {
        fontWeight: '400', fontSize: 18, color: '#484848', marginTop: '10%', marginBottom: '5%'
    }, resultContainer: {
        flexDirection: 'column',
    }, result: {
        width: '100%',
        height: 95,
        borderRadius: 25,
        borderWidth: 1.35,
        marginTop: 9,
        borderColor: '#B9C9E4',
        padding: 11,
        flexDirection: 'row',
    }, imageContainer: {
        width: '22%', height: '100%', borderRadius: 18, position: 'relative',
    }, image: {
        position: 'absolute', width: '100%', height: '100%',
    }
})
