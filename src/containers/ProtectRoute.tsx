import { useAuth } from '../contexts/auth';

import Protect from '../containers/Protect';

const ProtectRoute = ({ children }) => {
  const { user } = useAuth();

  return <Protect user={user}>{children}</Protect>;
};

export default ProtectRoute;
