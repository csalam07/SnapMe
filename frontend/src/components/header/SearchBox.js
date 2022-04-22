import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentBox = ({ src, name, usn, onClick }) => {
  return (
    <div
      className="h-full w-full cursor-pointer border border-gray-200 shadow-2xl bg-white px-4 pt-3 pb-5 hover:rounded-md hover:bg-gray-200 xl:px-8"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {src && (
            <div className="mr-4 h-12 w-12 rounded-full shadow">
              <img
                className="h-full w-full overflow-hidden rounded-full object-contain object-center"
                src={src}
                alt="avatar"
              />
            </div>
          )}

          <div>
            <h3 className="mb-2 text-base font-normal leading-4 text-gray-800 sm:mb-1">
              {name}
            </h3>
            <p className="text-xs leading-3 text-gray-600">{usn}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function SearchBox({ students }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState([]);

  const [showResults, setShowResults] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  console.log(searchResult);
  const handleSearch = (e) => {
    let term = e.target.value;
    setSearchTerm(term);
    term = term.toLowerCase();

    setSearchResult(
      term &&
        students?.filter(
          (student) =>
            student?.student_name.toLowerCase().includes(term) ||
            student?.usn.toLowerCase().includes(term) ||
            student?.year.toLowerCase().includes(term),
        ),
    );
  };
  return (
    <div className="flex relative items-center justify-start w-full flex-1 bg-gray-100 rounded-full p-2 px-4 shadow-2xl border border-gray-400">
      <i className="uil uil-search"></i>
      <input
        type="text"
        placeholder="search"
        className="w-full outline-none bg-transparent px-2"
        onChange={handleSearch}
        value={searchTerm}
        onFocus={() => setShowResults(true)}
        onAbort={() => setShowResults(false)}
        onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <div className="scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent absolute top-10 left-1 z-10 w-full overflow-x-hidden rounded-md bg-white">
          {searchResult?.length ? (
            searchResult.map(({ id, student_name, usn, file_src }) => (
              <StudentBox
                key={id}
                id={id}
                name={student_name}
                usn={usn}
                src={file_src}
                onClick={() => navigate(`/profile/${usn}`)}
              />
            ))
          ) : (
            <>
              {searchTerm && (
                <StudentBox usn={searchTerm} name="No User Found" />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
