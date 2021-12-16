import {useQuery} from 'react-query';
import {getStudies} from '../../services/Studies';

export function useStudies() {
    return useQuery('studies', () => getStudies(), {
        select: response => response.data.value,
        enabled: true,
    });
}
