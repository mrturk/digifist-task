/* eslint-disable */
import { Stack, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState } from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import ProductCard from "./ProductCard";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

export default function ProductCarousel({ products }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef();

  const [prev, setPRev] = useState(false);

  const [next, setNext] = useState(true);

  const onNext = () => {
    ref.current.scrollTo({
      left: 0,
      left: ref.current.scrollLeft + 262,
      behavior: "smooth",
    });
    if (ref.current.scrollLeft + 262 > 0) {
      setPRev(true);
    }
    if (
      ref.current.scrollLeft + 262 >=
      ref.current.scrollWidth - ref.current.clientWidth
    ) {
      setNext(false);
    }
  };

  const onPrev = () => {
    ref.current.scrollTo({
      left: 0,
      left: ref.current.scrollLeft - 262,
      behavior: "smooth",
    });
    if (
      ref.current.scrollLeft - 262 <=
      ref.current.scrollWidth - ref.current.clientWidth
    ) {
      setNext(true);
    }
    if (ref.current.scrollLeft - 262 < 0) {
      setPRev(false);
    }
  };

  return (
    <Stack
      maxWidth="auto"
      minWidth="320px"
      width="100%"
      sx={{ position: "relative" }}
    >
      <Stack
        ref={ref}
        width="auto"
        paddingBottom="20px"
        sx={{
          overflowX: "scroll",
          overflow: "hidden",
          "&& .scroll-drag": {
            display: "flex",
            flexDirection: "row",
            gap: "32px",
          },
        }}
        flexDirection="row"
        gap="32px"
      >
        {isMobile ? (
          <ScrollContainer className="scroll-drag">
            {products.map((item, index) => {
              return <ProductCard key={index} product={item} />;
            })}
          </ScrollContainer>
        ) : (
          products.map((item, index) => {
            return <ProductCard key={index} product={item} />;
          })
        )}
      </Stack>

      {!isMobile && (
        <>
          <Stack position="absolute" left="20px" top="40%">
            {prev && (
              <IconButton
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "0",
                }}
                onClick={onPrev}
              >
                <ArrowIcon
                  sx={{
                    transform: "rotate(180deg)",
                    fontSize: "15px",
                  }}
                />
              </IconButton>
            )}
          </Stack>
          <Stack position="absolute" right="20px" top="40%">
            {next && (
              <IconButton
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "0",
                }}
                onClick={onNext}
              >
                <ArrowIcon
                  sx={{
                    fontSize: "15px",
                  }}
                />
              </IconButton>
            )}
          </Stack>
        </>
      )}
    </Stack>
  );
}
