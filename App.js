import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {useColorScheme, View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Simulations from './modules/Simulations';
import Models from './modules/Models';
import Datasets from './modules/Datasets';
import Home from './modules/Home';

const queryClient = new QueryClient();

import('./reactotron').then(() => console.log('Reactotron Configured'));

const App = () => {
    return (
        <NativeBaseProvider>
            <NativeRouter>
                <View>
                    <QueryClientProvider client={queryClient}>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route
                                path="/simulations"
                                element={<Simulations />}
                            />
                            <Route path="/models" element={<Models />} />
                            <Route path="/datasets" element={<Datasets />} />
                        </Routes>
                    </QueryClientProvider>
                </View>
            </NativeRouter>
        </NativeBaseProvider>
    );
};

export default App;
