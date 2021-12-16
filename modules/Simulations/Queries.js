import {useQuery} from 'react-query';
import {getSimulations} from '../../services/Simulations';

export function useSimulations(studyId) {
    return useQuery('simulations', () => getSimulations(studyId), {
        select: response => response.data.value,
        enabled: !!studyId,
    });
}
