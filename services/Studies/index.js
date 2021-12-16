import {create} from 'apisauce';
import buildQuery from 'odata-query';

const studiesApiInstance = create({
    baseURL: 'https://studies-api-aquila.energyexemplar.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdFQ0IzMjNFMjAwNDZBRDE0REJFRTRGRUMzMzNFRDE1RjI4NUE4NEYiLCJ4NXQiOiJmc3N5UGlBRWF0Rk52dVQtd3pQdEZmS0ZxRTgiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2Mzk2Njc5NjQsImV4cCI6MTYzOTc1NDM2NCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS13ZWItYXF1aWxhLmVuZXJneWV4ZW1wbGFyLmNvbSIsImF1ZCI6WyJjbG91ZC5hcGkiLCJJZGVudGl0eVNlcnZlckFwaSJdLCJjbGllbnRfaWQiOiIzNjllZjlkMy0yNjY5LTQxNmMtYTI1MS1kYTcwYThiYjcyNzEiLCJzdWIiOiJjMDU2MTVlNi1mYTYzLTRkNzEtOTE0OS0yMWExZWFiOThlMTIiLCJhdXRoX3RpbWUiOjE2Mzk2Njc5NjMsImlkcCI6ImxvY2FsIiwiZ2l2ZW5fbmFtZSI6IkFiaGlqaXQiLCJmYW1pbHlfbmFtZSI6IlNpc29kaXlhIiwibmFtZSI6IkFiaGlqaXQgU2lzb2RpeWEiLCJlbWFpbCI6IkFiaGlqaXQuU2lzb2RpeWFAZW5lcmd5ZXhlbXBsYXIuY29tIiwibG9jYWxlIjoiZXMtVVMiLCJyb2xlIjpbIjU1MGMwNWJjLTI3ZTktNGRjMC1hZWE2LTNhODNiMmYxNDgxOSIsIlRlbmFudEFkbWluIiwiN2MxYTJlMDAtNWMxNy00OTlhLTkzZDctMDZkYjA4Njc0MDY1IiwiVXNlciJdLCJ0ZW5hbnRkb21haW4iOiJlbmVyZ3lleGVtcGxhci5jb20iLCJ0ZW5hbnRpZCI6ImQ0NjlmNjQ1LWZmOTYtNGQ5ZC05ODc5LTA5Y2IxZjg3YjNkNyIsImxpY2Vuc2VfdHlwZSI6WyJNb2RlbGVyIiwiUmVwb3J0RGVzaWduZXIiXSwic2NvcGUiOlsib3BlbmlkIiwidGVuYW50aWQiLCJlbWFpbCIsInRlbmFudGRvbWFpbiIsIm5hbWUiLCJzdWIiLCJwcm9maWxlIiwiY2xvdWQuYXBpIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.BlTNhYLTRBapiPaBmJCWybcRAvpt3xh4kv25OIVMsbHNiVAOKUSBJLynygVJnhiC1DKzJtVgvAacJtslB38H_oVGgjVQ5I8F-vbwm_DoDU8W70emUpZivPEGDtnVf6c5Pfw9U1EfcPSl0TEjrq6K85xlKb4uz99_V6i7gYS1Xt08sgtKod_ci3VejBLu0E3aQJs7R6YgyH-YIDZmpdldDzvlaA3EbDS6fIq8Rii9Hx7WSGr-oVDLIOzsd_DMQj1HevTGsLy_lu8BYP9MYULJvt0lX4m3zlO-mxBuGPI5txbEtm_GREpmDJFDR0HeT5xvpddAUetbaEoB5C93OLOzfQ',
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
