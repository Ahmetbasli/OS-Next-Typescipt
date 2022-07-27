import { useMemo } from 'react';
import type { ProcessContextState, Processes } from 'types/contexts/Process';

const useProcessContextState = (
  startUpProcesses: Processes
): ProcessContextState => {
  const processes = useMemo(
    () => ({ processes: startUpProcesses }),
    [startUpProcesses]
  );

  return processes;
};

export default useProcessContextState;
