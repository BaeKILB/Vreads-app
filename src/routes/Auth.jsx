import { useState } from "react";
import { authService, firebaseInstance } from "../fbase";
import { Redirect } from "react-router-dom";

// 로그인 , 회원가입, 타api 로그인 컴포넌트
export default function Auth() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  // 회원가입 상태인지 로그인 상태인지 체크
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") setEmail(value);
    else if (name === "passwd") setPasswd(value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(email, passwd);
      } else {
        data = await authService.signInWithEmailAndPassword(email, passwd);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;

    let provider;

    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    try {
      const data = await authService.signInWithPopup(provider);
    } catch (e) {
      setError(error.message);
    }
  };
  return (
    <>
      <h2>Auth</h2>
      <div>{error}</div>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          value={email}
          onChange={onChangeHandler}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="passwd"
          required
          value={passwd}
          onChange={onChangeHandler}
        />
        <br />
        <button type="submit">
          {newAccount ? "Create Account" : "Login"}{" "}
        </button>
      </form>
      <p onClick={toggleAccount}>{newAccount ? "Sign in" : "Sign up"}</p>
      <button onClick={onSocialClick} name="google">
        Google Login
      </button>
      <button onClick={onSocialClick} name="github">
        Github Login
      </button>
    </>
  );
}
