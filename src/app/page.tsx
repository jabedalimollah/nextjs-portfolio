"use client";
import homeDB from "./database/HomeDB.json";
export interface HomeDB {
  text: string;
  static_text: string;
  text_group: string[];
  home_description: string;
  download_resume_text: string;
  instagram: string;
  facebook: string;
  github: string;
  linkedin: string;
  youtube: string;
  x: string;
}

export default function Home() {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}
