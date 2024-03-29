import { Route, Routes } from "react-router-dom";
import Login from "./components/layouts/Login";
import AdminPanel from "./components/layouts/AdminPanel";
import Layout from "./components/layouts/Layout";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import NotFound from "./components/layouts/NotFound";
import Home from "./components/Home";
import Inbox from "./components/Inbox";
import ItemSetupIndex from "./components/setup/item-setup/ItemSetupIndex";
import VendorSetupIndex from "./components/setup/vendor-setup/VendorSetupIndex";
import Chatbox from "./components/liveChat/ChatBoard";
function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!isAuthenticated ? <Login />: ''} />
          <Route
          path="/"
          element={isAuthenticated ? <Chatbox /> : <Login />}
          />
          <Route
            path="/admin"
            element={isAuthenticated ? <AdminPanel /> : <Login />}
          />
          <Route
            path="/inbox"
            element={isAuthenticated ? <Inbox /> : <Login />}
          />
          <Route
            path="/item-setup"
            element={isAuthenticated ? <ItemSetupIndex /> : <Login />}
          />
          <Route
            path="/vendor-setup"
            element={isAuthenticated ? <VendorSetupIndex /> : <Login />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
