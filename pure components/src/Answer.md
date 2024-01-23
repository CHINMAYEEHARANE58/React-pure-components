Question: Which out of the two components (which are performing the same functionality) is performing better and how?

Ans: 

Pure Component:
1) It re-renders only if the actual values of props or state have changed, not if new objects with the same values are passed.
2) It helps in optimizing the rendering process by avoiding unnecessary re-renders when the data hasn't changed.
3) A pure component is always class-based.

Simple Component:
1) A it re-renders whenever its render method is called, regardless of whether the props or state have changed.
2) A simple component can be either class-based or functional.
3) Simple components can be used when we need more manual control over when the component should re-render.

The key distinction is that pure components come with an automatic optimization mechanism to prevent unnecessary re-renders, while simple components require manual implementation of this optimization if needed. Pure components are better as there are built-in performance benefits, especially in scenarios where props or state changes infrequently.






