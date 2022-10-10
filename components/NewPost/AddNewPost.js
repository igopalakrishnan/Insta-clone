import React from 'react'
import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
    </View>
)

const Header = () => (
    <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image 
                source={{
                    uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png',
                }}
                style={{ width: 30, height: 30}}
                />
            </TouchableOpacity>
            <Text style={{ color: 'white'}}>Add</Text>
        </View>
)

export default AddNewPost

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
