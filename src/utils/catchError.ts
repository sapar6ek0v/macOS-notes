import { toast } from 'react-toastify';

const customId = 'custom-id';

export const errNotify = (message: string) => {
  toast.error(message, {
    toastId: customId,
    position: toast.POSITION.TOP_RIGHT,
    autoClose: false,
    pauseOnFocusLoss: false,
  });
};

export const catchError = (err: unknown) => {
  if (err instanceof Error) {
    errNotify(err.message);
  } else {
    errNotify('Something went wrong!');
  }
};
