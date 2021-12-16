import React, {useEffect, useMemo} from 'react';
import {Text, View} from 'react-native';
import {useSimulations} from './Queries';
import tailwind from 'tailwind-rn';
import globalStyles from '../../styles';
import {groupBy} from 'lodash';
import SimulationsGroupCard from './SimulationsGroupCard';

export default function () {
    const simulationsQueryResult = useSimulations(
        '1c2e1eb1-796a-4479-809b-d999d8d92946',
    );

    const simulations = useMemo(
        () => simulationsQueryResult.data || [],
        [simulationsQueryResult.data],
    );
    const grouped = Object.values(
        groupBy(
            simulations,
            simulation => simulation.models && simulation.models[0],
        ),
    );
    // useEffect(() => {
    //     setSelectedSimulation(simulations[0]);
    // }, [simulations, setSelectedSimulation]);

    // const onClickSimulation = useCallback(
    //     simulation => {
    //         setSelectedSimulation(simulation);
    //     },
    //     [setSelectedSimulation],
    // );
    return (
        <View>
            <View style={[tailwind('px-3 py-4'), globalStyles.bgAccent]}>
                <Text>Plexos Mobile</Text>
            </View>
            <View style={tailwind('p-3')}>
                {grouped &&
                    grouped.map((_simulations, index) => (
                        <SimulationsGroupCard
                            simulations={_simulations}
                            key={index}
                        />
                    ))}
            </View>
        </View>
    );
}
