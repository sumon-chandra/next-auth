import { BsCheckCircle } from "react-icons/bs";

export const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-sm flex items-center gap-x-2 text-sm text-emerald-500">
      <BsCheckCircle className="size-4" />
      <p>{message}</p>
    </div>
  );
};
