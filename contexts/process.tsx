import type { FC } from 'react';
import React from 'react';
import processDirectory from 'utils/processDirectory';

const processLoader: FC = () => (
  <>
    {Object.entries(processDirectory).map(([id, { Component }]) => (
      <Component key={id} />
    ))}
  </>
);

export default processLoader;
