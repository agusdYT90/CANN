import { AppProvider } from "./Contexts/Global";
import RoutesMain from "./Routes/Routes";
import "./Styles/App/Index.css";

function App() {

  return (
    <AppProvider>
      <RoutesMain />
    </AppProvider>
  )
}

export default App;