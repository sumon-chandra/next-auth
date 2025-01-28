import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h3>Settings Page</h3>
      {JSON.stringify(session)}
    </div>
  );
};

export default SettingsPage;
