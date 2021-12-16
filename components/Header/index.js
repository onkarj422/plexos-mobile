import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Link, useNavigate} from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});

export default function () {
    const navigation = useNavigate();
    return (
        <View style={styles.container}>
            <Text>Cloud Icon</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation('/datasets')}>
                <Link to="/datasets" underlayColor="#f0f4f7">
                    <Text> Datasets</Text>
                </Link>
            </TouchableOpacity>
        </View>
    );
}
