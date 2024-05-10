import Footer from "../../components/footer/Footer";
import Article from "../../components/Article/Article";

export default function Home() {
  return (
    <>
    <h1>Homepage</h1>

      <p>Ahoj světe</p>
      <p>Hello world</p>
      <Article heading="BREAKING NEWS: Po měsíci hodina WAP" desc="Hodina zase v pátek" content="lorem" author="Tomáš Novák"/>
      <Article heading="BREAKING NEWS: Po měsíci hodina HWc" desc="Hodina zase v čtvrtek" content="lorem" author="Tomáš Novák"/>
      <Footer />
    </>
  );
}
