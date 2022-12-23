import React,{useState} from "react";
import { Link , useNavigate } from "react-router-dom";
import skull from "../images/skull.png";

const Signup = () => {
    const navigate = useNavigate();

    const [user,setUser]=useState({
        name:'',email:'',phone:'',work:'',password:'',cpassword:''
    })

    let name, value;
    const handleInputs =(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user, [name]:value})
    }

    const PostData = async (e) => {
        e.preventDefault()

        const { name,email,phone,work,password,cpassword}= user;

        const res= await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });

        const data =await res.json();
        if(data.status === 422 || !data){
            window.alert('Invalid Registration')
            console.log('Invalid Registration')
        }else{
            window.alert('Registration Successfull')
            console.log('Registration Successfull')

            navigate('/login');
        }
    }

  return (
    <>
      <section>
        <div className="container mt-5 flexcon">
          <div className="signup-container">
            <div className="signup-form">
              <h2 className="form-title">sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icon-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icon-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Your Profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icon-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icon-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={skull} alt="registration pic" />
              </figure>
              <Link to="/login" className="signup-image-link">
                I am already Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
