import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Simulations from './modules/Simulations';

const queryClient = new QueryClient();

import('./reactotron').then(() => console.log('Reactotron Configured'));

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <NativeBaseProvider>
            <QueryClientProvider client={queryClient}>
                <SafeAreaView>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    />
                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                        <View>
                            <Simulations />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </QueryClientProvider>
        </NativeBaseProvider>
    );
};

export default App;
