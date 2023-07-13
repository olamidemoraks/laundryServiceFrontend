import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import LandingPage from "./pages/LandingPage";
import PickLaundry from "./pages/PickLaundry";
import Basket from "./pages/Basket";
import Schedule from "./pages/Schedule";
import History from "./pages/History";
import Prefetch from "./component/Prefetch";
import Profile from "./pages/Profile";
import Layout from "./component/Admin/Layout";
import Index from "./pages/Admin/Index";
import Orders from "./pages/Admin/Orders";
import Users from "./pages/Admin/Users";
import OrderInfo from "./pages/Admin/OrderInfo";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/authenticate" element={<Authentication />} />

        <Route element={<Prefetch />}>
          <Route path="/home" element={<Home />} />
          <Route path="/picklaundry" element={<PickLaundry />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="order">
            <Route index element={<Orders />} />
            <Route path=":id" element={<OrderInfo />} />
          </Route>
          <Route path="customer" element={<Users />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
