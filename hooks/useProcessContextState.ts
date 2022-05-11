import { useMemo } from 'react';
import type {
  ProcessContextState,
  Processes,
} from 'types/components/contexts/process';
import processDirectory from 'utils/processDirectory';

const useProcessContextState = (
  startUpProcesses: Processes = processDirectory
): ProcessContextState => {
  const processes = useMemo(
    () => ({ processes: startUpProcesses }),
    [startUpProcesses]
  );

  return processes;
};

export default useProcessContextState;
