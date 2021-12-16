import React, {useCallback, useState} from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';
import reactotron from 'reactotron-react-native';
import {authorize} from './services/Spotify/Authentication';
import {AUTH_CONFIG} from './services/Spotify/Constants';
import {getTracks} from './services/Spotify/WebAPI';
import {remote} from 'react-native-spotify-remote';
import {getTokenFromStorage} from './services/Spotify/Utils';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

import('./reactotron').then(() => console.log('Reactotron Configured'));

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [tracks, setTracks] = useState([]);
    remote.on('playerStateChanged', (...args) => {
        console.log('statechanged', args);
    });
    remote.on('playerContextChanged', (...args) => {
        console.log('contextchanged', args);
    });
    remote.on('remoteConnected', (...args) => {
        console.log('remoteconnected', args);
    });
    const handleAuthentication = useCallback(() => {
        authorize(AUTH_CONFIG)
            .then(authorization => {
                reactotron.log(authorization);
            })
            .catch(err => {
                reactotron.log(err);
            });
    }, []);

    const handleFetchTracks = useCallback(async () => {
        getTracks().then(response => {
            setTracks(response.data.items);
        });
    }, []);

    const handleConnect = useCallback(async () => {
        const token = await getTokenFromStorage();
        remote
            .connectWithoutAuth(
                token.access_token,
                AUTH_CONFIG.clientId,
                AUTH_CONFIG.redirectUrl,
            )
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            });
    }, []);
    const handlePlay = useCallback(async () => {
        remote.playUri(tracks[0].track.uri);
    }, [tracks]);
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View>
                        <Button
                            title="Authenticate"
                            onPress={handleAuthentication}
                        />
                        <Button
                            title="Get Tracks"
                            onPress={handleFetchTracks}
                        />
                        <Button
                            title="Connect to remote"
                            onPress={handleConnect}
                        />
                        <Button title="Play" onPress={handlePlay} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </QueryClientProvider>
    );
};

export default App;
