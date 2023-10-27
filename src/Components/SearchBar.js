import React, { useState } from 'react';
import { GiArchiveResearch } from 'react-icons/gi';
import { FaSearchengin } from 'react-icons/fa';

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');

  const searchInputHandler = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };
  return (
    <div>
      {showSearch ? (
        <div className="flex flex-row gap-2 mx-2 items-center" onClick={() => setShowSearch(false)}>
          <GiArchiveResearch color="white" size={'40px'} />
          <div>Search</div>
        </div>
      ) : (
        <div className="flex flex-row">
          <input
            type="text"
            className="rounded-3xl pl-4 py-2 text-black pr-12"
            value={searchKeyword}
            onChange={searchInputHandler}
          />
          <FaSearchengin onClick={() => setShowSearch(true)} color="#735be8" className="-ml-10 my-auto" size={'30px'} />
        </div>
      )}
    </div>
  );
}
