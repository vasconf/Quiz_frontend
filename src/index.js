import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider} from "react-query"
import { queryClient } from '../src/api/ReactQuery';  
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
 <QueryClientProvider client={queryClient}>
  <App className="container-fluid"/>
 </QueryClientProvider>
</React.StrictMode>

  
);

