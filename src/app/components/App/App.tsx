import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Layout} from "@app/components/App/Layout";


export const App: FC = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </>
  );
};
