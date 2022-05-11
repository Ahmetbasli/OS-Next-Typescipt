import type { NextComponentType } from 'next';

type Process = {
  Component: any;
};

type Processes = {
  [id: string]: Process;
};

export default Processes;
