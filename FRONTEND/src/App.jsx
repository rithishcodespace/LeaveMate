import route from "./Routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/Store";

let App = () =>{
  return(
    <div>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </div>
  )
}

export default App;