import React, { useState, useEffect } from 'react';

import { Loader, VoteBox, ResultsView } from '../components';

const Vote = () => {

  const [loading, setLoading] = useState(false);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Cast Your Vote</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Vote and view transparent results</p>
      </div>
      
      <div className="mt-16">
        <VoteBox />
      </div>
      
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <ResultsView />
          </>
        )}
      </div>
    </section >
  )
}

export default Vote;