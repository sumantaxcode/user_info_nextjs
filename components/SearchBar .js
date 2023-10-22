"use client";
import React, { useState } from "react";
import { Paper, InputBase, IconButton, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          margin: "20px 10px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Link href="/create">
        <Button variant="contained" color="primary">
          Create
        </Button>
      </Link>
    </Box>
  );
};

export default SearchBar;
