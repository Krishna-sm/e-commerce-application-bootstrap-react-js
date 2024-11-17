 
import { createRoot } from 'react-dom/client'
import './index.css' 
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')!).render(
 
    <>
    <ToastContainer/>
      <RouterProvider router={router} />
    </>
 
)
