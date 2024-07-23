###
```
  Whats wrong with the above application ?
    we are passing the state from one component to another...
    In the above application we made a stat list and we passed in the todo list component and we we are updating,deleting the list from here by passing the functions to each todo.

    so whats the problem is- this is  small application and to update the parent state we have to pass it to the child components so we a lot of choices like context api, reducers and redux lets learn one by one.
We use context instead of simple state management to provide a way to share values (like data or functions) across the entire component tree without having to pass props down manually at every level. Context is particularly useful for global state that many components need access to, reducing the complexity and improving maintainability of the code.
```
