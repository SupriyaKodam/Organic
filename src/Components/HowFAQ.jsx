import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Shopping from './Shopping';
import Footer from './Footer';

const HowFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

  const items = [
    {
      Quetion: "Where does your produce come from?",
      answer: "All of our produce is sourced from certified organic farms that are located within a 60-mile radius of Buffalo, New York. Our goal is to promote accessible, affordable produce and support local farms in doing so. We want to help keep more revenue in our community.",
    },
    {
      Quetion: "Is this food different from what's in grocery stores?",
      answer: "We have partnered with several farms in order to provide a wide array of fresh produce to you. We offer fruits, vegetables, mushrooms, herbs, and other specialty items such as honey and maple syrup. Compared to grocery store produce, our items are more affordable and are GMO and pesticide-free.",
    },
    {
      Quetion: "Where do I pick up my order?",
      answer: "If you don't want your order delivered to you, you can choose to pick it up at our designated location. Pick up time is Tuesday 11am - 2pm.",
      text1: "Trinity Church",
      text2: "371 Delaware Ave",
      text3: "Buffalo, NY 14202",
    },
    {
      Quetion: "Do I get to choose what items I receive each week?",
      answer: "Yes! One of our primary goals is to give customers full control over their produce order. This means that you can choose what you want and how much of it you want, making it easy to shop based on your personal preferences and avoid any allergies or dislikes.",
    },
    {
      Quetion: "Where do you deliver to?",
      answer: "We deliver throughout Erie County the same day that our local farms deliver fresh produce to our designated location.",
    },
  ];

  // Toggle function to handle opening and closing of FAQs
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between opening and closing the answer
  };

  return (
    <div>
    <div className="flex flex-col items-center justify-center container mx-auto bg-orange-50 mb-40">
      <h1 className="text-green-700 text-3xl md:text-5xl font-bold mb-5">Frequently asked questions</h1>
      <img src="./Images/yellow-border.WEBP" className="md:w-60 mb-3" />
      <div className="flex flex-col items-start justify-start w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full mb-5 px-5 py-3 border-b border-gray-300"
          >
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h1 className="text-2xl text-gray-600">{item.Quetion}</h1>
              <div className="flex items-center">
                {openIndex === index ? (
                  <ExpandLessIcon style={{ fontSize: 40 }} />
                ) : (
                  <ExpandMoreIcon style={{ fontSize: 40 }} />
                )}
              </div>
            </div>
            {/* Display the answer if the FAQ item is open */}
            {openIndex === index && (
              <div className="px-5 py-3 text-gray-700">
                <p className='text-lg font-serif'>{item.answer}</p>
                {item.text1 && (
                  <div>
                    <p className='text-lg font-bold'>{item.text1}</p>
                    <p className='text-lg font-bold'>{item.text2}</p>
                    <p className='text-lg font-bold'>{item.text3}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <h className='text-center text-lg md:text-xl font-sans p-10'>We deliver throughout Erie County the same day that our local farms deliver fresh produce to our designated location.</h>
    </div>
    <Shopping/>
    <Footer/>
    </div>
  );
};

export default HowFAQ;
