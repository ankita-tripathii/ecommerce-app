import { useState, createContext } from 'react';

const Context = createContext();

//how to change conext data from user events
export function ContextProvider(props) {
  const [firstName, setFirstName] = useState('Ankita');
  const [lastName, setLastName] = useState('Tripathi');
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Context.Provider value={{ firstName, lastName, isAuth }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
