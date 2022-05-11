import dynamic from 'next/dynamic';

const processDirectory = {
  HelloWorld: {
    component: dynamic(() => import('components/apps/HelloWorld')),
  },
};
export default processDirectory;
