import React from 'react';
import './App.css';
import useJsonFetch from './useJsonFetch';

const AppHook = ({ url }) => {
  const[data, loading, error] = useJsonFetch(url)
  return (
      <div className="App">
        <h1>{data && data.status}</h1>
        <h1>{loading && 'Is Loading'}</h1>
        <h1>{error && 'Has Error'}</h1>
      </div>
  );
}

export default function App() {
  return (<div>
    <AppHook url='http://localhost:7070/data' />
    <AppHook url='http://localhost:7070/error' />
    <AppHook url='http://localhost:7070/loading' />

  </div>)
}