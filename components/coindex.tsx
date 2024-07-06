import React, { useState, useEffect } from "react";
import axios from "axios";

interface WelcomeProps {
  message: string;
}

interface ApiData {
  id: number;
  title: string;
}

const WelcomeComponent: React.FC<WelcomeProps> = ({ message }) => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiData>(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold">{message}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl">{message}</h2>
        </div>
      )}
    </div>
  );
};

export default WelcomeComponent;
