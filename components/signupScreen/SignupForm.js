import React from 'react'
import { Pressable, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Validator from 'email-validator';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { firebase, db } from '../../firebase';

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string()
            .required()
            .min(5, 'Your password has to have t least 5 characters')
    })

     const getRandomProfilePicture = async () => {
         const response = await fetch('https://randomuser.me/api')
         const data = await response.json()
         return data.results[0].picture.large
     }

    const onSignup = async (email, password, username) => {
        try {
            const authUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
            console.log('Firebase User Created Successfully', email, password)

             db.collection('users')
             .doc(authUser.user.email)
             .set({
                 owner_uid: authUser.user.uid,
                 username: username,
                 email: authUser.user.email,
                 profile_picture: await getRandomProfilePicture(),
             })
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={values => {
                    onSignup(values.email, values.password, values.username)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}>
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[
                            styles.inputField,
                            {
                                borderColor:
                                    values.email.length < 1 || Validator.validate(values.email)
                                        ? '#CCC'
                                        : 'red'
                            },
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Phone number, username or email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>

                        <View style={[
                            styles.inputField,
                            {
                                borderColor:
                                    1 > values.username.length || values.username.length > 2
                                        ? '#CCC'
                                        : 'red',
                            },
                        ]} >
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                keyboardType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>

                        <View style={[
                            styles.inputField,
                            {
                                borderColor:
                                    1 > values.password.length || values.password.length >= 5
                                        ? '#CCC'
                                        : 'red',
                            },
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.bottomText}>Sign Up</Text>
                        </Pressable>

                        <View style={styles.loginContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#6BB8F5' }}> Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default SignupForm

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginTop: 50,
    }),
    bottomText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    loginContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})
