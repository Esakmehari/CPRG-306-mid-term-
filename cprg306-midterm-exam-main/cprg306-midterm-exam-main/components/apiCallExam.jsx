"use client";
import React, { useEffect, useState } from "react";

const APICallExam = () => {
  const [response, setResponse] = useState(null);

  const handleButtonClick = async () => {
    try {
      const passcode = "ehen2rfow"; 
      const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`;
      const response = await fetch(url);
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error occurred during API call:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-100 p-2 rounded-md border border-red-500"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
      {response && (
        <div>
          <p>API Response:</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default APICallExam;