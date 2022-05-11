import type { NextComponentType } from 'next';

type Process = {
  Component: NextComponentType;
};

type Processes = {
  [id: string]: Process;
};

export default Processes;
