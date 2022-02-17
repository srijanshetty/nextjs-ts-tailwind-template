import { useEffect } from 'react';
import { MdCancel } from 'react-icons/md';

type modalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  showClose?: boolean;
  onClose: () => void;
  title?: string;
  containerClass?: string;
  widthClass?: string;
};

export default function Modal({
  children,
  isOpen,
  showClose = true,
  onClose,
  title,
  containerClass = '',
  widthClass = '',
}: modalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.height = '';
      document.body.style.overflowY = '';
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
      <div
        className="absolute w-screen h-screen bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div
        className={`relative max-h-screen p-6 pt-0 overflow-y-auto bg-white rounded-lg md:flex md:flex-col md:items-center md:justify-center ${containerClass} ${
          widthClass ? widthClass : 'w-11/12 md:w-1/3'
        }`}
      >
        <div className="flex items-center justify-between w-full h-16 py-8">
          {title ? <h3 className="">{title}</h3> : <h3></h3>}
          {showClose && (
            <MdCancel
              className="w-8 h-8 cursor-pointer text-gray-4"
              onClick={onClose}
            />
          )}
        </div>
        <div className="w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
