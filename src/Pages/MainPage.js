import React from "react";
import TopNavbar from "../Components/TopNavbar";
import Picture from "../Components/Picture";
import { InfiniteMovingCards } from "../Components/CertificateCards";

const items = [
  {
    quote: "This is a sample quote.",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    quote: "Another sample quote.",
    name: "Jane Smith",
    title: "Project Manager",
  },
  // Add more items as needed
];

export default function MainPage() {
  return (
    <div>
      <TopNavbar />
      <Picture />
      <InfiniteMovingCards items={items}/>
    </div>
  );
}
