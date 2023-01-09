const baseURL = 'http://localhost:3035'

const processResponse = async (
    apiResponse: Response,
    apiResponseTypeStr: string,
) => {
    // const LOG = apiResponseTypeStr

    return apiResponse.json().then((jsonResponse: any) => {
        if (jsonResponse) {
            return jsonResponse;
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
            attempt: Error(`No response for ${apiResponseTypeStr}`),
        });
    });
};

const search = (searchString:string) => {
    return fetch(`${baseURL}?filter=${searchString}`)
        .then(resp => resp.json())
};

export default {search}