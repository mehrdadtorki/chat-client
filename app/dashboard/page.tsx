// dashboard/page.tsx

import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to your dashboard! Here’s where your main content will go.</p>
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="aspect-video h-12 w-full rounded-lg bg-muted/50"
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
