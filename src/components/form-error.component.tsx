interface FormErrorProps {
  message: string | null;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return <p className="text-red-400 font-semibold">{message}</p>;
}
