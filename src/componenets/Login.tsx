import { Form } from "react-router-dom";
import "../assets/Login.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function Login() {
  return (
    <>
      <main id="main">
        <div id="login">
          <span id="titleLogin">Password Manager V1.0</span>

          <Form method="POST" action="" id="login-form">
            <div className="form-item">
              <label className="emailLabel" htmlFor="userEmail">
                <EmailIcon fontSize="large" />
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Your email..."
                required
              />
            </div>
            <div className="form-item">
              <label className="passwordLabel" htmlFor="userPassword">
                <LockIcon fontSize="large" />
              </label>
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder="Password..."
                required
              />
            </div>
            <div className="form-item submitBtn">
              <input type="submit" className="formBtn register" value="Register" />
              <input type="submit" className="formBtn login" value="Log In" />
            </div>
          </Form>
        </div>
      </main>
    </>
  );
};
