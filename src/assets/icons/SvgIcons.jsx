import PropTypes from 'prop-types';
export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'edit':
      return (
        <svg id="icon-edit" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.88"
            d="M22.667 4c0.679-0.661 1.607-1.069 2.631-1.069 2.083 0 3.771 1.688 3.771 3.771 0 1.024-0.408 1.952-1.070 2.631l0.001-0.001-18 18-7.333 2 2-7.333 18-18z"
          ></path>
        </svg>
      );
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
            style="fill: var(--color1, #546081)"
            d="M18 0H6C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0Z"
          ></path>
          <path
            fill="none"
            stroke="#f3f3f3"
            style="stroke: var(--color2, #f3f3f3)"
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
    case 'done':
      return (
        <svg id="icon-done" viewBox="0 0 32 32">
          <path d="M14.133 18.4l-2.9-2.9c-0.215-0.217-0.513-0.352-0.843-0.352-0.026 0-0.051 0.001-0.076 0.002l0.003-0c-0.359 0.001-0.683 0.147-0.917 0.383l-0 0c-0.227 0.228-0.367 0.543-0.367 0.891 0 0.015 0 0.030 0.001 0.045l-0-0.002c0 0.377 0.123 0.689 0.367 0.933l3.8 3.8c0.228 0.227 0.543 0.367 0.891 0.367 0.015 0 0.030-0 0.045-0.001l-0.002 0c0.013 0 0.027 0.001 0.042 0.001 0.348 0 0.662-0.14 0.891-0.367l7.567-7.567c0.218-0.216 0.353-0.516 0.353-0.847 0-0.025-0.001-0.050-0.002-0.074l0 0.003c-0.002-0.358-0.149-0.682-0.384-0.916l-0-0c-0.228-0.227-0.543-0.367-0.891-0.367-0.015 0-0.030 0-0.045 0.001l0.002-0c-0.013-0-0.027-0.001-0.042-0.001-0.348 0-0.663 0.14-0.891 0.367l-6.6 6.6zM16 29.333c-0.025 0-0.055 0-0.084 0-1.849 0-3.607-0.387-5.199-1.084l0.083 0.033c-1.644-0.709-3.048-1.669-4.234-2.85l0 0c-1.2-1.2-2.149-2.611-2.849-4.233-0.664-1.508-1.051-3.267-1.051-5.116 0-0.030 0-0.059 0-0.089l-0 0.005c0-1.844 0.351-3.577 1.051-5.2 0.709-1.644 1.669-3.048 2.85-4.234l-0 0c1.2-1.2 2.611-2.151 4.233-2.851 1.508-0.663 3.267-1.050 5.116-1.050 0.030 0 0.059 0 0.089 0l-0.005-0c1.844 0 3.577 0.349 5.2 1.049 1.644 0.709 3.048 1.671 4.234 2.851l-0-0c1.2 1.2 2.149 2.611 2.849 4.233 0.664 1.508 1.051 3.267 1.051 5.116 0 0.030-0 0.059-0 0.089l0-0.005c0 0.025 0 0.055 0 0.084 0 1.849-0.387 3.608-1.084 5.199l0.033-0.083c-0.709 1.644-1.669 3.048-2.85 4.234l0-0c-1.2 1.2-2.611 2.149-4.233 2.849-1.508 0.664-3.267 1.051-5.116 1.051-0.030 0-0.059-0-0.089-0l0.005 0zM16 26.667c2.956 0 5.472-1.039 7.551-3.116 2.077-2.079 3.116-4.595 3.116-7.551s-1.039-5.472-3.116-7.551c-2.079-2.077-4.595-3.116-7.551-3.116s-5.472 1.039-7.549 3.116c-2.079 2.079-3.117 4.595-3.117 7.551s1.040 5.472 3.117 7.551c2.077 2.077 4.593 3.116 7.549 3.116z"></path>
        </svg>
      );
    case 'error':
      return (
        <svg id="icon-error" viewBox="0 0 32 32">
          <path d="M14.667 20h2.667v2.667h-2.667v-2.667zM14.667 9.333h2.667v8h-2.667v-8zM15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path>
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
            rx="8"
            ry="8"
            fill="#BEDBB0"
          />
          <path
            d="M14.2188 9.625V18.8125"
            stroke="#F3F3F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.625 14.2188H18.8125"
            stroke="#F3F3F3"
            strokeWidth="2"
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
