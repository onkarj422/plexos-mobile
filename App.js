import {NativeBaseProvider, extendTheme} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Simulations from './modules/Simulations';
import Models from './modules/Models';
import Output from './modules/Output';
import Studies from './modules/Studies';

const queryClient = new QueryClient();

import('./reactotron').then(() => console.log('Reactotron Configured'));

const theme = extendTheme({
    colors: {
        primary: {
            50: '#edf7f7',
            100: '#cae7e8',
            200: '#a6d7d8',
            400: '#83c7c9',
            500: '#5fb7b9',
            600: '#469ea0',
            700: '#367b7c',
            800: '#275859',
            900: '#173535',
        },
    },
});

const App = () => {
    return (
        <NativeBaseProvider theme={theme}>
            <NativeRouter>
                <View>
                    <QueryClientProvider client={queryClient}>
                        <Routes>
                            <Route exact path="/" element={<Simulations />} />
                            <Route path="/models" element={<Models />} />
                            <Route path="/output" element={<Output />} />
                            <Route path="/studies" element={<Studies />} />
                        </Routes>
                    </QueryClientProvider>
                </View>
            </NativeRouter>
        </NativeBaseProvider>
    );
};

export default App;
