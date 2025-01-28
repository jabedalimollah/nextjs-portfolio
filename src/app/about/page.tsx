"use client";
import React from "react";

import dynamic from "next/dynamic";
import SkillsSection from "@/components/skillsSection";
import EducationSection from "@/components/educationSection";
import CertificationSection from "@/components/CertificationSection";
import { useSelector } from "react-redux";
import CalendarAndAgeCalculator from "@/components/calendarAndAgeCalculator";

const PersonalDetails = dynamic(() => import("@/components/personalDetails"), {
  ssr: false,
});

const about = () => {
  const isDarkmode = useSelector((state: any) => state.theme.darkmode);
  return (
    <div
      className={`w-full flex flex-col items-center ${
        isDarkmode ? "bg-slate-900" : "bg-purple-50"
      }`}
    >
      {/* ==================== Personal Details Section ================ */}
      <PersonalDetails />
      {/* ==================== Calendar And Age Calculator Section ================ */}
      <CalendarAndAgeCalculator />
      {/* ==================== Skill Section ================ */}
      <SkillsSection />
      {/* ==================== Education Section ================ */}
      <EducationSection />
      {/* ==================== Certification Section ================ */}
      <CertificationSection />
    </div>
  );
};

export default about;
