import React from 'react';
import {Text, View} from 'react-native';
import {useSimulations} from './Queries';

export default function () {
    const simulations = useSimulations('1c2e1eb1-796a-4479-809b-d999d8d92946');
    return (
        <View>
            {simulations &&
                (simulations.data || []).map((simulation, index) => (
                    <Text key={index}>
                        {simulation.models && simulation.models[0]}
                    </Text>
                ))}
        </View>
    );
}
