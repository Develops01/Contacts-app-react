import { createRoot } from "react-dom/client";
import ContactApp from "./ContactApp";

const App = () => {
  return (
    <div>
      <ContactApp />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
