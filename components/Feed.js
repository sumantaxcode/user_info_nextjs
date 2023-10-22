"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar ";
import { Paper, InputBase, IconButton, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Feed = () => {
  const router = useRouter();

  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    router.push(`/profile/${searchTerm}`);
  };

  return (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Feed;
