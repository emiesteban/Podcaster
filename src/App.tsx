// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import PodcastProvider from './contexts/PodcastContext';
import AppRouter from './routes/AppRouter';

const App = (): JSX.Element => {
  return (
    <div>
      <PodcastProvider>
        <AppRouter />
      </PodcastProvider>
    </div>
  );
};

export default App;
