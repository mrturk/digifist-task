/* eslint-disable */
import { Stack, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import ProductCard from "./ProductCard";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

export default function ProductCarousel({ products }) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const ref = useRef();

  const [prev, setPRev] = useState(false);

  const [next, setNext] = useState(true);

  const [screenwidth, setScreenWidth] = useState(getCurrentWidth());

  function getCurrentWidth() {
    return window.innerWidth;
  }

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(getCurrentWidth());
    };
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [screenwidth]);

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
      maxWidth={isSm ? `${screenwidth}px` : isMd ? "496px" : "602px"}
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
            gap: "12px",
            paddingX: "24px",
          },
        }}
        flexDirection="row"
        gap="32px"
      >
        {isMd ? (
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

      {!isMd && (
        <>
          <Stack position="absolute" left="50px" top="40%">
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
          <Stack position="absolute" right="50px" top="40%">
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
