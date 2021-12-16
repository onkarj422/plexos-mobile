import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {useSimulations} from './Queries';
import tailwind from 'tailwind-rn';
import globalStyles from '../../styles';
import {groupBy} from 'lodash';
import SimulationsGroupCard from './SimulationsGroupCard';
import {Flex} from 'native-base';

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
    return (
        <View>
            <Flex direction="row" style={[tailwind('px-3 py-4 bg-white')]}>
                <View>
                    <Text>PLEXOS Cloud</Text>
                </View>
                <View style={[tailwind('ml-2'), globalStyles.textAccent]}>
                    <Text style={globalStyles.textAccent}>Chile Data set</Text>
                </View>
            </Flex>
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
