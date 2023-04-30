import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const colorDataForApi = [
  {
    color: "#99C3CC",
  },
  {
    color: "#CC9999",
  },
  {
    color: "#CB99CC",
  },
  {
    color: "#BCD9B2",
  },
];

const ProductCard = ({ product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selected, setSelected] = useState(0);
  return (
    <Stack gap="12px">
      <Stack>
        <img
          style={{
            width: isMobile ? "148px" : "230px",
            height: isMobile ? "200px" : "310px",
          }}
          src={product.productImg}
          alt={product.productImg}
        />
      </Stack>
      <Stack gap="4px">
        <Stack>
          <Stack>
            <Typography
              fontFamily="Avenir"
              fontWeight="400"
              fontSize="12.8px"
              lineHeight="20.48px"
              color="black"
            >
              365 Signature Hoodie
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack
            fontFamily="Avenir"
            fontWeight="bold"
            color="black"
            fontSize="12.8px"
            lineHeight="20.48px"
          >
            €33.95
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <Stack
              gap="10px"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              {colorDataForApi.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    sx={{
                      cursor: "pointer",
                    }}
                    width={selected === index ? "12px" : "11px"}
                    height={selected === index ? "12px" : "11px"}
                    borderRadius="50%"
                    border={selected === index ? "1px solid black" : "none"}
                    justifyContent="center"
                    alignItems="center"
                    bgcolor={selected === index ? "none" : item.color}
                    onClick={() => {
                      setSelected(index);
                    }}
                  >
                    {selected === index && (
                      <Stack
                        width="8px"
                        height="8px"
                        bgcolor={item.color}
                        borderRadius="50%"
                      />
                    )}
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default ProductCard;
