import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {
    Profile,
    Share,
    Bookmark,
    Discovery,
    Language,
    Lock,
    Info
} from "../components/common/Svgs"


export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>
                    Меню
                </Text>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Profile/>

                    <Text style={styles.itemText}>
                        Войти
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Discovery/>

                    <Text style={styles.itemText}>
                        Ваш регион
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Bookmark/>
                    <Text style={styles.itemText}>
                        Избранное
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Info/>

                    <Text style={styles.itemText}>
                        Об Analog.uz
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Share/>

                    <Text style={styles.itemText}>
                        Рассказать друзьям
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Lock/>

                    <Text style={styles.itemText}>
                        Подключенные устройства
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.menuItem, {
                    borderBottomColor: '#B9C9E4'
                }]}>
                    <Language/>

                    <Text style={styles.itemText}>
                        Язык
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 30,
    },
    heading: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 40,
    },
    headingText: {
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 26,
        color: '#3A72D4',
    },
    menu: {
        marginVertical: 20,
        width: '100%',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderLeftColor: '#00000000',
        borderRightColor: '#00000000',
        borderBottomColor: '#00000000',
        borderTopColor: '#B9C9E4',
        borderWidth: .5,
        paddingVertical: 15,
    },
    itemText: {
        marginLeft: 15,
        color: '#484848',
    },
    menuIcon: {
        width: 24,
        height: 24,
    },
})
