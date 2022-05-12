import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';

export default function Index(): ReactElement {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
}
