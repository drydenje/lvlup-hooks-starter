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

        `<div className="main-wrapper" ref={ref}>`

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

## useReducer

- an alternative to useState, when state management becomes more complex


      import { useReducer } from 'react';

      const initialState = { count: 0 };

      function reducer(state, action) {
        switch (action.type) {
          case "add":
            return {
              count: state.count + action.value
            };
            default:
              throw new Error();
        }
      }

      const Counter = () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
          `<div>
            <h3>{state.count}</h3>
            <button onClick{() => dispatch({type: "add", value: 10})}>+</button>
          </div>`
        );
      }

      export default Counter;

## useMemo

- used when an expensive function (takes time/resources to run) doesn't need to be repeatedly called on re-render
- takes a function, and something to watch if it changed

      import { useMemo } from 'react';

      const reversedWord = word => {
        return word.split("").reverse().join("");
      }

      const title = "A normal title";
      const reversedTitle = useMemo(() => reversedWord(title), [title]);

      <h1>{reversedTitle}</h1>

## useDebugValue

- used by library authors who plan on distributing their work and want to provide hooks within it
- exposes debug values to the user
- probably won't need these

      import { useDebugValue } from 'react';

      function useTitleInput(initialValue) {
        const [value, setValue] = useState(initialValue);
        useEffect(() => {
          document.title = value;
        });

        useDebugValue(value.length > 0 'Full' : 'Empty');

        return [value, setValue];
      }

##
