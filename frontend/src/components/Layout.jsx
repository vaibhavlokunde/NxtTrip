import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="flex min-h-screen">
      {showSidebar && <Sidebar />}

      <div className="flex flex-col flex-1 bg-base-100">
        <Navbar />

        <main className="flex-1">{children}</main>

        {/* Optional footer (adds visual balance) */}
        <footer className="p-4 text-center text-sm text-gray-500">
          © 2025 NxtTrip. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Layout;
