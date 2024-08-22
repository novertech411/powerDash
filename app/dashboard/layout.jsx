import Sidebar from "../ui/sidebar/sidebar";
import Navbar from "../ui/navbar/navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
