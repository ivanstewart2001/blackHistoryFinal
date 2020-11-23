import React from 'react'
import Layout from './containers/layout'

const App = () => {
  return (
    <div>
      <div style={{boxSizing: "border-box"}}>
        <h1>Black History Encyclopedia</h1>
        <h3>Search Over 100 names of iconic African American's throughout United States History</h3>
        <Layout/>
      </div>
    </div>
    
  );
}

export default App;
