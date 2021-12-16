import {create} from 'apisauce';
import buildQuery from 'odata-query';

const studiesApiInstance = create({
    baseURL: 'https://studies-api-aquila.energyexemplar.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdFQ0IzMjNFMjAwNDZBRDE0REJFRTRGRUMzMzNFRDE1RjI4NUE4NEYiLCJ4NXQiOiJmc3N5UGlBRWF0Rk52dVQtd3pQdEZmS0ZxRTgiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2Mzk1NzQ2MTAsImV4cCI6MTYzOTY2MTAxMCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS13ZWItYXF1aWxhLmVuZXJneWV4ZW1wbGFyLmNvbSIsImF1ZCI6WyJjbG91ZC5hcGkiLCJJZGVudGl0eVNlcnZlckFwaSJdLCJjbGllbnRfaWQiOiIzNjllZjlkMy0yNjY5LTQxNmMtYTI1MS1kYTcwYThiYjcyNzEiLCJzdWIiOiJkMzUzMGI2ZS1kYjhlLTQyOTctOTRhNS0zYzQzODI3NTFkY2QiLCJhdXRoX3RpbWUiOjE2Mzk1NzQ2MDgsImlkcCI6ImxvY2FsIiwiZmFtaWx5X25hbWUiOiJKb3NoaSIsImdpdmVuX25hbWUiOiJPbmthciIsIm5hbWUiOiJPbmthciBKb3NoaSIsImVtYWlsIjoib25rYXIuam9zaGlAZW5lcmd5ZXhlbXBsYXIuY29tIiwibG9jYWxlIjoiZXMtVVMiLCJyb2xlIjpbIjU1MGMwNWJjLTI3ZTktNGRjMC1hZWE2LTNhODNiMmYxNDgxOSIsIlRlbmFudEFkbWluIiwiN2MxYTJlMDAtNWMxNy00OTlhLTkzZDctMDZkYjA4Njc0MDY1IiwiVXNlciJdLCJ0ZW5hbnRkb21haW4iOiJlbmVyZ3lleGVtcGxhci5jb20iLCJ0ZW5hbnRpZCI6ImQ0NjlmNjQ1LWZmOTYtNGQ5ZC05ODc5LTA5Y2IxZjg3YjNkNyIsImxpY2Vuc2VfdHlwZSI6WyJNb2RlbGVyIiwiUmVwb3J0RGVzaWduZXIiXSwic2NvcGUiOlsib3BlbmlkIiwidGVuYW50aWQiLCJlbWFpbCIsInRlbmFudGRvbWFpbiIsIm5hbWUiLCJzdWIiLCJwcm9maWxlIiwiY2xvdWQuYXBpIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.QtzbW86XHxA5OIkuWNhdsp6U1OkofEI4XBNy_rrwLrgRpyeXycCx9o59Dngp7wBWORSl6wqK2O4FuDY5aIr6wqGgr59AeU535Ae3UHJ-mdMe1lvXw35r1JztjD8EoGL4xOcFSt-JxwJyq9j0oo5Kb3lWDT79eUUG7HXsExzQkBcN53agpOIcnhaJH9BQu_I20kqknIQRT-CZRUPQm637CJtV-xzPAMo2t61sO3XOCZHY8e2D6NIWUhYDX9sgDKdy_a0y2bMW9D0X0swAfVpqP_PVJeRb07TvjtwpT4O0RQbfrXHP8Oqiu4QiaSGASI4s5Zf17XSL9pCxP9IxPOVRYA',
    },
});

export const getStudies = () => {
    const queryObject = {
        // filter: {
        //     and: [
        //         {
        //             'tolower(name)': {
        //                 contains: searchQuery,
        //             },
        //         },
        //         { status: studyStatus },
        //     ],
        // },
        expand: {
            createdByUser: {},
            changesets: {
                select: ['createdDate'],
                expand: {
                    createdByUser: {},
                },
            },
        },
        orderBy: ['createdDate desc'],
        count: true,
    };
    const query = buildQuery(queryObject);
    const requestConfig = {
        url: `1.0/odata/studies${query}`,
    };
    return studiesApiInstance.get(requestConfig.url);
};
