interface FormSuccessProps {
  message: string | null;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;
  return <p className="text-green-400 font-semibold">{message}</p>;
}
