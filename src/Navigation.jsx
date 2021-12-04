import React, { useContext } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Notification from './screens/Notification'
import Search from './screens/Search'
import { GlobalContext } from './contexts/GlobalContext'
import Entry1 from "./screens/Entry1"
import Entry3 from "./screens/Entry3"
import Entry2 from "./screens/Entry2"
import Menu from "./screens/Menu"
import Location from './screens/Location'
import QrCodeCamera from "./screens/QrCodeCamera"
import home from '../assets/Icons/Home.png'
import homeBold from '../assets/Icons/HomeBold.png'
import searchBar from '../assets/Icons/Search.png'
import searchBold from '../assets/Icons/SearchBold.png'
import notification from '../assets/Icons/Message.png'
import notificationBold from '../assets/Icons/MessageBold.png'
import location from '../assets/Icons/Location.png'
import locationBold from '../assets/Icons/LocationBold.png'
import menu from '../assets/Icons/Menu.png'
import menuBold from '../assets/Icons/MenuBold.png'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigation() {
    const { user } = useContext(GlobalContext)

    return (
        <NavigationContainer theme={{
            colors: {
                background: '#fff',
                card: '#fff',
            },
        }}>
            <Stack.Navigator screenOptions={{
                headerStatusBarHeight: 28,
                headerStyle: styles.header,
            }}>
                {!user ? (
                    <>
                        <Stack.Screen name="Entry1" component={Entry1} options={{ headerShown: false }}/>
                        <Stack.Screen name="Entry2" component={Entry2} options={{ headerShown: false }}/>
                        <Stack.Screen name="Entry3" component={Entry3} options={{ headerShown: false }}/>
                    </>
                ) : null}
                <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Search" component={Search} options={{ title: 'Поиск' }}/>
                <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
                <Stack.Screen name="QrCodeCamera" component={QrCodeCamera} options={{ headerShown: false }}/>
                <Stack.Screen name="Location" component={Location} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabScreen() {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: styles.tabHeader,
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.img} source={focused ? homeBold : home}/>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Search" component={Search} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.img} source={focused ? searchBold : searchBar}/>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Notification" component={Notification} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.img} source={focused ? notificationBold : notification}/>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Location" component={Location} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.img} source={focused ? locationBold : location}/>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Menu" component={Menu} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.img} source={focused ? menuBold : menu}/>
                    </View>
                ),
            }}/>

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabHeader: {
        height: '9%',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        alignSelf: 'center',
        borderColor: '#E5E5E5',
    },
    stackHeader: {
        backgroundColor: '#f2f2f2',
        elevation: 0,
        shadowOpacity: 0,
    },
    text: {
        fontSize: 10,
        top: 3,
        fontWeight: 'bold',
    },
    header: {
        shadowOpacity: 3,
        elevation: 3,
        shadowRadius: 3,
        shadowColor: 'grey',
        backgroundColor: 'white',
        height: 80,
    },
    img: {
        width: 30,
        height: 30,
    }
})
