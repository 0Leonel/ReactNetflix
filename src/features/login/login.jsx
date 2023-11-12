import React, {useState} from "react";
import { useAuth } from "../../core/auth/hooks/useAuth";
import emailimg from "../../assets/login/email.svg"
import passwordimg from "../../assets/login/password.svg"
import fan from "../../../public/documental.png"
const Login =()=> {

  const {login,isLoggedIn} = useAuth();

  console.log(isLoggedIn);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      email:"",
    password:""});
    console.log('Form Data:', formData);
  };

  return (
    <section className="grid place-content-center h-[100vh] bg-gradient-to-r from-[#353A3C] via-[#618C83] to-[#2B3337] ">
    <div className="border-4 rounded-lg bg-[#2B3337] mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl text-[#E3C69D] font-bold sm:text-3xl">Iniciar sesión</h1>

      </div>

      <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">Email</label>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <img src={emailimg}  className="h-4 w-4 text-gray-400"/>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">Password</label>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
             <img src={passwordimg} className="h-4 w-4 text-gray-400" alt="" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">

          <button
            onClick={login}
            type="submit"
            className="inline-block rounded-lg bg-[#8C6161] px-5 py-3 text-sm font-medium text-white"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
    </section>
  );
}

export default Login;