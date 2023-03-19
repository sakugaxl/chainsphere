import React, { useState } from 'react';

const VoteBox = () => {
  const [vote, setVote] = useState('');

  const handleVoteChange = (e) => {
    setVote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the vote value, e.g., send it to the server
    console.log('Vote submitted:', vote);
    setVote('');
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-64">
      <h2 className="text-2xl mb-4">Cast Your Vote</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="vote" className="block mb-1">
            Choose an option:
          </label>
          <select
            id="vote"
            name="vote"
            value={vote}
            onChange={handleVoteChange}
            className="w-full px-2 py-1 border border-gray-300 rounded-md"
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit Vote
        </button>
      </form>
    </div>
  );
};

export default VoteBox;
