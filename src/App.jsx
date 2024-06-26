import * as React from 'react';
import { useEffect } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || '');

  const stories = [
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
    },
  ];

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchStories = stories.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchStories} />
    </div>
  );
};

const Search = ({search, onSearch}) => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input value={search} id="search" type="text" onChange={onSearch} />
    </div>
  );
};

const List = ({list}) => (
  <ul>
    {list.map(({objectID, ...item}) => (
      <Item key={objectID} {...item} />
    ))}
  </ul>
);

const Item = ({ title, url, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

export default App;
