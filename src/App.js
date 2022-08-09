import AxiosGetRequest from "./components/AxiosGetRequest";
import AxiosGetRequestWithRequestHeader from "./components/AxiosGetRequestWithRequestHeader";
import AxiosPostRequestWithRequestHeader from "./components/AxiosPostRequest";

function App() {
  return (
    <div className="App">
      {/* <AxiosGetRequest /> */}
      <AxiosGetRequestWithRequestHeader />
      {/* <AxiosPostRequestWithRequestHeader /> */}
    </div>
  );
}

export default App;
