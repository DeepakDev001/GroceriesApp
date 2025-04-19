



import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {
    const nav = useNavigation()
    const username = 'Deepak';

    const handleCloseAlert = () => {
        Alert.alert('Closed', 'Alert has been closed.');
    };

    return (
        <SafeAreaView style={styles.container}>


            {/* Profile Welcome Section */}
            <View style={styles.card}>
                <Text style={styles.welcomeText}>Welcome Back, Mr. {username}</Text>
                <View style={styles.subHeader}>
                    <Text style={styles.subText}>Have a Good day at work</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={styles.editBtn}
                    >
                        <Text style={styles.editText}>✎</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.updateText}>
                    🔄 Updated Recently on 15 Jun 2024
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    alertBox: {
        flexDirection: 'row',
        backgroundColor: '#d4edda',
        borderColor: '#28a745',
        borderWidth: 1,
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    alertContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    alertText: {
        marginLeft: 10,
        fontSize: 14,
        flexShrink: 1,
    },
    bold: {
        fontWeight: 'bold',
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    closeBtn: {
        padding: 6,
    },
    closeText: {
        fontSize: 18,
        color: '#000',
    },
    card: {
        backgroundColor: '#343a40',
        padding: 20,
        borderRadius: 10,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    subText: {
        color: '#ccc',
        fontSize: 14,
    },
    editBtn: {
        padding: 6,
        backgroundColor: '#444',
        borderRadius: 20,
    },
    editText: {
        color: '#fff',
        fontSize: 16,
    },
    updateText: {
        color: '#ccc',
        fontSize: 12,
        marginTop: 15,
        fontStyle: 'italic',
    },
});

export default ProfileHeader;
