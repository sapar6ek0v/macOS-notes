export const catchError = (err: unknown, setError: (error: string) => void) => {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError('Something went wrong!');
  }
};
