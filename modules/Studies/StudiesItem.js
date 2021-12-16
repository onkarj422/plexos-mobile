import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

export default function ({study, setSelectStudy, selectedStudy}) {
    return (
        <TouchableOpacity
            style={[
                styles.card,
                selectedStudy === study.id
                    ? styles.studySelected
                    : styles.noClass,
            ]}
            onPress={() => {
                // setSelectStudy(study.id);
            }}
            key={study.id}>
            <Text style={styles.studyName}>{study.name}</Text>
            <Text>
                Created: {moment(study.createdDate).format('DD-MM-YYYY')}{' '}
                {study.createdByUser.name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 20,
        marginVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    studyName: {
        fontSize: 18,
        marginBottom: 3,
        marginTop: 3,
    },
    createdAt: {
        fontSize: 10,
        color: 'grey',
    },
    studySelected: {
        backgroundColor: 'blue',
    },
    noClass: {},
});
