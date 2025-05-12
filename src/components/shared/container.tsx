import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='px-12 py-15 md:px-40 md:py-15 max-w-3xl mx-auto'>
      {children}
    </div>
  );
};

export default Container;