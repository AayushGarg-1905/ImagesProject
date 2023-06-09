import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './context';

import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
const queryClient=new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
// we add te query client [arameter inside appProvider because we want to access some value form the global context]
<AppProvider>
<QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={true}/>
</QueryClientProvider>
    </AppProvider>


);
