import "./App.css";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter } from "react-router-dom";
import Head from "./Head";
import { RouterProvider } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import QueryPage from "./QueryPage";
import QueryCard from "./QueryCard";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
      { path: "search/:id", element: <QueryPage /> },
    ],
  },
]);
//children go where our outlet will be
function App() {
  return (
    <Provider store={store}>
      <div className="App  ">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
