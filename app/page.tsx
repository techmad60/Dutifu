import { poppins } from "./fonts/fonts";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <Header />
      <Main />
    </div>
  );
}
