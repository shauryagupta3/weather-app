import React, { Component } from "react";

export default async function Test() {
  const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ec66f04a00msh62431d81eaef80fp16d2d2jsn6afb5216ecea",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

