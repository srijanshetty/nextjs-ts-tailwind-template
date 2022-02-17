import { toast } from 'react-toastify';
import { MdCheckCircle as CheckCircle } from 'react-icons/md';
import { MdCancel as CancelCircle } from 'react-icons/md';

export const showSuccess = (message: string) => {
  toast.dark(
    <div className="flex items-center">
      <CheckCircle className="text-green w-6 h-6 mr-2" /> {message}
    </div>
  );
};

export const showError = (message: string) => {
  toast.dark(
    <>
      <CancelCircle className="text-red w-6 h-6 mr-2" />
      {message}
    </>
  );
};
