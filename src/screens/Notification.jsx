import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { QRCode } from "../components/common/Svgs";

export default function Notification() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.notificationText}>Уведомления</Text>

                <TouchableOpacity onPress={() => navigation.navigate('QrCodeCamera')} style={styles.QRcode}>
                    <QRCode/>
                </TouchableOpacity>
            </View>

            <View style={styles.HR}/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ ...styles.notificationBox, height: 166, marginTop: 20, }}>
                    <Text style={styles.notificationTitle}>Нодыр Собирович</Text>

                    <View style={styles.notificationDescription}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
                            sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                            dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                            ullamcorper eget nulla facilisi
                        </Text>
                    </View>
                </View>

                <View style={{ ...styles.notificationBox, height: 95, marginTop: 10 }}>
                    <Text style={styles.notificationTitle}>Нодыр Собирович</Text>

                    <View style={styles.notificationDescription}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. A amet, ac dictum varius.
                        </Text>
                    </View>
                </View>

                <View style={{ ...styles.notificationBox, height: 80, marginTop: 10 }}>
                    <Text style={styles.notificationTitle}>Нодыр Собирович</Text>

                    <View style={styles.notificationDescription}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur
                        </Text>
                    </View>
                </View>

                <View style={{ ...styles.notificationBox, height: 95, marginTop: 10 }}>
                    <Text style={styles.notificationTitle}>Нодыр Собирович</Text>

                    <View style={styles.notificationDescription}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. A amet, ac dictum varius.
                        </Text>
                    </View>
                </View>

                <View style={{ ...styles.notificationBox, height: 95, marginTop: 10 }}>
                    <Text style={styles.notificationTitle}>Нодыр Собирович</Text>

                    <View style={styles.notificationDescription}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. A amet, ac dictum varius.
                        </Text>
                    </View>
                </View>

                <View style={{ ...styles.notificationBox, height: 166, marginTop: 20, }}>
                    <Text style={styles.notificationTitle}>Нодыр Собирович</Text>

                    <View style={styles.notificationDescription}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
                            sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                            dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                            ullamcorper eget nulla facilisi
                        </Text>
                    </View>
                </View>

                <View style={{ ...styles.notificationBox, height: 95, marginTop: 10 }}>
                    <Text style={styles.notificationTitle}>Нодыр Собирович</Text>

                    <View style={styles.notificationDescription}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. A amet, ac dictum varius.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        marginLeft: 30
    },
    notificationText: {
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 26,
        color: '#3A72D4',
    },
    QRcode: {
        width: 67,
        height: 50,
        borderWidth: 1,
        borderColor: '#B9C9E4',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
    },
    HR: {
        borderWidth: 0.3,
        width: 315,
        borderColor: '#B9C9E4',
        marginTop: 13,
    },
    notificationBox: {
        width: 315,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#B9C9E4',
        paddingLeft: 23,
        paddingTop: 15
    },
    notificationTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#484848',
    },
    notificationDescription: {
        width: 271,
        height: 108,
        marginTop: 6
    }
})
