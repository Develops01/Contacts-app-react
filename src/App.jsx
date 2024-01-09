import { createRoot } from "react-dom/client";
// import MyContactApp from "./MyContactApp";
import ContactApp from "./ContactApp";

const App = () => {
  return (
    <div>
      <ContactApp />
      {/* <MyContactApp /> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
