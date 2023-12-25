import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Toaster />

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
