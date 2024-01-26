import React, { useState } from "react";
import axios from "axios";
import { pipeline } from "@xenova/transformers";
import { MarianMTModel } from "@xenova/transformers";

const model = new MarianMTModel();
const translate = pipeline(model);

const Chatbot = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    setChatHistory([...chatHistory, { type: "user", message: inputMessage }]);
    setInputMessage("");

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: inputMessage,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const botResponse = await response.json();
      setChatHistory([...chatHistory, { type: "bot", message: botResponse }]);
    } catch (error) {
      console.error("Error fetching response from Hugging Face API", error);
    }
  };

  const URL = "https://api-inference.huggingface.co/models/tvillight/l_hchat";
  return <div></div>;
};

export default Chatbot;
