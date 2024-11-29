import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

export interface AuthenticateProps {
  anonymous?: boolean;
  children: ReactNode;
  redirectTo: string;
}

function Authenticate(props: AuthenticateProps) {
  const { children, redirectTo, anonymous } = props;

  const isAuthenticated = false;

  const keepOnCurrentRoute =
    (isAuthenticated && !anonymous) || (!isAuthenticated && anonymous);

  return keepOnCurrentRoute ? children : <Navigate replace to={redirectTo} />
}

export default Authenticate;
