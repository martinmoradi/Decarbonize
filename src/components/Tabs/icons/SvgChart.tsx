import * as React from 'react';

function SvgChart(props: undefined) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" width="1em" height="1em" {...props}>
      <path
        d="M44.186 44.281h-4.132V16.542a1 1 0 00-1-1h-8.58V7.646a1 1 0 00-1-1h-9.58a1 1 0 00-1 1v16.221h-8.58a1 1 0 00-1 1v19.414h-.881a3.623 3.623 0 01-3.619-3.618V4.453a1 1 0 00-2 0v36.21a5.625 5.625 0 005.619 5.618h35.753a1 1 0 000-2zM11.314 25.867h7.58v18.414h-7.58zm9.58-1V8.647h7.58V44.28h-7.58zm9.58 19.414V17.542h7.58v26.74z"
        data-name="Layer 10"
      />
    </svg>
  );
}

export default SvgChart;
