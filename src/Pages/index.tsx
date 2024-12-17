import { AppLayout } from "@/components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Home() {
  return (
    <div>
      <div className="w-3/4 bg-slate-500">
        <h1>w</h1>
      </div>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>

      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>

      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>

      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
      <h2 className="text-green-500">Home Page</h2>
    </div>
  );
}

export default App;
