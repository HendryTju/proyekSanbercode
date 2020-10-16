import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function App() {
    return (
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.judul}>Tentang Saya</Text>
                <FontAwesome5 name={'user-circle'}
                    size={200} solid
                    color="#EFEFEF"
                    style={styles.icon}
                />
                <Text style={styles.nama}>Achmad Hilmy</Text>
                <Text style={styles.kerjaan}>Tukang Sapu</Text>
                <View style={styles.kotak} >
                    <Text style={styles.juduldalem}>Portofolio</Text>
                    <View style={styles.kotakdalem} >
                        <View>
                            <FontAwesome5 name="gitlab" size={40} color="#3EC6FF" style={styles.icon} />
                            <Text style={styles.textdalem}>@opisboy</Text>
                        </View>
                        <View >
                            <FontAwesome5 name="github" size={40} color="#3EC6FF" style={styles.icon} />
                            <Text style={styles.textdalem}>@opisboy</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.kotak} >
                    <Text style={styles.juduldalem}>Hubungi Saya</Text>
                    <View style={styles.kotakdalemver} >
                        <View style={styles.kotakdalemverhub}>
                            <View >
                                <FontAwesome5 name="facebook" size={40} color="#3EC6FF" style={styles.icon} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 10}}>
                                <Text style={styles.textdalem}>@opisboy</Text>
                            </View>
                        </View>
                        <View style={styles.kotakdalemverhub}>
                            <View >
                                <FontAwesome5 name="instagram" size={40} color="#3EC6FF" style={styles.icon} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 10}} >
                                <Text style={styles.textdalem}>@opisboy</Text>
                            </View>
                        </View>
                        <View style={styles.kotakdalemverhub}>
                            <View>
                                <FontAwesome5 name="twitter" size={40} color="#3EC6FF" style={styles.icon} />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 10}}>
                                <Text style={styles.textdalem}>@opisboy</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 64,

    },
    judul: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#003366",
        textAlign: "center"
    },
    icon: {
        textAlign: "center"
    },
    nama: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#003366",
        textAlign: "center"
    },
    kerjaan: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3EC6FF",
        textAlign: "center",
        marginBottom : 7
    },
    kotak: {
        borderRadius: 10,
        borderColor: 'blue',
        borderBottomColor: '#000',
        padding: 5,
        backgroundColor: '#EFEFEF',
        marginBottom : 9
    },
    kotakdalem: {
        borderTopWidth: 2,
        borderTopColor: '#003366',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    kotakdalemver: {
        borderTopWidth: 2,
        borderTopColor: '#003366',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    kotakdalemverhub: {
        height: 50,
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom:2

    },
    juduldalem: {
        fontSize: 18,
        color: "#003366",
    },
    textdalem: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#003366",
        textAlign: "center"
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },


});