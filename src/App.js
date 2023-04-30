/* eslint-disable */
import { Stack, useTheme, useMediaQuery, Typography } from "@mui/material";
import "./App.css";
import ProductCarousel from "./components/ProductCarousel";

const productFromApi = [
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

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDown1660px = useMediaQuery(theme.breakpoints.down(1460));

  return (
    <Stack
      flexDirection={isMobile ? "column" : "row"}
      minHeight="100vh"
      flex={1}
      bgcolor="white"
      gap="120px"
      position="relative"
    >
      <Stack
        sx={{
          "&& .left-image": isMobile
            ? {
                height: "500px",
                maxWidth: "900px",
                minWidth: "360px",
                width: "100%",
                marginX: "auto",
                objectFit: "cover",
              }
            : {
                width: "100%",
                height: "100vh",
                objectFit: isDown1660px ? "cover" : "fill",
              },
        }}
        flex={1}
      >
        <img className="left-image" src="assets/img/bg.png" alt="image" />
      </Stack>

      <Stack
        position={isMobile ? "absolute" : "initial"}
        justifyContent="center"
        alignItems="center"
        bottom="80px"
        sx={isMobile ? { width: "100%" } : { flex: "1" }}
      >
        <Stack padding={isMobile ? "20px" : "0px"} gap="12px">
          <Stack>
            <Typography
              fontFamily="ITC Avant Garde Gothic Pro"
              fontWeight="700"
              fontSize={isMobile ? "20px" : "31.25px"}
              lineHeight="40.62px"
              maxWidth={isMobile ? "312px" : "494px"}
              width="100%"
              color={isMobile ? "white" : "black"}
            >
              Everyday items, we have something to suit every occasion.
            </Typography>
          </Stack>
          <Stack gap="32px">
            {!isMobile && (
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
                  color={isMobile ? "white" : "black"}
                  sx={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Shop all everyday items
                </Typography>
              </Stack>
              <Stack maxWidth={isMobile ? "320px" : "650px"}>
                <ProductCarousel products={productFromApi} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
