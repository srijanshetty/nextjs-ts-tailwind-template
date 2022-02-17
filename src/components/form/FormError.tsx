import dynamic from 'next/dynamic';

const ErrorMessage = dynamic(() => import('./ErrorMessage'), {
  ssr: false,
  loading: () => null,
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(msg) => <span className="relative text-sm text-red">{msg}</span>}
    />
  );
};

export default FormError;
