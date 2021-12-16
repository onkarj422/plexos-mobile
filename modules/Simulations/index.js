import React, {useCallback, useEffect, useMemo} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useSimulations} from './Queries';
import tailwind from 'tailwind-rn';
import globalStyles from '../../styles';
// import {groupBy} from 'lodash';
import {useStore} from '../../state';

const styles = StyleSheet.create({
    card: {
        elevation: 3,
        borderRadius: 4,
    },
});

export default function () {
    const simulationsQueryResult = useSimulations(
        '1c2e1eb1-796a-4479-809b-d999d8d92946',
    );
    const {selectedSimulation, setSelectedSimulation} = useStore();

    const simulations = useMemo(
        () => simulationsQueryResult.data || [],
        [simulationsQueryResult.data],
    );
    // const grouped = Object.values(
    //     groupBy(
    //         simulations,
    //         simulation => simulation.models && simulation.models[0],
    //     ),
    // );
    useEffect(() => {
        setSelectedSimulation(simulations[0]);
    }, [simulations, setSelectedSimulation]);

    const onClickSimulation = useCallback(
        simulation => {
            setSelectedSimulation(simulation);
        },
        [setSelectedSimulation],
    );
    return (
        <View>
            <View style={[tailwind('px-3 py-4'), globalStyles.bgAccent]}>
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
            </View>
        </View>
    );
}
