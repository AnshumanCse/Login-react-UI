import "./login.scss";
import Logo from "./FUturians-removebg-preview.png";
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            Welcome <span>FUTURIANS</span>
          </h1>
          <p>
    
            Hey Futurians!! This is our official social media platform, Where we
            can do a lot of fun like Post, Stories etc. But it should be related
            to our college.

</p>
          <h5>If You don't have an account?</h5>
          <button className="btn" Id="btnn"> Register</button>
        </div>
        <div className="right">
          <img className="img" src={Logo} alt="Logo" height={200} />
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
