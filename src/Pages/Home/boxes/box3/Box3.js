import React from "react";
import "./Box3.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Box3 = () => {
  const content = [
    {
      title: "Supreme Court to Revisit Legislative Immunity on Bribery",
      date: "22-09-2023",
    },
    {
      title: "Editorial on Three years of the Abraham Accords",
      date: "25-09-2023",
    },
    {
      title: "Rapid Fire Current Affairs (22nd September, 2023)",
      date: "25-09-2023",
    },
    {
      title: "Editorial on Three years of the Abraham Accords",
      date: "22-09-2023",
    },
    {
      title: "Editorial on Three years of the Abraham Accords",
      date: "22-09-2023",
    },
    {
      title: "Editorial on Three years of the Abraham Accords",
      date: "22-09-2023",
    },
    {
      title: "Editorial on Three years of the Abraham Accords",
      date: "22-09-2023",
    },
    {
      title: "Editorial on Three years of the Abraham Accords",
      date: "20-09-2023",
    },
  ];

  return (
    <>
      <div className="box3">
        <div className="header_3">
          <StarBorderIcon />
          <p>What's New</p>
        </div>
        <span className="border"></span>
        <div className="contents">
          {content.map((item, index) => {
            return (
              <p key={index}>
                {item.title}
                <span className="full_date">{item.date}</span>
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Box3;
