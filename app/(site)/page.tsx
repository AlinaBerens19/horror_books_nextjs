
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { DefaultSession } from "next-auth";


function HomePage({ user }: { user: DefaultSession }) {

  return (
    <div className="min-h-screen sm:min-h-0 w-full flex flex-col items-top justify-top bg-neutral-800">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default HomePage;
