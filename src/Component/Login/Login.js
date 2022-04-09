import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState("");
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleRegisteredChange = (e) => {
    setRegistered(e.target.checked);
  };

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Password Should content at least one special character ");
      return;
    }

    setValidated(true);
    setError("");
    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          navigate("/");
          console.log(user);

        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setEmail("");
          setPassword("");
          verifyEmail();
          setUserName();
          
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    }

    e.preventDefault();
  };
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("Email send");
    });
  };

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      navigate("/");
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
      setError(error.message);
    });
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        console.log("updating name");
      })
      .catch((error) => {
        console.catch(error.message);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email Verification Send");
    });
  };
  return (
    <div className="registration w-50 mx-auto mt-3">
      <h1 className="text-primary">
        Please {registered ? "Login" : "Register"}
      </h1>
      <Form noValidate validated={validated} onBlur={handleNameBlur}>
        {!registered && (
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="text"
              placeholder="Your Name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Your Name.
            </Form.Control.Feedback>
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={handleRegisteredChange}
            type="checkbox"
            label="Already Registered"
          />
        </Form.Group>
        <p className="text-danger">{error}</p> 
        
        <Button className="" variant="primary" onClick={handleFormSubmit} type="submit">
          {registered ? "Login" : "Register"}
        </Button>
        <Button className="" onClick={handlePasswordReset} variant="link">
          Forget Password?
        </Button><br></br>
       --------------------------------------------------------<br></br>
       <Button className="mt-4" onClick={handleGoogleSignIn}>Continue with Google</Button>
      </Form>
      
    </div>
  );
};

export default Login;
