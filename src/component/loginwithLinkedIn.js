import React from "react";
import LinkedIn from "linkedin-login-for-react";
// import styles from "./styles.css";
 
class LoginWithLinkedin extends React.Component {
  static propTypes = {};
 
  /*
    ** @code = authorization code from linkedin api
    ** @redirectUri = redirect uri from linkedin api
    ** @error = error message sign in failed
    */
  callbackLinkedIn = (error, code, redirectUri) => {
    if (error) {
      // signin failed
    } else {
      // Obtain authorization token from linkedin api
      // see https://developer.linkedin.com/docs/oauth2 for more info
    }
  };
 
  render() {
    return (
      <LinkedIn
        clientId="77bp7ab90b9wne"
        callback={this.callbackLinkedIn}
        // className={styles.linkedin}
        scope={["r_liteprofile","r_emailaddress"]}
        text="Login With LinkedIn"
      />
    );
  }
}
 
export default LoginWithLinkedin;
// import React, { useState } from 'react';

// import { LinkedIn } from '../src/LinkedIn';
// // You can use provided image shipped by this package or using your own
// import linkedin from '../component/assests/linkedin.png';

// function LinkedInPage() {
//   return (
//     <LinkedIn
//       clientId="86vhj2q7ukf83q"
//       redirectUri={`${window.location.origin}/linkedin`}
//       onSuccess={(code) => {
//         console.log(code);
//       }}
//       onError={(error) => {
//         console.log(error);
//       }}
//     >
//       {({ linkedInLogin }) => (
//         <img
//           onClick={linkedInLogin}
//           src={linkedin}
//           alt="Sign in with Linked In"
//           style={{ maxWidth: '180px', cursor: 'pointer' }}
//         />
//       )}
//     </LinkedIn>
//   );
// }
// export default LinkedInPage