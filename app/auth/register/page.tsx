import Header from "../../(site)/components/Header";
import Footer from "../../(site)/components/Footer";
import Register from "../components/Register";


export default function RegisterPage() {

  return (
    <div className="min-h-screen w-auto flex flex-col items-top justify-top bg-neutral-800">
      <Header />
      <div className="flex flex-col text-2xl text-white w-full h-screen p-10 sm:p-40 ">
        <Register />
      </div>
      <Footer />
    </div>
  );

}
