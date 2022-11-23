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

export default { processResponse };
