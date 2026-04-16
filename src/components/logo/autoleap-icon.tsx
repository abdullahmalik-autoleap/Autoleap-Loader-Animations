interface AutoleapIconProps extends React.SVGProps<SVGSVGElement> {
  pathClassName?: string;
  fillColor?: string;
  asStroke?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  pathId?: string;
  fillValue?: string;
}

export const AUTOLEAP_ICON_PATH =
  "M70.6746 42.0242C73.034 41.8637 77.3578 42.0086 79.8836 42.009L98.6147 42.0113L157.369 42.0008C157.605 62.2717 157.246 82.6088 157.397 102.886C157.44 108.576 157.497 114.386 157.389 120.067C155.792 121.95 152.047 125.443 150.148 127.305L138.91 138.508L121.102 156.034C116.225 160.895 110.967 166.386 105.979 171.039C104.558 172.36 103.288 173.584 102.169 175.174C101.796 172.235 101.91 167.339 101.905 164.26L101.897 146.363L101.915 88.8631L49.7 88.8746L33.5615 88.8871C29.8727 88.9022 25.9387 89.0067 22.2711 88.8283C25.1094 86.2666 27.6727 83.5174 30.4106 80.8658C37.1983 74.36 43.9069 67.7723 50.5348 61.1039L59.9467 51.7926C62.1026 49.6502 68.2598 43.136 70.6746 42.0242Z";

export function AutoleapIcon({
  pathClassName,
  fillColor = "#00C19D",
  asStroke = false,
  strokeColor = "#00C19D",
  strokeWidth = 3,
  strokeDasharray,
  pathId,
  fillValue,
  ...svgProps
}: AutoleapIconProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <path
        id={pathId}
        className={pathClassName}
        d={AUTOLEAP_ICON_PATH}
        fill={asStroke ? "none" : fillValue ?? fillColor}
        stroke={asStroke ? strokeColor : "none"}
        strokeWidth={asStroke ? strokeWidth : undefined}
        strokeDasharray={asStroke ? strokeDasharray : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
