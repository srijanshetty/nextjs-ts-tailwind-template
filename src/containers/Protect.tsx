import { useRouter } from 'next/router';

import { PUBLIC_ROUTES } from '../routes';

const Protect = ({ children, user }) => {
  const router = useRouter();

  // If not authorized and lands on private page goto login
  if (!user && !PUBLIC_ROUTES.includes(router.route)) {
    router.replace('/dashboard');
    return <div></div>;
  }

  return children;
};

export default Protect;
