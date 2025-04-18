// import React from 'react'
// import { SafeAreaView, View } from 'react-native'
// import ProfileHeader from './ProfileHeader'

// const Home = () => {
//     return (
//         <SafeAreaView style={{
//             flex: 1,
//             backgroundColor: "white"
//         }}>
//             <View style={{
//                 paddingTop: 50,
//                 paddingHorizontal: 20,
//                 gap: 20
//             }}>
//                 <ProfileHeader />

//             </View>

//         </SafeAreaView>
//     )
// }

// export default Home


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';


// const HomeEduAdmin = ({ navigation }) => {
//     return (
//         <SafeAreaView style={{
//             flex: 1,
//             backgroundColor: "white",
//             marginVertical: 40
//         }}>
//             {/*============ Custom Top Nav Bar ============*/}
//             <View style={styles.header}>
//                 <Text style={styles.title}>🏫 eduAdminHub</Text>
//                 <TouchableOpacity onPress={() => navigation.openDrawer?.()}>
//                     <Text style={styles.menuIcon}>☰</Text>
//                 </TouchableOpacity>
//             </View>

//             {/*============ Rest of your screen ============*/}
//             <View style={{ padding: 16 }}>

//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         height: 60,
//         backgroundColor: '#343a40',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 16,
//     },
//     title: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     menuIcon: {
//         fontSize: 22,
//         color: '#fff',
//     },
// });

// export default HomeEduAdmin;













import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Image, ScrollView } from 'react-native';

const suggestedApps = [
    { id: '1', title: 'Dream11: Fantasy Cricket App', rating: 4.3, size: '30 MB' },
    { id: '2', title: 'My11Circle Fantasy App', rating: 4.2, size: '35 MB' },
    { id: '3', title: 'Zupee: Ludo Games Online', rating: 3.9, size: '25 MB' },
];

const HomeEduAdmin = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Header */}
            <View style={styles.header}>
                <Text style={styles.title}>🏫 eduAdminHub</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer?.()}>
                    <Text style={styles.menuIcon}>☰</Text>
                </TouchableOpacity>
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                {['For you', 'Top charts', 'Kids', 'Premium', 'Categories'].map(tab => (
                    <Text key={tab} style={styles.tabText}>{tab}</Text>
                ))}
            </View>

            <ScrollView>
                {/* Banner */}
                <View style={styles.bannerCard}>
                    <Image
                        source={{ uri: 'https://play-lh.googleusercontent.com/IEvZTPlkJShcYQ6...' }} // Replace with your banner URL or local asset
                        style={styles.bannerImage}
                    />
                    <Text style={styles.bannerText}>Test your wits and win rewards in Puzzle Break</Text>
                    <TouchableOpacity style={styles.installBtn}>
                        <Text style={styles.installText}>Install</Text>
                    </TouchableOpacity>
                </View>

                {/* Suggested for You */}
                <Text style={styles.sectionTitle}>Suggested for you</Text>
                {suggestedApps.map(app => (
                    <View key={app.id} style={styles.appCard}>
                        <View>
                            <Text style={styles.appTitle}>{app.title}</Text>
                            <Text style={styles.appInfo}>⭐ {app.rating} • {app.size}</Text>
                        </View>
                        <TouchableOpacity style={styles.smallInstallBtn}>
                            <Text style={styles.installText}>Install</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Bottom Nav */}
            <View style={styles.bottomNav}>
                {['Games', 'Apps', 'Search', 'Offers', 'Books'].map(item => (
                    <Text key={item} style={styles.navItem}>{item}</Text>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    header: {
        height: 60,
        backgroundColor: '#444', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#555', 
    },
    title: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    menuIcon: { fontSize: 22, color: '#fff' },

    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#111',
        paddingVertical: 10,
    },
    tabText: { color: '#fff', fontSize: 14 },

    bannerCard: {
        margin: 16,
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    bannerImage: {
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    bannerText: {
        color: '#fff',
        marginVertical: 10,
        fontSize: 14,
        textAlign: 'center',
    },
    installBtn: {
        backgroundColor: '#1db954',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    installText: { color: '#fff', fontWeight: 'bold' },

    sectionTitle: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 16,
        marginTop: 10,
    },
    appCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1e1e1e',
        marginHorizontal: 16,
        padding: 10,
        borderRadius: 10,
        marginTop: 8,
        alignItems: 'center',
    },
    appTitle: { color: '#fff', fontSize: 14 },
    appInfo: { color: '#ccc', fontSize: 12 },
    smallInstallBtn: {
        backgroundColor: '#1db954',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 20,
    },

    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#121212',
        paddingVertical: 12,
    },
    navItem: { color: '#aaa', fontSize: 12 },
});

export default HomeEduAdmin;

