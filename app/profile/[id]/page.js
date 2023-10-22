"use client";
import DisplayInfoPage from "@/components/DisplayInfoPage ";
import React, { useEffect, useState } from "react";

const Profile = ({ params }) => {
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/user/${params?.id}`);
      const data = await response.json();

      setUserDetail(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <div>
      <DisplayInfoPage formData={userDetail} />
    </div>
  );
};

export default Profile;
