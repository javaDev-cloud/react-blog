import { useState } from "react";

function Login() {
  let [val, setVal] = useState("sam");
  let userstatus = false;
  return (
    <>
      <input onChange={(event) => setVal(event.target.value)} value={val} />
      {val && <h3>Login User : {val}</h3>}
      {val ? (
        <button
          style={{ margin: "10px" }}
          onClick={(event) => {
            setVal("");
            if (userstatus) userstatus = !userstatus;
          }}>
          Logout
        </button>
      ) : (
        <button
          style={{ margin: "10px" }}
          onClick={(event) => {
            setVal(val);
            if (!userstatus) userstatus = !userstatus;
          }}>
          Login
        </button>
      )}
    </>
  );
}

export function Profile() {
  return (
    <>
      <h1>Profile</h1>
    </>
  );
}

export const userDetails = "$#%$#$%";
export default Login;
