'use client';

import React from 'react';
import { LifeLine } from 'react-loading-indicators';
import { LoaderContainer } from './Loader.styles';

export const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <LifeLine color="#316fcc" size="medium" text="" textColor="" />
    </LoaderContainer>
  );
};
