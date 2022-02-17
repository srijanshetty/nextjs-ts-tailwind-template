import ButtonLoader from '../icons/buttonLoader';

type Props = {
  confirmText: string;
  showConfirmText: boolean;
  id: string;
  className?: string;
  onClick?: () => void;
};

const ButtonWithProgress = ({
  confirmText,
  showConfirmText,
  className,
  id,
  onClick = null,
}: Props) => {
  if (showConfirmText) {
    if (!onClick) {
      return (
        <button
          id={id}
          className={`w-full btn-primary ${className}`}
          type="submit"
        >
          {confirmText}
        </button>
      );
    } else {
      return (
        <button
          id={id}
          className={`w-full btn-primary ${className}`}
          onClick={onClick}
        >
          {confirmText}
        </button>
      );
    }
  } else {
    return (
      <button id={id} className={`w-full btn-primary disabled ${className}`}>
        <ButtonLoader />
      </button>
    );
  }
};

export default ButtonWithProgress;
