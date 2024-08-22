import './App.scss';

import { 
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import Root from './routes/root/root';
import Green from './routes/canvas/green/green'
import GradPhotos from './routes/canvas/graduation-photos/grad-photos';
import ChapelHill from './routes/canvas/ch-@-night/ch';
import About from './routes/canvas/about/About';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        index: "/",
        element: <Green />,
      },
      {
        path: "graduation-photos",
        element: <GradPhotos />,
      },
      {
        path: "ch-at-night",
        element: <ChapelHill />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}