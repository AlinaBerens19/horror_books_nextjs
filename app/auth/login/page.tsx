

import Header from "../../(site)/components/Header";
import Footer from "../../(site)/components/Footer";
import Login from "../components/Login";


export default function LoginPage() {

  return (
    <div className="min-h-screen w-auto flex flex-col items-top justify-top bg-neutral-800">
      <Header />
      <div className="flex flex-col text-2xl text-white w-full h-screen p-10 sm:p-40 ">
        <Login />
      </div>
      <Footer />
    </div>
  );

}
