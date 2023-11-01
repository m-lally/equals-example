import React, { useState, useEffect } from "react";
import "../../components/labs.css";
import "../../components/masonry.css";

// Define the component's state type
interface State {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const Data: React.FC = () => {
  const [state, setState] = useState<State>({
    data: null,
    loading: true,
    error: null,
  });

  // Define the API endpoint
  const baseUrl = "https://61c32f169cfb8f0017a3e9f4.mockapi.io";
  const apiUrl = `${baseUrl}/api/v1/contacts `;

  useEffect(() => {
    const fetchData = () => {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setState({ data, loading: false, error: null });
        })
        .catch((error) => {
          setState({ data: null, loading: false, error: error.message });
        });
    };

    fetchData();
  }, [apiUrl]);

  const { data, loading, error } = state;

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <div className="wrapper">
            <div className="masonry">
              {data.map((contact: any) => (
                <div className="brick">
                  <div>{contact.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Data;
