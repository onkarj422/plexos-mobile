import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, FlatList, Flex, ScrollView, Divider, Spacer} from 'native-base';
import tailwind from 'tailwind-rn';
import moment from 'moment';
import {SOLUTION_STATUS_CONFIGS} from './Constants';
import {useNavigate} from 'react-router-native';

const styles = StyleSheet.create({
    card: {
        elevation: 3,
        borderRadius: 4,
        borderColor: '#4aa7a9',
        borderWidth: 1,
    },
});

export default function ({simulations}) {
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();
    const [selectedSimulation, setSelectedSimulation] = useState(null);
    const displayedSimulation = useMemo(
        () =>
            simulations.find(
                simulation => simulation.id === selectedSimulation?.id,
            ) || simulations[0],
        [simulations, selectedSimulation],
    );
    const hiddenSimulations = useMemo(
        () =>
            simulations.filter(
                simulation => simulation.id !== displayedSimulation.id,
            ),
        [displayedSimulation, simulations],
    );
    const StatusIcon = useMemo(
        () =>
            SOLUTION_STATUS_CONFIGS[
                displayedSimulation && displayedSimulation.status.toLowerCase()
            ].icon,
        [displayedSimulation],
    );
    const configuration = useMemo(() => {
        const cores =
            displayedSimulation && displayedSimulation.requestedCpuCores;
        const memory =
            displayedSimulation && displayedSimulation.minimumMemoryInGb;
        return `${cores} Core - ${memory} GB`;
    }, [displayedSimulation]);
    return (
        <ScrollView style={[tailwind('bg-white mb-3 p-2'), styles.card]}>
            <Flex direction="row">
                <StatusIcon width={18} height={18} />
                <View style={tailwind('ml-2')}>
                    <Text>
                        {displayedSimulation && displayedSimulation.models[0]}
                    </Text>
                </View>
                <Spacer />
                <View>
                    <Text>
                        {moment(displayedSimulation.createdAt).format(
                            'DD MMM YY, HH:MM',
                        )}
                    </Text>
                </View>
            </Flex>
            <Divider style={tailwind('my-2')} />
            <View style={tailwind('p-2')}>
                <Flex style={tailwind('mb-1')}>
                    <Flex direction="row">
                        <Text style={tailwind('w-1/3')}>Triggered By:</Text>
                        <Text>
                            {displayedSimulation &&
                                displayedSimulation.createdByUser.name}
                        </Text>
                    </Flex>
                    <Flex direction="row">
                        <Text style={tailwind('w-1/3')}>Configuration:</Text>
                        <Text>{configuration}</Text>
                    </Flex>
                    <Flex direction="row">
                        <Text style={tailwind('w-1/3')}>Engine:</Text>
                        <Text>
                            {displayedSimulation &&
                                displayedSimulation.simulationEngine.name}
                        </Text>
                    </Flex>
                </Flex>
            </View>
            <Divider style={tailwind('my-2')} />
            <Flex direction="row">
                <Button
                    size="sm"
                    variant="ghost"
                    onPress={() => {
                        setShowMore(!showMore);
                    }}>
                    SHOW MORE SOLUTIONNS
                </Button>
                <Spacer />
                <Button
                    size="sm"
                    onPress={() => {
                        navigate('/output', {replace: true});
                    }}>
                    OUTPUT
                </Button>
            </Flex>
            {showMore && (
                <View>
                    <FlatList
                        data={hiddenSimulations}
                        renderItem={({item}) => {
                            const Status =
                                SOLUTION_STATUS_CONFIGS[
                                    item && item.status.toLowerCase()
                                ].icon;
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedSimulation(item);
                                    }}>
                                    <Flex
                                        direction="row"
                                        style={tailwind('px-2 py-3')}>
                                        <Status width={16} height={16} />
                                        <Text style={tailwind('ml-2')}>
                                            {moment(item.createdAt).format(
                                                'DD MMM YY, HH:MM',
                                            )}
                                        </Text>
                                    </Flex>
                                    <Divider />
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            )}
        </ScrollView>
    );
}
