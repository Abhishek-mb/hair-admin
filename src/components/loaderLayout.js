// Layout.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from './loader';

const LoaderLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {loading ?'':children}
      {/* {children} */}
    </div>
  );
};

export default LoaderLayout;
