import { createRoot } from "react-dom/client";
import NA from "./NA";
// import ContactApp from "./ContactApp";

const App = () => {
  return (
    <div>
      {/* <ContactApp /> */}
      <NA />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
