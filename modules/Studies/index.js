import {ScrollView} from 'native-base';
import React, {useMemo, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {useStudies} from './Queries';
import StudiesItem from './StudiesItem';
import useStore from '../../state';
import {useNavigate} from 'react-router-native';

const styles = StyleSheet.create({
    selectButton: {
        padding: 20,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#4aa7a9',
        position: 'absolute',
        bottom: 0,
        width: '90%',
        marginHorizontal: '5%',
        marginBottom: 10,
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginLeft: 20,
        marginRight: 20,
    },
});
export default function () {
    const studiesQueryResult = useStudies(
        '1c2e1eb1-796a-4479-809b-d999d8d92946',
    );

    const {setSelectedStudy} = useStore();
    const navigate = useNavigate();
    const studies = useMemo(
        () => studiesQueryResult.data || [],
        [studiesQueryResult.data],
    );

    const [searchInput, setSearch] = useState('');
    const [selectedStudy, setSelectStudy] = useState('');

    const updateSelectedStudy = () => {
        setSelectedStudy(selectedStudy);
    };

    return (
        <View>
            <ScrollView>
                <View style={styles.header}>
                    <View>
                        <Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigate('/', {replace: true});
                                }}>
                                <Text>Back</Text>
                            </TouchableOpacity>{' '}
                        </Text>
                    </View>
                    <View>
                        <Text>Total: {studies.length}</Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setSearch}
                        value={searchInput}
                        placeholder="Search Studyname"
                        keyboardType="text"
                    />
                </View>
                <View>
                    {studies
                        .filter(study => study.name.includes(searchInput))
                        .map(study => {
                            return (
                                <StudiesItem
                                    study={study}
                                    setSelectedStudy={setSelectStudy}
                                    selectedStudy={selectedStudy}
                                />
                            );
                        })}
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.selectButton}
                onPress={() => updateSelectedStudy()}>
                <Text>Select</Text>
            </TouchableOpacity>
        </View>
    );
}
