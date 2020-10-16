import React from 'react';
import {
    View, Text, Image, StyleSheet, Platform, FlatList
} from 'react-native';
import Constants from 'expo-constants';
import data from './skillData.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function Item({ isi }) {
    return (
        <View style={styles.itemlistView}>
            <View style={styles.item1View}>
                <Icon name={isi.iconName} size={70} color="#003366" style={styles.icon} />
            </View>
            <View style={styles.item2View}>
                <Text style={styles.itemSkillText}>{isi.skillName}</Text>
                <Text style={styles.itemCatText}>{isi.categoryName}</Text>
                <Text style={styles.itemPersenText}>{isi.percentageProgress}</Text>
            </View>
            <View style={styles.item3View}>
                <IonIcon name="ios-arrow-forward" size={70} color="#003366" style={styles.icon} />
            </View>
        </View>
    );
}

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('../Tugas13/assets/logo.png')} />
            </View>
            <View style={styles.userView}>
                <View style={styles.iconUserView}>
                    <FontAwesome5 name={'user-circle'} size={26} solid color="#3EC6FF"  />
                </View>
                <View style={styles.userDetView}>
                    <Text style={styles.userhaiText}>Hai, </Text>
                    <Text style={styles.usernameText}>Achmad Hilmy</Text>
                </View>
            </View>
            <Text style={styles.judul}>SKILL</Text>
            <View style={styles.catagoriView}>
                <View style={styles.catDetView}>
                    <Text style={styles.catText}>Library / Framework</Text>
                </View>
                <View style={styles.catDetView}>
                    <Text style={styles.catText}>Bahasa Pemrograman</Text>
                </View>
                <View style={styles.catDetView}>
                    <Text style={styles.catText}>Teknologi</Text>
                </View>
            </View>

            <FlatList
                data={data.items}
                renderItem={({ item }) => <Item isi={item} />}
                keyExtractor={ (item, index) => item.id.toString()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight,
        flex: 1,
        paddingHorizontal :15,
    },
    logoView: {
        flexDirection: 'row-reverse',
    },
    logo: {
        width: 189,
        height: 50
    },
    userView: {
        flexDirection: 'row',
    },
    iconUserView: {
        justifyContent: "center",
        alignItems: "center"
    },
    userDetView: {
        marginHorizontal: 10
    },
    userhaiText: {
        fontSize: 12,
    },
    usernameText: {
        fontSize: 16,
        color: '#003366',
    },
    judul: {
        fontSize: 36,
        marginTop: 16,
        color: '#003366',
        textAlign: "center",
    },
    catagoriView: {
        borderTopWidth: 4,
        borderTopColor: '#3EC6FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    catDetView: {
        backgroundColor: "#B4E9FF",
        marginVertical: 10,
        padding: 7,
        borderRadius: 10,
    },
    catText: {
        fontSize: 12,
        fontWeight: "bold",
        color: '#003366',
        textAlign: "center",
    },
    itemlistView: {
        backgroundColor: "#B4E9FF",
        marginVertical: 4,
        flexDirection: 'row',
        alignContent: 'stretch',
        padding: 10,
        borderRadius: 10,
        ...Platform.select({
            ios: {
                borderBottomWidth: 4,
                borderBottomColor: '#EFEFEF',
            },
            android: {
                elevation: 6,
            },
            default: {
                borderBottomWidth: 4,
                borderBottomColor: '#EFEFEF',
            }
          })
        
    },
    item1View: {
        flex: 1,
        justifyContent: "center"
    },
    item2View: {
        flex: 3,
    },
    item3View: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    itemSkillText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#003366",

    },
    itemCatText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3EC6FF",
    },
    itemPersenText: {
        fontSize: 48,
        fontWeight: "bold",
        color: "white",
        textAlign: "right"
    }

});