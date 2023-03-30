import React from "react";
import PodcastProvider from "./components/contexts/PodcastContext";
import AppRouter from "./routes/AppRouter";

const App = () => {

  return (
    <div>
      <PodcastProvider>
        <AppRouter />
      </PodcastProvider>
    </div>
  );
};

export default App;