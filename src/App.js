/* eslint-disable */
import { Stack, useTheme, useMediaQuery, Typography } from "@mui/material";
import "./App.css";
import ProductCarousel from "./components/ProductCarousel";

const productFromApi = [
  {
    productImg: "assets/img/bg-1.png",
    content: "365 Signature Hoodie",
    price: "€33.95",
  },
  {
    productImg: "assets/img/bg-2.png",
    content: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
  {
    productImg: "assets/img/bg-3.png",
    content: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
  {
    productImg: "assets/img/bg-1.png",
    content: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
  {
    productImg: "assets/img/bg-2.png",
    content: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
  {
    productImg: "assets/img/bg-3.png",
    content: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
];

const bgImageCss = {
  backgroundImage: `url("assets/img/bg.png")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

function App() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isDown1660px = useMediaQuery(theme.breakpoints.down(1460));

  return (
    <Stack
      flexDirection={isMd ? "column" : "row"}
      height="100vh"
      flex={1}
      bgcolor="white"
    >
      <Stack
        sx={
          isMd
            ? {
                ...bgImageCss,
                backgroundSize: "100% 100%",
              }
            : {
                ...bgImageCss,
                backgroundSize: isDown1660px ? "cover" : "100% 100%",
              }
        }
        flex={isMd ? 1.38 : 1}
      />
      <Stack
        flex={1}
        justifyContent="center"
        alignItems={isMd ? "end" : "center"}
        position="relative"
      >
        <Stack
          position={isMd ? "absolute" : "initial"}
          top="-259px"
          paddingLeft={isMd ? "0px" : "128px"}
          gap="12px"
        >
          <Stack>
            <Typography
              fontFamily="ITC Avant Garde Gothic Pro"
              fontWeight="700"
              fontSize={isMd ? "20px" : "31.25px"}
              lineHeight="40.62px"
              maxWidth={isMd ? "312px" : "494px"}
              width="100%"
              color={isMd ? "white" : "#000000"}
              paddingX={isMd ? "24px" : "0px"}
            >
              Everyday items, we have something to suit every occasion.
            </Typography>
          </Stack>
          <Stack gap="32px">
            {!isMd && (
              <Stack>
                <Typography
                  fontFamily="Avenir"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="26px"
                  maxWidth="432px"
                  width="100%"
                  color="#666666"
                >
                  At suspendisse augue lectus arcu, accumsan ut sit posuere
                  vitae sit tincidunt semper eu proin leo gravida cursus.
                </Typography>
              </Stack>
            )}
            <Stack gap="68px">
              <Stack>
                <Typography
                  fontFamily="Avenir"
                  fontWeight="900"
                  fontStyle="normal"
                  fontSize="12.8px"
                  lineHeight="17.48px"
                  color={isMd ? "white" : "#000000"}
                  paddingX={isMd ? "24px" : "0px"}
                  sx={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Shop all everyday items
                </Typography>
              </Stack>
              <ProductCarousel products={productFromApi} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
