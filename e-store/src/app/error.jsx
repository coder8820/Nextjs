"use client";
import Container from "@/components/Container";
import React from "react";

export default function Error() {
  return (
    <div>
      <Container
        className={`grid grid-cols-5 h-screen justify-center m-auto items-center`}
      >
        <h1 className=" text-3xl font-bold text-red-600">
          Something went wrong!
        </h1>
      </Container>
    </div>
  );
}
