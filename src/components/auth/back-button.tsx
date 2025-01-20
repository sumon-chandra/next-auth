import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}
export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <div>
      <Button asChild variant="link">
        <Link href={href} className="text-muted-foreground text-sm hover:underline">
          {label}
        </Link>
      </Button>
    </div>
  );
};
