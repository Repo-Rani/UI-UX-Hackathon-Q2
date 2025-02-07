"use client";
import React, { useState, useEffect } from "react";
import UserGuideList from "@/components/userGuide/UserGuideList";
import { fetchGuides } from "@/components/userGuide/FetchGuides";
import GuideDetails from "@/components/userGuide/GuideDetails";
import { UserPageGuide } from "../../../types/type";
import { GuideList } from "../../../types/type";
import { Guide } from "../../../types/type";
import Banner from "@/components/banner/Banner";

const UserGuidePage: React.FC = () => {
  const [guides, setGuides] = useState<UserPageGuide[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null); 
  useEffect(() => {
    const getGuides = async () => {
      const data = await fetchGuides();
      setGuides(data);
    };
    getGuides();
  }, []);

  const formattedGuides: GuideList[] = guides.map(({ title, _id }) => ({
    title,
    slug: { current: _id }, 
  }));

  const handleGuideClick = (guide: GuideList) => {
    const fullGuide = guides.find((g) => g._id === guide.slug.current);
    if (fullGuide) {
      setSelectedGuide({
        title: fullGuide.title,
        content: fullGuide.content, 
        slug: { current: fullGuide._id },
      });
    }
  };
  return (
    <>
     <div className="">
        <Banner name="User Guide" mainHeading="User Guides" />
      </div>
   
    <div className=" container mx-auto px-4 pt-36">
      {!selectedGuide ? (
        <UserGuideList guides={formattedGuides} onGuideClick={handleGuideClick} />
      ) : (
        <GuideDetails guide={selectedGuide} onBack={() => setSelectedGuide(null)} />
      )}
    </div>
    </>
  );
};

export default UserGuidePage;

