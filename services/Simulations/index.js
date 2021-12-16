import {create} from 'apisauce';
import buildQuery from 'odata-query';

const simulationsApiInstance = create({
    baseURL: 'https://simulation-api-aquila.energyexemplar.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdFQ0IzMjNFMjAwNDZBRDE0REJFRTRGRUMzMzNFRDE1RjI4NUE4NEYiLCJ4NXQiOiJmc3N5UGlBRWF0Rk52dVQtd3pQdEZmS0ZxRTgiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2Mzk2Mzg4ODAsImV4cCI6MTYzOTcyNTI4MCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS13ZWItYXF1aWxhLmVuZXJneWV4ZW1wbGFyLmNvbSIsImF1ZCI6WyJjbG91ZC5hcGkiLCJJZGVudGl0eVNlcnZlckFwaSJdLCJjbGllbnRfaWQiOiIzNjllZjlkMy0yNjY5LTQxNmMtYTI1MS1kYTcwYThiYjcyNzEiLCJzdWIiOiJkMzUzMGI2ZS1kYjhlLTQyOTctOTRhNS0zYzQzODI3NTFkY2QiLCJhdXRoX3RpbWUiOjE2Mzk2Mzg4NzgsImlkcCI6ImxvY2FsIiwiZmFtaWx5X25hbWUiOiJKb3NoaSIsImdpdmVuX25hbWUiOiJPbmthciIsIm5hbWUiOiJPbmthciBKb3NoaSIsImVtYWlsIjoib25rYXIuam9zaGlAZW5lcmd5ZXhlbXBsYXIuY29tIiwibG9jYWxlIjoiZXMtVVMiLCJyb2xlIjpbIjU1MGMwNWJjLTI3ZTktNGRjMC1hZWE2LTNhODNiMmYxNDgxOSIsIlRlbmFudEFkbWluIiwiN2MxYTJlMDAtNWMxNy00OTlhLTkzZDctMDZkYjA4Njc0MDY1IiwiVXNlciJdLCJ0ZW5hbnRkb21haW4iOiJlbmVyZ3lleGVtcGxhci5jb20iLCJ0ZW5hbnRpZCI6ImQ0NjlmNjQ1LWZmOTYtNGQ5ZC05ODc5LTA5Y2IxZjg3YjNkNyIsImxpY2Vuc2VfdHlwZSI6WyJNb2RlbGVyIiwiUmVwb3J0RGVzaWduZXIiXSwic2NvcGUiOlsib3BlbmlkIiwidGVuYW50aWQiLCJlbWFpbCIsInRlbmFudGRvbWFpbiIsIm5hbWUiLCJzdWIiLCJwcm9maWxlIiwiY2xvdWQuYXBpIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.FAUQSXoFdTRLUni_PYTJpYiNGMOO4R9mkp2RPLBvgz9Zdq55gXWzoWKFnZr5nnNytkt1_cvewFfn5ZQW2AE9Buhc8WIlh58ydTiBzbt2y3mMShNS_uIEpPv_r_e92jJDU-vFGklI3Bw2r5Gvd9Y_vEavdx45eJhiuNYR5dk-HtDao9pLYxAyOh3YU63iII-u8HGZMjDlrjS4aYLhmUBTbC9zqMcpQrSxUSJixRtQirb9BShldFAnd-Ze3vg77ViDsOfHAsL71cQgNPo4rPj9ONcDYcpDENiFtCRKWLornFCDwaVW8aW11cuQUvQGqaYYFp6QgJ5rw4Ary8Akiq98Dg',
    },
});

export const getSimulations = (
    studyId,
    searchQuery = '',
    filterValues = [],
    sortOn = 'lastUpdatedAt',
    sortOrder = 'desc',
) => {
    const queryObject = {
        filter: {
            and: [
                `studyId eq ${studyId}`,
                {or: filterValues.map(value => ({'tolower(status)': value}))},
            ],
        },
        expand: {
            modelIdentifiers: {},
            runtimeMetrics: {},
            simulationEngine: {},
            messages: {},
            tags: {},
        },
        orderBy: [`${sortOn} ${sortOrder}`],
        count: true,
        top: 250,
        skip: 0,
    };
    const query = buildQuery(queryObject);
    const requestConfig = {
        url: `1.0/odata/simulations${query}`,
    };
    return simulationsApiInstance.get(requestConfig.url);
};
