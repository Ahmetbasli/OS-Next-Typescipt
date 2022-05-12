import type { SessionContextState } from 'types/contexts/Session';

const useProcessContextState = (): SessionContextState => ({
  theme: undefined, // TODO: load theme from localstorage
});
export default useProcessContextState;
