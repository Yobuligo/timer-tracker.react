import { PublicPage } from "../components/pages/publicPage/PublicPage";
import { Dashboard } from "../features/dashboard/Dashboard";

export const DashboardPage: React.FC = () => {
  return (
    <PublicPage>
      <Dashboard />
    </PublicPage>
  );
};
