import useSessionContextState from 'hooks/useSessionContextState';
import type { FC } from 'react';
import React, { createContext } from 'react';
import type { SessionContextState } from 'types/contexts/Session';
import { initialContextSessionState } from 'utils/initialContextstates';

export const { Provider, Consumer } = createContext<SessionContextState>(
  initialContextSessionState
);

export const SessionProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => <Provider value={useSessionContextState()}>{children}</Provider>;

export const SessionConsumer = Consumer;
