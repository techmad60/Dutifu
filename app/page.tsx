//import { poppins } from "./fonts/fonts";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Circular std Book, sans-serif' }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
