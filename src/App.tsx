import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes/index";
import store from "./store";
const App = () => {
  return (
    <div vaul-drawer-wrapper="">
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </div>
  );
};

export default App;
