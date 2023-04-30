import { createSvgIcon, SvgIcon } from "@mui/material";

export const ArrowIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      fill="none"
      viewBox="0 0 8 14"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M.646.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L6.293 7 .646 1.354a.5.5 0 010-.708z"
        clipRule="evenodd"
      ></path>
    </svg>,
    "Svg"
  );

  return <SvgIcon {...rest} viewBox="0 0 8 14" component={svg} />;
};
