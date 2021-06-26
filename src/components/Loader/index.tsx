import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
   <>
      <ContentLoader
         speed={3}
         width="600px"
         height={500}
         viewBox="0 0 1000 1000"
         backgroundColor="#222F3F"
         foregroundColor="#e3e3e3"
      >
         <rect x="0" y="0" rx="16" ry="16" width="600" height="400" />
      </ContentLoader>
   </>
);

export default Loader;
