import SignUpPage from "@/features/auth/sign-up";
import AuthLayout from "@/layouts/auth-layout";
import RootLayout from "@/layouts/root-layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-up" element={<SignUpPage />}></Route>
      </Route>
    </Route>
  )
);

export default router;
