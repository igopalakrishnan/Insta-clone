import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native'
import BottomTabs, { bottomTabsIcons } from '../components/Home/BottomTabs'
import Header from '../components/Home/Header'
import Post from '../components/Home/Post'
import Stories from '../components/Home/Stories'
import { POSTS } from '../data/posts'
import { db } from '../firebase'

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        db.collectionGroup('posts').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabsIcons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})

export default HomeScreen
