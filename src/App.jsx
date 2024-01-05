import "./App.css";

import { Button } from "../components/ui/button";

const Tabbed = [
  { name: "Tab 1" },
  { name: "Tab 2" },
  { name: "Tab 3" },
  { name: "Tab 4" },
];

function App() {
  return (
    <>
      <header className="flex justify-center gap-3">
        {Tabbed.map((tabName) => (
          <Button variant="outline" className="px-10">
            {tabName.name}
          </Button>
        ))}
      </header>
    </>
  );
}

export default App;
