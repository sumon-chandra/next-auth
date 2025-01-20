import { BsExclamationTriangle } from "react-icons/bs";

export const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/20 p-3 rounded-sm flex items-center gap-x-2 text-sm text-destructive">
      <BsExclamationTriangle className="size-4" />
      <p>{message}</p>
    </div>
  );
};
