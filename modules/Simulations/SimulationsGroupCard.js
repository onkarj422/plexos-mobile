import React, {useMemo, useState} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {Button, HStack} from 'native-base';
import tailwind from 'tailwind-rn';
import globalStyles from '../../styles';
import moment from 'moment';

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
    return (
        <View style={[tailwind('bg-white mb-3 p-2'), styles.card]}>
            <HStack>
                <View>
                    <Text>
                        {displayedSimulation && displayedSimulation.status}
                    </Text>
                </View>
                <View>
                    <Text>
                        {displayedSimulation && displayedSimulation.models[0]}
                    </Text>
                </View>
            </HStack>
            <HStack>
                <Button
                    size="sm"
                    variant="ghost"
                    onPress={() => {
                        setShowMore(!showMore);
                    }}>
                    SHOW MORE SOLUTIONNS
                </Button>
            </HStack>
            {showMore && (
                <View>
                    <FlatList
                        data={hiddenSimulations}
                        renderItem={({item}) => (
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    setSelectedSimulation(item);
                                }}>
                                <View style={tailwind('px-2 py-4')}>
                                    <Text>
                                        {moment(item.createdAt).format(
                                            'DD MMM YY, HH:MM',
                                        )}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </View>
            )}
        </View>
    );
}
