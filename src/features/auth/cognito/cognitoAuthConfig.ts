// export const cognitoAuthConfig = {
//   authority:
//     "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_b3tmswMrq",
//   client_id: "38h4mk3scdp6ve3kpjckg8mba7",
//   redirect_uri: "http://localhost:5173",
//   response_type: "code",
//   scope: "phone openid email",
// };

export const cognitoAuthConfig = {
  authority: import.meta.env.VITE_COGNITO_AUTHORITY,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  response_type: "code",
  scope: "openid email phone",
};
