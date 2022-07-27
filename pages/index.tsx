import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';
import { getStartupProcesses } from 'utils/processDirectory';

export default function Index(): ReactElement {
  return (
    <ProcessProvider startupProcesses={getStartupProcesses()}>
      <ProcessLoader />
    </ProcessProvider>
  );
}
