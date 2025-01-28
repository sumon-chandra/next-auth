import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h3>Settings Page</h3>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button variant="outline">Sign Out</Button>
      </form>
    </div>
  );
};

export default SettingsPage;
