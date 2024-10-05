import { 
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import Root from './components/root/root';

import Green from './components/canvas/green/green'
import GradPhotos from './components/canvas/graduation-photos/grad-photos';
import ChapelHill from './components/canvas/ch-@-night/ch';
import Tokyo from './components/canvas/tokyo/tokyo';

import PML from './components/canvas/pml-vis/pml-vis';

import About from './components/canvas/about/About';

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
        path: "tokyo",
        element: <Tokyo />
      },
      {
        path: "PML-Vis",
        element: <PML />
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