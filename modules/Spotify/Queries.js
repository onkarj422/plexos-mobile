import {useQuery} from 'react-query';
import {getTracks} from '../../services/Spotify/WebAPI';

export function useTracks() {
    return useQuery('tracks', getTracks);
}
