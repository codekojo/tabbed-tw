import { useState } from "react";

import "./App.css";

import { Button } from "../components/ui/button";

const Tabbed = [
  {
    name: "Tab 1",
    title: "React is a library for building UIs",
    content: "Hello tab 2",
  },
  {
    name: "Tab 2",
    title: "React is a library for building UIs",
    content: "Hello tab 2",
  },
  {
    name: "Tab 3",
    title: "React is a library for building UIs",
    content: "Hello tab 2",
  },
  {
    name: "Tab 4",
    title: "React is a library for building UIs",
    content: "Hello tab 2",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="h-full py-5 flex justify-center items-center w-full">
      <div className="flex max-w-3xl flex-col">
        <header className="flex justify-center gap-3">
          {Tabbed.map((tabName, i) => (
            <Button
              variant="outline"
              onClick={() => setActiveTab(Number(i))}
              className={`px-10 ${activeTab === i ? "bg-red-500" : null}`}
            >
              {tabName.name}
            </Button>
          ))}
        </header>

        <div className="bg-lime-100 rounded-lg my-5 p-2">
          <h2>{Tabbed.at(activeTab).title}</h2>
          <div className="">{Tabbed.at(activeTab).content}</div>

          <div className="flex justify-between items-center">
            <span role="button" className="underline text-blue-400">
              hide details
            </span>
            <div className="flex items-center gap-2">
              <span>5 ❤️</span>
              <div className="flex items-center justify-between gap-2">
                <span role="button" className="bg-red-400 rounded-lg p-2">
                  👍🏽
                </span>
                <span role="button" className="bg-red-400 rounded-lg p-2">
                  👍🏽👍🏽👍🏽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
