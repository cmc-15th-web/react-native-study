export const GetLocationIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      id='get-location-icon'
      onClick={onClick}
      width='52'
      height='52'
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_355_229)'>
        <rect
          x='10'
          y='10'
          width='32'
          height='32'
          rx='16'
          fill='white'
          shape-rendering='crispEdges'
        />
        <path
          d='M25.5 35.45V33.988C23.4167 33.7933 21.6967 33.0177 20.34 31.661C18.9834 30.3043 18.207 28.584 18.011 26.5H16.55V25.5H18.012C18.2067 23.4167 18.9824 21.6967 20.339 20.34C21.6957 18.9833 23.416 18.207 25.5 18.011V16.55H26.5V18.012C28.5834 18.2067 30.3034 18.9823 31.66 20.339C33.0167 21.6957 33.7927 23.416 33.9881 25.5H35.4501V26.5H33.9881C33.7934 28.5833 33.0177 30.3033 31.661 31.66C30.3044 33.0167 28.584 33.793 26.5 33.989V35.451L25.5 35.45ZM26 33C27.9334 33 29.5834 32.3167 30.95 30.95C32.3167 29.5833 33 27.9333 33 26C33 24.0667 32.3167 22.4167 30.95 21.05C29.5834 19.6833 27.9334 19 26 19C24.0667 19 22.4167 19.6833 21.05 21.05C19.6834 22.4167 19 24.0667 19 26C19 27.9333 19.6834 29.5833 21.05 30.95C22.4167 32.3167 24.0667 33 26 33ZM26 29C25.1754 29 24.469 28.7063 23.881 28.119C23.293 27.5317 22.9994 26.8253 23 26C23 25.1753 23.2937 24.469 23.881 23.881C24.4684 23.293 25.1747 22.9993 26 23C26.8254 23 27.5317 23.2937 28.119 23.881C28.7064 24.4683 29 25.1747 29 26C29 26.8253 28.7064 27.5317 28.119 28.119C27.5317 28.7063 26.8254 29 26 29Z'
          fill='#5061FF'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_355_229'
          x='0'
          y='0'
          width='52'
          height='52'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_355_229'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_355_229'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};
