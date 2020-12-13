import React, { ChangeEvent, useState , FC } from 'react';
import './App.css';

interface AppProps {
sendSearchQuery(): void;
}

// type AppProps = {
// sendSearchQuery(): void;
// }
const App: FC<AppProps> = ({sendSearchQuery}) => {
  const [searchValue , setSearchValue] = useState<string>();

  const onSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  const search = () => {
    sendSearchQuery();
  }

  return (
    <div>
      <h1>
        Typscript Learning
      </h1>
      <input type="text" onChange={onSearchInput} name="search" value={searchValue} />
      <button onClick={search} >Search</button>
    </div>
  )
}

export default App;
