import SignUpPage from "@/features/auth/sign-up";
import DashboardHomePage from "@/features/dashboard/home";
import HomePage from "@/features/home";
import PricingPage from "@/features/pricing";
import AppLayout from "@/layout/app-layout";
import AuthLayout from "@/layout/auth-layout";
import DashboardLayout from "@/layout/dashboard-layout";
import RootLayout from "@/layout/root-layout";
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

      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<PricingPage />} />
      </Route>

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
      </Route>
    </Route>
  )
);

export default router;
