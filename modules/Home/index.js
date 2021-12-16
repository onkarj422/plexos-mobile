import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
    Text,
} from 'react-native';
import {Link} from 'react-router-native';
import AppHeader from '../../components/Header';

export default function () {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <AppHeader />
                <View>
                    <Link to="/simulations" underlayColor="#f0f4f7">
                        <Text> Simulations</Text>
                    </Link>
                    <Link to="/models" underlayColor="#f0f4f7">
                        <Text> Models</Text>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
