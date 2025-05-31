/// Admin.jsx
import React from "react";
//import HomepageCards from "../Admin/Components/HomepageCards.jsx";

/**
 * Admin dashboard with card links to different admin actions
 */
const Admin = () => {
  const cardData = [
    {
      title: "Add new airline",
      description: "Add new airline to the database",
      to: "/admin/add-airline",
    },
    {
      title: "Add new flight",
      description: "Add new flight to the database",
      to: "/admin/add-flight",
    },
    {
      title: "Verify ticket",
      description: "Verify ticket and update status",
      to: "/admin/verify-ticket",
    },
  ];

  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="mt-10 flex flex-wrap gap-5">
        {cardData.map((card, index) => (
          <HomepageCards
            key={index}
            title={card.title}
            description={card.description}
            to={card.to}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
