import React from 'react';
import {
   BrowserRouter,
   Route,
   Routes as RouterDomRoutes,
} from 'react-router-dom';
import { ExplanationPage } from './ExplanationPage';
import { HomePage } from './HomePage';
import { TypingPage } from './TypingPage';

export const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <RouterDomRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="typingPage" element={<TypingPage />} />
            <Route path="explanationPage" element={<ExplanationPage />} />
         </RouterDomRoutes>
      </BrowserRouter>
   );
};
