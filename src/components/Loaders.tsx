import React, { FC } from 'react';
import Loader from 'react-loader-spinner';

interface LoadersProps {
  className?: string,
}

const Loaders: FC<LoadersProps> = (props) => {
  return (
    <div className={props.className}>
          <Loader 
            type="Puff"
            color="#ff4400"
            height={100}
            width={100}
          />
        </div>
  );
};

export default Loaders;
