function Loading() {
  return (
    <div className="loading load">
      <svg width="205" height="250">
        <g transform="translate(20,20)">
          <g strokeWidth="2" fill="none">
            <path
              d="M100 50 A50 50 0 1 0 50 100 A50 50 0 1 1 0 150"
              stroke="#fff"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Loading;
