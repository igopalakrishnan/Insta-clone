import React, { useState } from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';


export const bottomTabsIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png'
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/50/ffffff/shopping-bag-full.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/500/ffffff/shopping-bag-full.png'
    },
    {
        name: 'Profile',
        active: 'https://vignette.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/4/49/Arya_Stark.png/revision/latest?cb=20190419183707&path-prefix=fr',
        inactive: 'https://vignette.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/4/49/Arya_Stark.png/revision/latest?cb=20190419183707&path-prefix=fr'
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image
                source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
                style={[
                    styles.icon,
                    icon.name === 'Profile' ? styles.profilePic() : null,
                    activeTab === 'Profile' && icon.name === activeTab ?
                        styles.profilePic(activeTab)
                        : null,
                ]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <Divider style={{ backgroundColor: "gray" }} width={1} orientation="vertical" />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: Platform.OS === 'ios' ? '3%' : 0,
        zIndex: 999,
        backgroundColor: '#000',
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 1.5 : 0,
        borderColor: '#ff8501',
    }),
})
