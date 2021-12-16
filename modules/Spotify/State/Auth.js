import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';

export const useToken = create(set => ({
    token: null,
    setToken: async token => {
        await AsyncStorage.setItem('token', JSON.stringify(token));
    },
}));
