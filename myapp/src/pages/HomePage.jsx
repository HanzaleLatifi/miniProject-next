import React from "react";
import Grid from "@mui/material/Grid";
import ColumnCard from "../components/ColumnCard";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="bg-gray-50">
      <section className="container max-w-screen-lg bg-gray-50 mx-auto p-4">
        <Header />
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
      </section>
    </div>
  );
}

export default HomePage;
