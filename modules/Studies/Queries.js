import {useQuery} from 'react-query';
import {getStudies} from '../../services/Studies';

export function useStudies() {
    return useQuery('simulations', () => getStudies(), {
        select: response => response.data.value,
        enabled: true,
    });
}
