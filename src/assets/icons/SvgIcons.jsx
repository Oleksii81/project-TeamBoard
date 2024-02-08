import PropTypes from 'prop-types';
export const SpriteSVG = ({ name }) => {
  switch (name) {
   
    case 'close':
      return (
        <svg id="icon-close" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2"
            d="M24 8l-16 16M8 8l16 16"
          ></path>
        </svg>
      );
    
    case 'add_photo':
      return (
        <svg id="icon-add_photo" viewBox="0 0 24 24">
          <path
            fill="#BEDBB0"
            style={{ fill: 'var(--color1, #546081)' }}
            d="M18 0H6C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0Z"
          ></path>
          <path
            fill="none"
            stroke="#f3f3f3"
            style={{ stroke: 'var(--color2, #f3f3f3)' }}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2"
            d="M16.25 11v10.5M11 16.25h10.5"
          ></path>
        </svg>
      );
    
    case 'plus':
      return (
        <svg id="icon-plus" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="1.9862"
            d="M16 6.988v18.024M6.988 16h18.023"
          ></path>
        </svg>
      );
    
    case 'eye2':
      return (
        <svg id="eye2" viewBox="0 0 32 32">
          <g clip-path="url(#clip0_11829_1137)">
            <path
              d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003"
              stroke="#161616"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L23 23"
              stroke="#161616"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_11829_1137">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
  
    case 'eye':
      return (
        <svg id="icon-eye" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M1.333 16s5.333-10.667 14.667-10.667 14.667 10.667 14.667 10.667-5.333 10.667-14.667 10.667-14.667-10.667-14.667-10.667z"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M16 20c2.209 0 4-1.791 4-4s-1.791-4-4-4v0c-2.209 0-4 1.791-4 4s1.791 4 4 4v0z"
          ></path>
        </svg>
      );
   
    
    case 'close-modal':
      return (
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2.083v5.834M2.083 5h5.834" stroke="#161616" stroke-linecap="round" stroke-linejoin="round"/></svg>
      );
    
    case 'add-modal-photo':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="24"
            height="24"
            rx="5"
            ry="5"
            fill="#BEDBB0"
          />
          <path
            d="M14.2188 9.625V18.8125"
            stroke="#161616"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.625 14.2188H18.8125"
            stroke="#161616"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'eye1':
      return (
        <svg
          id="eye1"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M.75 9s3-6 8.25-6 8.25 6 8.25 6-3 6-8.25 6S.75 9 .75 9Z"
            stroke="#161616"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
            stroke="#161616"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    
   

    default:
      return 'SVG not found';
  }
};

SpriteSVG.propTypes = {
  name: PropTypes.node,
};
