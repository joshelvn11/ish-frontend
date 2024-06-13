"use client";

import React, { useState, useContext } from "react";
import { useAppContext } from "@/context";

const Dashboard = () => {
  const { state } = useAppContext();

  return (
    <div>
      {state.userId}{" "}
      {state.userId ? `Welcome ${state.userId}` : "Please log in"}
    </div>
  );
};

export default Dashboard;
