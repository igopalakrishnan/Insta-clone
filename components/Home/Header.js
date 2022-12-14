import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { firebase } from '../../firebase';

const handleSignout = async () => {
    try {
        await firebase.auth().signOut()
        console.log('Sign out Successfully!')
    } catch (error) {
        console.log(error)
    }
}

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSignout}>
                <Image style={styles.logo} source={require('../../assets/Header-logo.png')} />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
                        }}
                        style={styles.icons}
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
    },
    iconsContainer: {
        flexDirection: "row",
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    icons: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    unreadBadge: {
        backgroundColor: "#ff3250",
        position: "absolute",
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    }
})
