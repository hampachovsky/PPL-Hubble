import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Home() {
  return <h2 className="bg-slate-600 text-green-500">Home Page</h2>;
}

function About() {
  return <h2 className="bg-slate-700 text-cyan-500">About Page</h2>;
}

export default App;
