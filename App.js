import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
    Text,
} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NativeRouter, Link} from 'react-router-native';
import {AppRoutes} from './routes';

const queryClient = new QueryClient();

import('./reactotron').then(() => console.log('Reactotron Configured'));

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <NativeRouter>
            <View>
                <QueryClientProvider client={queryClient}>
                    <SafeAreaView>
                        <StatusBar
                            barStyle={
                                isDarkMode ? 'light-content' : 'dark-content'
                            }
                        />
                        <ScrollView contentInsetAdjustmentBehavior="automatic">
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
                    <AppRoutes />
                </QueryClientProvider>
            </View>
        </NativeRouter>
    );
};

export default App;
