import Dashboard from "@/components/dashboard-02";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Dashboard>{children}</Dashboard>
    </div>
  );
};
export default DashboardLayout;
