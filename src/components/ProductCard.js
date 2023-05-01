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
    <Stack width={isMobile ? "148px" : "230px"} gap={isMobile ? "8px" : "12px"}>
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
            {isMobile ? (
              <Typography
                fontFamily="Avenir"
                fontWeight="400"
                fontSize="12.8px"
                lineHeight="20.48px"
                color="#000000"
              >
                Organic Skinny High Waist Raw Hem Jeans
              </Typography>
            ) : (
              <Typography
                fontFamily="Avenir"
                fontWeight="400"
                fontSize="12.8px"
                lineHeight="20.48px"
                color="#000000"
              >
                {product.content}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Stack
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={isMobile ? "flex-start" : "space-between"}
          gap={isMobile ? "8px" : "0px"}
        >
          <Stack
            fontFamily="Avenir"
            fontWeight="bold"
            color="#000000"
            fontSize="12.8px"
            lineHeight="20.48px"
          >
            €33.95
          </Stack>
          <Stack
            justifyContent={isMobile ? "flex-start" : "center"}
            alignItems={isMobile ? "flex-start" : "center"}
          >
            <Stack alignItems="center" gap="10px" flexDirection="row">
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
                    border={selected === index ? "1px solid #000000" : "none"}
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
