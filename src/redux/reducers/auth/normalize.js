export const authLoginNormalizePayload = res => ({
  token: res.token
});
export const authLoginNormalizeError = err => ({
  email: err.message
});