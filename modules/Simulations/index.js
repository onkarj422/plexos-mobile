import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSimulations} from './Queries';
import tailwind from 'tailwind-rn';
import globalStyles from '../../styles';
import {groupBy} from 'lodash';
import SimulationsGroupCard from './SimulationsGroupCard';
import {Flex, Spacer, Text} from 'native-base';
import PlexosCloudLogo from '../../icons/PlexosCloudLogo';

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
            <Flex
                direction="row"
                alignItems="center"
                style={[tailwind('px-3 py-4 bg-white')]}>
                <PlexosCloudLogo width={80} height={48} />
                <Spacer />
                <View
                    style={[
                        tailwind('px-1'),
                        globalStyles.borderLight,
                        globalStyles.textAccent,
                    ]}>
                    <Text fontSize="xl" style={globalStyles.textAccent}>
                        Chile Data set
                    </Text>
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
