import React, { useRef, useState } from 'react';
import { myColors } from '../Utils/MyColors';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { base_url } from '../Utils/enverioment';

const OtpScreen = () => {
    const nav = useNavigation()
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (text, index) => {
        if (/^[0-9]$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);

            // Move to next input
            if (index < 5) {
                inputRefs.current[index + 1].focus();
            }
        } else if (text === '') {
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };




    //========= handle very_otp
    const handleSubmitOtp = async () => {
        const fullOtp = otp.join('');
        if (fullOtp.length === 6) {
            try {
                // API call to verify OTP using fetch
                const response = await fetch(`${base_url}/api/loginUser/verifyOtp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        otp: fullOtp,
                    }),
                });

                const data = await response.json();


                if (response.ok && data.success) {
                    Alert.alert(
                        data.message || 'OTP Verified',
                        'You will now be redirected.',
                        [
                            {
                                text: 'OK',
                                onPress: () => nav.navigate('Home'),
                            },
                        ],
                        { cancelable: false }
                    );
                } else {
                    Alert.alert('Error', data.message || 'Failed to verify OTP.');
                }
            } catch (error) {
                console.error('Error during OTP verification:', error);
                Alert.alert(data.error || 'Error', 'An error occurred while verifying OTP.');
            }
        } else {
            Alert.alert('Error', 'Please enter a 6-digit OTP');
        }
    };



    //============ main return function ============//
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secoundary }}>
            <StatusBar style="white" />
            <ScrollView style={{ flex: 1, paddingTop: 50 }}>
                <Image style={style.imgIcon} source={require('../../assets/mainIcon.png')} />
                <View style={{ paddingHorizontal: 20, marginTop: 200 }}>
                    <Text style={style.signupText}>OTP Verification</Text>
                    <Text style={style.credentialsText}>Enter the 6-digit OTP sent to your email</Text>

                    <View style={style.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={ref => inputRefs.current[index] = ref}
                                value={digit}
                                onChangeText={text => handleChange(text, index)}
                                onKeyPress={e => handleKeyPress(e, index)}
                                keyboardType="number-pad"
                                maxLength={1}
                                style={style.otpInput}
                            />
                        ))}
                    </View>

                    <TouchableOpacity style={style.submitBtn} onPress={handleSubmitOtp}>
                        <Text style={style.submitText}>Verify OTP</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    imgIcon: {
        height: 75,
        width: 65,
        alignSelf: 'center',
    },
    signupText: {
        color: myColors.third,
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },
    credentialsText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'grey',
        marginTop: 10,
        textAlign: 'center'
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 10
    },
    otpInput: {
        width: 45,
        height: 55,
        borderWidth: 2,
        borderColor: '#E3E3E3',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#fff'
    },
    submitBtn: {
        backgroundColor: myColors.primary,
        marginTop: 30,
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitText: {
        fontSize: 18,
        color: myColors.secoundary,
        fontWeight: '600'
    }
});

export default OtpScreen;
