import { createHashRouter } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { ProfilePage } from "../pages/Profile";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { ProfileSettingsPage } from "../pages/ProfileSettings";
import { MessagesPage } from "../pages/Messages";
import { QuickBuyPage } from "../pages/QuickBuy";
import { HelpCenterPage } from "../pages/HelpCenter";
import { DepositPage } from "../pages/Deposit";
import { WithdrawPage } from "../pages/Withdraw";
import { InternalTransferPage } from "../pages/InternalTransfer";
import { MembershipUpgradePage } from "../pages/MembershipUpgrade";

export const router = createHashRouter([
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile-settings",
        element: (
          <ProtectedRoute>
            <ProfileSettingsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/messages",
        element: (
          <ProtectedRoute>
            <MessagesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/quick-buy",
        element: (
          <ProtectedRoute>
            <QuickBuyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/help-center",
        element: (
          <ProtectedRoute>
            <HelpCenterPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/deposit",
        element: (
          <ProtectedRoute>
            <DepositPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/withdraw",
        element: (
          <ProtectedRoute>
            <WithdrawPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/transfer",
        element: (
          <ProtectedRoute>
            <InternalTransferPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/vip",
        element: (
          <ProtectedRoute>
            <MembershipUpgradePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);








// import { createBrowserRouter } from "react-router-dom";
// import { AppShell } from "../components/AppShell";
// import { HomePage } from "../pages/Home";
// import { LoginPage } from "../pages/Login";
// import { RegisterPage } from "../pages/Register";
// import { ProfilePage } from "../pages/Profile";
// import { ProtectedRoute } from "../routes/ProtectedRoute";

// export const router = createBrowserRouter([
//   {
//     element: <AppShell />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/login", element: <LoginPage /> },
//       { path: "/register", element: <RegisterPage /> },
//       {
//         path: "/profile",
//         element: (
//           <ProtectedRoute>
//             <ProfilePage />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);
