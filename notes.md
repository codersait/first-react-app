- when building applications with React, we build a bunch of independent, isolated, and reusable components, and then compose them to build complex user interfaces.
- every React application is essentially a tree of components.
- each component is a piece of UI. We can build these components in isolation, and then put them together to build complex UI's.
- **State** is the data that we want to display when the component is rendered, and the render method is responsible for describing what the UI should look like.
- The output of render method is a **react element**, which is a simple plain JavaScript object that reacts to a DOM element.It's not a real DOM element, it's just a **plain JavaScript object**.
- React keeps a lightweight representation of the DOM in memory which we refer to as the **virtual DOM**.
- When we change the state of a component, we get a new react element. React will then compare this element and it's children with the previous one, it figures out what has changed, and then it will update a part of the real DOM to keep it in sync with the virtual DOM.
- You simply change the state of our components and React will automatically update the DOM to match that state.
- why this library is called React, because when the state changes, React essentially reacts to the state change and updates the DOM.
- React takes care of **rendering the view** , and making sure the view in sync with the state.
- jsx:javaScript XML -> neither string nor html
- Babel takes jsx syntax and convert it to plain javaScript code.
- Learning structure
  - Components
  - Tables
  - Forms
  - Routing
  - HTTP Services
  - Auth
  - Deployment