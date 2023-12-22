import {
  FC,
  PropsWithChildren,
  MouseEvent,
  useState,
  useRef,
  useCallback,
  ReactElement,
} from "react";
import { Box } from "@mui/material";

export function getOuterWidth(el: HTMLElement) {
  const style = getComputedStyle(el);

  return (
    el.offsetWidth +
    (parseInt(style.marginLeft, 10) || 0) +
    (parseInt(style.marginRight, 10) || 0)
  );
}

export enum SlideDirection {
  Right = -1,
  Left = 1,
}

export type Item = ReactElement;

export type Arrows = {
  left: boolean;
  right: boolean;
};

export interface SliderProps extends PropsWithChildren {
  selector?: string;
  itemMinWidth?: string;
}

export const ScrollingCarousel: FC<SliderProps> = ({
  selector,
  itemMinWidth,
  children,
}: SliderProps) => {
  const slider = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [position, setPosition] = useState({
    startX: 0,
    scrollLeft: 0,
  });

  const showArrows = (): Arrows => {
    const sliderElement = slider.current;
    return {
      left: !!sliderElement && sliderElement.scrollLeft > 0,
      right:
        !!sliderElement &&
        sliderElement.scrollWidth >
          sliderElement.scrollLeft + sliderElement.offsetWidth,
    };
  };
  const [showArrow, setShowArrow] = useState<Arrows>(showArrows());

  const onScroll = () => {
    setShowArrow(showArrows());
  };

  const ref = useCallback(
    (node: any) => {
      if (node !== null) {
        Object.defineProperty(slider, "current", { value: node });
        setShowArrow(showArrows());
        node.addEventListener("scroll", onScroll);
      }
    },
    [slider, children]
  );

  const mouseDown = (e: MouseEvent) => {
    setIsDown(true);
    setPosition({
      startX: e.pageX - slider.current!.offsetLeft,
      scrollLeft: slider.current!.scrollLeft,
    });
  };

  const mouseUp = () => {
    setIsDown(false);
    setShowArrow(showArrows());
    // slider.current!.classList.remove(styles.sliding);
  };

  const mouseMove = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    // slider.current!.classList.add(styles.sliding);
    const eventPosition = e.pageX - slider.current!.offsetLeft;
    const slide = eventPosition - position.startX;

    slider.current!.scrollLeft = position.scrollLeft - slide;
  };

  const calculateSlideAmount = (direction: SlideDirection): number => {
    const _slider = slider.current!;
    const currentView =
      direction === SlideDirection.Left
        ? _slider.scrollLeft + _slider.offsetWidth
        : _slider.scrollLeft;

    const childNodes = Array.from(_slider.children) as HTMLElement[];
    let nodeWidthSum = 0;
    for (const node of childNodes) {
      const nodeWidth = getOuterWidth(node);
      nodeWidthSum += nodeWidth;

      if (nodeWidthSum >= currentView) {
        const showingPart =
          direction === SlideDirection.Left
            ? nodeWidthSum - currentView
            : nodeWidth;

        return (_slider.offsetWidth - showingPart) * direction;
      }
    }

    return _slider.offsetWidth;
  };

  const smoothHorizontalScrollBehavior = (amount: number) => {
    slider.current!.scrollLeft = amount;
  };

  const smoothHorizontalScroll = (
    time: number,
    amount: number,
    start: number
  ) => {
    let curTime = 0;
    for (let scrollCounter = 0; curTime <= time; scrollCounter++) {
      window.setTimeout(
        smoothHorizontalScrollBehavior,
        curTime,
        (scrollCounter * amount) / 100 + start
      );
      curTime += time / 100;
    }
  };

  const slide = (direction: SlideDirection) => {
    const slideAmount = calculateSlideAmount(direction);
    const start = slider.current!.scrollLeft;
    smoothHorizontalScroll(500, slideAmount, start);
  };

  const getArrow = (
    direction: SlideDirection,
    data: string,
    element?: ReactElement
  ) => {
    return (
      <div data-arrow={data} onClick={() => slide(direction)}>
        {element ?? <></>}
      </div>
    );
  };

  const minWidthStyles =
    selector && itemMinWidth
      ? {
          [selector]: { minWidth: itemMinWidth },
        }
      : {};

  return (
    <Box component="div" sx={{ position: "relative", width: "100%" }}>
      {showArrow.left && getArrow(SlideDirection.Right, "left", <></>)}
      {showArrow.right && getArrow(SlideDirection.Left, "right", <></>)}
      <Box
        component="div"
        ref={ref}
        onMouseDown={mouseDown}
        onMouseLeave={mouseUp}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
        sx={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: {
            xs: "10px 8px",
            sm: "10px",
            md: "15px 30px",
          },
          "*": {
            flex: "0 0 auto",
          },
          ...minWidthStyles,
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
