import type { SessionContextState } from 'types/contexts/Session';

const useProcessContextState = (): SessionContextState => ({
  theme: {
    colors: {
      primary: '',
      windowBg: '',
    },
  },
});
export default useProcessContextState;
