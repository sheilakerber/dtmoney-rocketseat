import { GlobalStyle } from "./styles/globals";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard />
      <GlobalStyle />
    </>
  );
}