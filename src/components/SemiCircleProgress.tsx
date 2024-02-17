import { FC } from "react";

interface Props {
  strokeWidth: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  percentage: number;
  percentageSeperator?: string;
  strokeColor?: string;
  hasBackground?: Boolean;
  bgStrokeColor?: string;
  displayPercentage?: boolean;
  secondaryText?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
}

const SemiCircleProgress: FC<Props> = ({
  strokeWidth,
  percentage,
  strokeColor,
  strokeLinecap,
  hasBackground = false,
  bgStrokeColor,
  displayPercentage = true,
  secondaryText,
  primaryTextColor,
  secondaryTextColor,
}) => {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  if (isNaN(strokeWidth) || strokeWidth <= 0) {
    throw new Error("Stroke width must be a positive number");
  }

  const radius = 50 - strokeWidth / 2;
  const circumference = 1.1 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const bgStrokeDashoffset = circumference - 1 * circumference;
  const pathDescription = "M5,64 a1,1 0 0,1 90,0";

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="_half-circular-progress"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="30%" stopColor="#00AACB" />
            <stop offset="100%" stopColor="#006593" />
          </linearGradient>
        </defs>
        {hasBackground && (
          <path
            cx="45"
            cy="45"
            r="32"
            d={pathDescription}
            style={{
              transition: "stroke-dashoffset 0.35s",
              stroke: bgStrokeColor || "#d3d3d3",
              strokeLinecap: strokeLinecap || "round",
              strokeDasharray: `${circumference}`,
              strokeDashoffset: `${bgStrokeDashoffset}`,
              strokeWidth: `${strokeWidth}`,
            }}
            fill="none"
          />
        )}
        <path
          cx="45"
          cy="45"
          r="32"
          d={pathDescription}
          style={{
            transition: "stroke-dashoffset 0.35s",
            stroke: strokeColor || "url('#gradient')",
            strokeLinecap: strokeLinecap || "round",
            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${strokeDashoffset}`,
            strokeWidth: `${strokeWidth}`,
          }}
        />
        <animate
          attributeName="stroke-dashoffset"
          from="283"
          to="0"
          dur="1s"
          fill="freeze"
        />
        {displayPercentage && (
          <text
            x="50%"
            y="48%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="12"
            fontWeight={600}
            fontFamily="Public sans"
            fill={primaryTextColor}
          >
            {`${percentage}%`}
          </text>
        )}
        {secondaryText && (
          <text
            x="50%"
            y="62%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="5"
            fontFamily="Public sans"
            fontWeight={500}
            fill={secondaryTextColor}
          >
            {secondaryText}
          </text>
        )}
      </svg>
    </div>
  );
};

export default SemiCircleProgress;
