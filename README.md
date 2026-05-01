# reactJS
Method 1: Using Vite (Recommended for SPAs)
Vite is the standard replacement for create-react-app because it is significantly faster and easier to maintain. 
YouTube
YouTube
 +1
Initialize Project: Run the following command in your terminal:
bash
npm create vite@latest my-react-app -- --template react
(Note: Use react-ts instead of react if you want TypeScript support.)
Navigate and Install:
bash
cd my-react-app
npm install
Start Development Server:
bash
npm run dev
Your app will typically be available at http://localhost:5173. 
YouTube
YouTube
 +2

 
# Method 2: Using a Framework (Next.js or React Router)
For production-grade apps that require routing, data fetching, or server-side rendering, use a full-stack framework. 
React
React
 +1
Next.js: The most popular choice for full-stack React. Create a project using the Next.js Installation Guide:
bash
npx create-next-app@latest
React Router (v7): For projects focused on client-side routing:
bash
npx create-react-router@latest
 
React
React
 +2

# Method 3: Online Sandboxes (No Setup)
If you want to start coding immediately without installing anything locally, use an online playground: 
CodeSandbox: Provides a complete IDE experience in the browser.
StackBlitz: Fast, WebContainer-based React environments. 
CodeSandbox
CodeSandbox
 +4



-----------------------------------------------------------------------------------
**InterView Question**
-------------------------------------------------------------------------------
**What are React Hooks?**
Hooks are built-in functions introduced in React 16.8 that allow you to use state and other React features (like lifecycle methods) inside functional components without writing a class.

**What are the two main Rules of Hooks?**
According to the official React documentation, you must:
****	Call Hooks at the Top Level: Never call them inside loops, conditions, or nested functions to ensure they execute in the same order every render.

****	Call Hooks from React Functions: Only call them from React functional components or other custom Hooks.

**Why were Hooks introduced?**
They solve problems like "wrapper hell" caused by Higher-Order Components (HOCs) and Render Props, allow for better code reuse, and simplify complex components that were previously difficult to break down. 

Core Hooks & Usage
•	useState vs useReducer
	useState: Best for simple state values (strings, booleans, simple numbers).
	useReducer: Preferred for complex state logic involving multiple sub-values or when the next state depends on the previous one (similar to Redux).


**Explain useEffect and its dependency array.**
useEffect handles side effects like data fetching or DOM updates. Its behavior is determined by the dependency array:
****	No array: Runs after every render.
****	Empty array ([]): Runs once after the initial render (like componentDidMount).
****	With variables ([prop, state]): Runs only when those specific values change.



**What is the purpose of useRef?**
It creates a mutable object that persists for the full lifetime of the component. It is commonly used to access DOM elements directly or to store mutable values that do not trigger a re-render when changed

**Performance Optimization**
•	useMemo vs useCallback
****	useMemo: Memoizes the result of a calculation to avoid expensive re-computations on every render.
****	useCallback: Memoizes the function instance itself, which is useful when passing functions to optimized child components to prevent unnecessary re-renders.


**How does useContext help with performance?**
It allows you to share data globally across the component tree without "prop drilling," though you should be careful as any change to the context value will re-render all consuming components

**What are Custom Hooks?**
A custom Hook is a JavaScript function whose name starts with "use" and that calls other Hooks. They are used to extract and reuse stateful logic across multiple components.


**useEffect vs useLayoutEffect**
****	useEffect: Runs asynchronously after the browser has painted the screen.
****	useLayoutEffect: Runs synchronously before the browser paints, which is useful for measuring DOM elements to prevent visual flickers.




