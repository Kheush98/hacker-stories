import * as React from 'react';

function getTitle(title) {
  return title;
}

const array = ['cheikh', 'dani', 'woury', 'moussa']

function App() {
  
  return (
    <div>
      <h1>Hello {getTitle('World')}</h1>
      <ul>
        {array.map((item, index) => {
          <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App
