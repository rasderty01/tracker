/* eslint-disable @next/next/no-async-client-component */

import ComponentTable from "@/components/Data-Table/ComponentTable";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center my-5">
      <ComponentTable />
    </div>
  );
}
