# Levelup Tutorials - React Hooks for everyone

## useState

- can be used to access state from a functional component.

  import React, { useState } from 'react';

  const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

      return (
        <div className="main-wrapper">
          <h1>Level Up Dishes</h1>
          <h3>{name}</h3>
          <input type="text" onChange={e => setName(e.target.value)} value={name} />
        </div>
      )

  }

## useEffect

- similar to the lifecycle methods for classes
- runs after every completed render


      import React, { useEffect } from 'react';

      useEffect(() => {
        document.title = name;
      });

## useRef

- used for modifying a child (instance of a react component or a DOM element)
- an escape hatch

  - managing focus, text selection, or media playback
  - triggering imperative animations
  - integrating with third-party DOM libraries
  - **Avoid using refs for anything that can be done declaratively**

    import {useRef} from 'react';

    // declare in the arrow function
    const ref = useRef();

    // in the element you want to reference

    <div className="main-wrapper" ref={ref}>

## createContext

- used to share data that can be considered 'global' for a tree of react components
- use when some data needs to be accessible by many components at different nesting levels
- apply it sparingly because it makes component reuse more difficult
- If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.


    // app.js
    import { createContext } from 'react';

    export const UserContext = createContext();

    <UserContext.Provider
    value={{
            user: true
          }}

    >

          //Content

    </UserContext.Provider>


        // component
        import { UserContext } from './App';

        const Toggle = () => {
          const userInfo = useContext(UserContext);
          if (!userInfo.user) return null;
        }
