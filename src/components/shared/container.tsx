import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='px-4 sm:px-6 md:px-12 lg:px-40 py-8 sm:py-12 md:py-15 max-w-3xl mx-auto'>
      {children}
    </div>
  );
};

export default Container;