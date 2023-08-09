import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Header />
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}
