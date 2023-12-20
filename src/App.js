import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import appStore from "./utils/redux/appStore";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Body from "./components/Body";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <MainContainer/>,
    },
    {
      path:"watch",
      element: <WatchPage/>,
    }
  ]
}])

const App=()=> {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header/>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
