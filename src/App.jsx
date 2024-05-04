// import * as React from 'react';
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]  

const App = () => {
  
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search/>

      <hr/>

      <Lists/>
    </div>
  )
}

const Lists = () => {
  return (
    <ul>
        {list.map((item) => (
          <li key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>Auteurs: {item.author} </span>
            <span>Points: {item.points} </span>
            <span>Comments: {item.num_comments} </span>
          </li>
        ))}
    </ul>
  )
}

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }
  
  return(
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange}/>
    </>
  )
}

export default App
