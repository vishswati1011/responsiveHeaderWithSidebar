// import React from "react";
// import { useState } from "react";
// export default setstateinF =>{

//     const [active,setActive] =useState("");
//     return(
//         <div>
//             <div onClick={()=>setActive("basic")}>
//             {active==="basic"?<span>hello</span>:<span>hello this is Dashboard</span>}
//             </div>
            
//         </div>
//     )
// }

// import React from "react";
// import MicrosoftLogin from "react-microsoft-login";

// export default (props) => {
//   const authHandler = (err, data) => {
//     console.log(err, data);
//   };

//   return (
//     <MicrosoftLogin clientId={"5fd3852d-656a-4bdc-ad5c-0ead0099674c"} authCallback={authHandler} />
//   );
// };

import React, { useState } from "react";
import MicrosoftLogin from "react-microsoft-login";

const ExamplePage = () => {
  const [msalInstance, onMsalInstanceChange] = useState();

  const loginHandler = (err, data, msal) => {
    console.log("loginHandler");
    // some actions
    if (!err && data) {
      onMsalInstanceChange(msal);
    }
  };

  const logoutHandler = () => {
    msalInstance.logout();
  };
console.log("msal",msalInstance)
  return msalInstance ? (
      <>
      
      <label>Username:{msalInstance.account.name}</label><br></br>
      <label>Email:{msalInstance.account.userName}</label>
      <input type='text' placeholder="name"/>
      <br></br>
          <button onClick={logoutHandler}>Logout</button></>
  ) : (
    <MicrosoftLogin clientId={"5fd3852d-656a-4bdc-ad5c-0ead0099674c"} authCallback={loginHandler} />
  );
};

export default ExamplePage;