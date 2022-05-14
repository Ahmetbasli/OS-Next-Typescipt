import dynamic from 'next/dynamic';
import type { Processes } from 'types/contexts/Process';

// TODO: check types before pre-commit

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
  },
};
export default processDirectory;
