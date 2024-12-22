"use client";
import React, { useEffect, useState } from "react";
import aboutDB from "../database/AboutDB.json";

export interface AboutDb {
  name: string;
  degree: string[];
  about_description: string;
  age: string;
  email: string;
  phone_number: string;
  address: string;
  location: string;
  profile_pic: string;
}
const about = () => {
  const [aboutData, setAboutData] = useState<AboutDb | null>(null);
  useEffect(() => {
    setAboutData(aboutDB);
  }, []);
  return <div>about {aboutData?.email}</div>;
};

export default about;
