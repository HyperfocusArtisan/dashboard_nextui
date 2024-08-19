import * as React from "react";
import styles from './Main.module.css';

const Main = ({ imageUrl, ...props }) => {
  const [dimensions, setDimensions] = React.useState({
    width: 1680,
    height: 1050,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid slice"  // Preserve aspect ratio while covering the area
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <foreignObject width="100%" height="100%" clipPath="url(#svgPath)">
          <div {...({xmlns: "http://www.w3.org/1999/xhtml"} as any)} className={styles['image-wrapper']}>
            <img src={imageUrl} className={styles['image-element']} />
          </div>
        </foreignObject>
        <g filter="url(#filter0_d_111_352)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={`M4 104.954C3.99999 104.969 3.99999 104.984 3.99999 105V224C3.99999 224.015 3.99999 224.031 4 224.046V224.998C4 224.999 4.00105 225 4.00234 225V225C4.00362 225 4.00466 225.001 4.00468 225.002C4.35865 262.852 24.7389 295.914 55.0606 314.105C70.8697 323.589 84 338.976 84 357.412V${dimensions.height - 50}C84 ${dimensions.height - 28} 101.909 ${dimensions.height - 10} 124 ${dimensions.height - 10}H${dimensions.width - 44}C${dimensions.width - 22} ${dimensions.height - 10} ${dimensions.width - 4} ${dimensions.height - 28} ${dimensions.width - 4} ${dimensions.height - 50}V150C${dimensions.width - 4} 127.909 ${dimensions.width - 22} 110 ${dimensions.width - 44} 110H334C311.909 110 294 92.0914 294 70V40C294 17.9086 276.091 0 254 0H109.118C109.078 -4.30263e-05 109.039 -6.4545e-05 109 -6.4545e-05C108.961 -6.4545e-05 108.922 -4.30263e-05 108.882 0H44C21.9086 0 4 17.9086 4 40V104.954Z`}
            fill="none"
          />
        </g>
        <circle
          data-nav-anchor
          cx={dimensions.width - 4}
          cy={150}
          r="1"
          fill="none"
        />
        <defs>
          <filter
            id="filter0_d_111_352"
            x={0}
            y={0}
            width={dimensions.width}
            height={dimensions.height}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={6} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_111_352"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_111_352"
              result="shape"
            />
          </filter>
          <clipPath id="svgPath">
            <path
              d={`M4 104.954C3.99999 104.969 3.99999 104.984 3.99999 105V224C3.99999 224.015 3.99999 224.031 4 224.046V224.998C4 224.999 4.00105 225 4.00234 225V225C4.00362 225 4.00466 225.001 4.00468 225.002C4.35865 262.852 24.7389 295.914 55.0606 314.105C70.8697 323.589 84 338.976 84 357.412V${dimensions.height - 50}C84 ${dimensions.height - 28} 101.909 ${dimensions.height - 10} 124 ${dimensions.height - 10}H${dimensions.width - 44}C${dimensions.width - 22} ${dimensions.height - 10} ${dimensions.width - 4} ${dimensions.height - 28} ${dimensions.width - 4} ${dimensions.height - 50}V150C${dimensions.width - 4} 127.909 ${dimensions.width - 22} 110 ${dimensions.width - 44} 110H334C311.909 110 294 92.0914 294 70V40C294 17.9086 276.091 0 254 0H109.118C109.078 -4.30263e-05 109.039 -6.4545e-05 109 -6.4545e-05C108.961 -6.4545e-05 108.922 -4.30263e-05 108.882 0H44C21.9086 0 4 17.9086 4 40V104.954Z`}
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Main;