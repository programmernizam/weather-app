import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";

export default function App() {
  return (
    <div className="bg-body font-[Roboto] text-light bg-[url('./src/assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
      <Header />
      <main>
        <section>
          <Weather />
        </section>
      </main>
    </div>
  );
}
