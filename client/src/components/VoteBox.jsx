import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VoteOption = ({ value, label, onSubmit }) => {
  const navigate = useNavigate();
  const imageURL = 'https://example.com/placeholder.jpg'; // Update this with the actual external URL

  const handleClick = () => {
    onSubmit(value);
  };

  const handleReadMore = () => {
    navigate(`/details/${value}`); // Update this with the correct route for your details page
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-64 mx-2 text-white blue-glassmorphism dark-eth-card">
      <h2 className="text-2xl mb-4">{label}</h2>
      <div className="mb-4">
        <img
          src={imageURL}
          alt={`Placeholder for ${label}`}
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <p className="mb-4">
        This is a description for {label}. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <button
        type="button"
        onClick={handleReadMore}
        className="mb-4 bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-md"
      >
        Read More
      </button>
      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Vote
      </button>
    </div>
  );
};

const VoteBox = () => {
  const [vote, setVote] = useState('');

  const handleSubmit = (option) => {
    setVote(option);
    console.log('Vote submitted:', option);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
  ];

  return (
    <div className="flex items-center justify-center">
      {options.map((option) => (
        <VoteOption
          key={option.value}
          value={option.value}
          label={option.label}
          onSubmit={handleSubmit}
        />
      ))}
    </div>
  );
};

export default VoteBox;
