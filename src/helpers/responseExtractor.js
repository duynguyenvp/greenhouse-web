const extract = res => ({
  isSuccess: res && res?.data?.status === "success",
  data: res?.data?.data,
  errorMessage: res?.data?.error?.message,
  errorMessageDetails: res?.data?.error?.details,
});

const extractError = res => ({
  errorMessage: res?.response?.data?.error?.message,
  errorMessageDetails: res?.response?.data?.error?.details,
});

const responseExtractor = { extract, extractError };

export default responseExtractor;
