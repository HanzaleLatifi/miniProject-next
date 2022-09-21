import React from "react";
import Grid from "@mui/material/Grid";
import ColumnCard from "../components/ColumnCard";
import Header from "../components/Header";
import { useState } from "react";
function HomePage() {
  return (
    <div className="bg-gray-50 ">
      <Header />
      <main className="container max-w-screen-lg md:h-screen  bg-gray-50 mx-auto p-4">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ColumnCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColumnCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColumnCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColumnCard />
          </Grid>
        </Grid>
      </main>
      <footer className="text-center bg-red-900 text-white py-3">developed by <span>Hanzale Latifi</span></footer>
    </div>
  );
}

export default HomePage;
