import SignUpPage from "@/features/auth/sign-up";
import DashboardAskAiPage from "@/features/dashboard/ask-ai";
import DashboardCalenderPage from "@/features/dashboard/calender";
import DashboardHelpPage from "@/features/dashboard/help";
import DashboardHomePage from "@/features/dashboard/home";
import DashboardIndexPage from "@/features/dashboard/inbox";
import DashboardProjectPage from "@/features/dashboard/project";
import ProjectDetails from "@/features/dashboard/project/details";
import ProjectMembers from "@/features/dashboard/project/members";
import ProjectTasks from "@/features/dashboard/project/tasks";
import DashboardSettingsPage from "@/features/dashboard/settings";
import HomePage from "@/features/home";
import PricingPage from "@/features/pricing";
import AppLayout from "@/layout/app-layout";
import AuthLayout from "@/layout/auth-layout";
import DashboardLayout from "@/layout/dashboard-layout";
import ProjectLayout from "@/layout/project-layout";
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
        <Route path="projects">
          <Route index element={<DashboardProjectPage />} />
          <Route path="284823332670" element={<ProjectLayout />}>
            <Route path="details" element={<ProjectDetails />} />
            <Route path="members" element={<ProjectMembers />} />
            <Route path="tasks" element={<ProjectTasks />} />
          </Route>
        </Route>
        <Route path="inbox" element={<DashboardIndexPage />} />
        <Route path="ask-ai" element={<DashboardAskAiPage />} />
        <Route path="calendar" element={<DashboardCalenderPage />} />
        <Route path="settings" element={<DashboardSettingsPage />} />
        <Route path="help" element={<DashboardHelpPage />} />
      </Route>
    </Route>
  )
);

export default router;
