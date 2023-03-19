import React, { useState, useEffect } from 'react';

import { Loader } from '../components';

const Home = () => {

  const [loading, setLoading] = useState(false);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Welcome to Chainsphere</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Securing voting systems globally</p>
      </div>
      {/* add divs for following page portions */}
    </section >
  )
}

export default Home;