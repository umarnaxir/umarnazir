'use client';

import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader/Loader';
import { PageContent } from './components/PageContent/PageContent';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <PageContent />;
}
