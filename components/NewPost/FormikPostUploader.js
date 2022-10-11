import { Formik } from 'formik';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import * as Yup from 'yup';
import validUrl from 'valid-url';

const PLACEHOLDER_IMG = 'https://img.icons8.com/fluency-systems-filled/500/ffffff/user.png'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character')
})

const FormikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => {
                console.log(values)
                console.log('Your post was submitted successfully')
                navigation.goBack()
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
                <>
                    <View style={{
                        margin: 20,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Image source={{
                            uri: validUrl.isUri(thumbnailUrl)  ? thumbnailUrl : PLACEHOLDER_IMG
                        }}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                            }}
                        />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder='Write a Caption'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={1} style={{ backgroundColor: 'white' }} orientation='vertical' />
                    <TextInput
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            }
        </Formik>
    )
}

export default FormikPostUploader

const styles = StyleSheet.create({})