// This snippet file was generated by processing the source file:
// ./auth/saml.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_saml_signin_popup_modular]
firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // User is signed in.
    // Identity provider data available in result.additionalUserInfo.profile,
    // or from the user's ID token obtained from result.user.getIdToken()
    // as an object in the firebase.sign_in_attributes custom claim
    // This is also available from result.user.getIdTokenResult()
    // idTokenResult.claims.firebase.sign_in_attributes.
  })
  .catch((error) => {
    // Handle / display error.
    // ...
  });
// [END auth_saml_signin_popup_modular]