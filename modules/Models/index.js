import React from 'react';
import {View} from 'react-native';

export default function () {
    return (
        <View>
            {/* <View style={[tailwind('px-3 py-4'), globalStyles.bgAccent]}>
                <Text>Plexos Mobile</Text>
            </View>
            <Text>{selectedSimulation && selectedSimulation.id}</Text>
            <View style={tailwind('p-3')}>
                {simulations &&
                    simulations.map((simulation, index) => (
                        <TouchableWithoutFeedback
                            onPress={() => onClickSimulation(simulation)}>
                            <View
                                style={[
                                    tailwind('bg-white mb-3 p-2'),
                                    styles.card,
                                    selectedSimulation.id === simulation.id
                                        ? globalStyles.bgAccent
                                        : '',
                                ]}>
                                <Text key={index}>
                                    {simulation.models && simulation.models[0]}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
            </View> */}
        </View>
    );
}
