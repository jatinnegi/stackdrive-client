import {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { lightTheme, darkTheme } from "@/theme";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import {
  updateSelectedId,
  updateMultipleSelectedIds,
  updateOperations,
  appendNavigation,
  updateAnimations,
} from "@/redux/actions";
import { ResourceProps, SupportedTypes } from "@/types";
import { getFileImage, getResourceById } from "@/utils/helper";
import { Box, IconButton, Typography } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { BoxProps } from "@mui/material";
import constants from "@/constants";
import { useResize } from "@/hooks";

interface ResourceWrapperMirror {
  defaultX: number | null;
  defaultY: number | null;
  x: number;
  y: number;
  height: number;
  width: number;
}

type Props = {
  id: string;
  name: string;
  type: SupportedTypes;
} & PropsWithChildren &
  BoxProps;

const ResourceWrapper: FC<Props> = ({ id, name, type, children, ...props }) => {
  const { width: windowWidth, height: windowHeight } = useResize();

  const resourceWrapperEl = useRef<HTMLDivElement | null>(null);
  const resourceWrapperMirrorEl = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  const { data, selected } = useSelector((state: RootState) => state.resources);
  const {
    resourceWrappersStack,
    resourceWrappersStackAnimateReset,
    resourceWrappersDrag,
    resourceWrappersOffsetX,
    resourceWrappersOffsetY,
    resourceWrappersStackOffsetX,
    resourceWrappersStackOffsetY,
    resourceWrappersResetX,
    resourceWrappersResetY,
    resourceWrapperMirrorElSelected,
  } = useSelector((state: RootState) => state.animations);
  const { layout } = useSelector((state: RootState) => state.settings);
  const { theme } = useSelector((state: RootState) => state.settings);

  const dispatch = useDispatch();

  const [resourceWrapperMirrorValues, setResourceWrapperMirrorValues] =
    useState<ResourceWrapperMirror>({
      defaultX: null,
      defaultY: null,
      x: 0,
      y: 0,
      height: 0,
      width: 0,
    });
  const [differ, setDiffer] = useState<number[]>([0, 0]);

  useEffect(() => {
    setTimeout(() => {
      if (resourceWrapperEl.current) {
        const rect = resourceWrapperEl.current.getBoundingClientRect();
        const x = rect.left + window.scrollX;
        const y = rect.top + window.scrollY;

        const height = rect.height;
        const width = Math.min(280, rect.width);

        setResourceWrapperMirrorValues({
          defaultX: x + resourceWrappersOffsetX * -1,
          defaultY: y + resourceWrappersOffsetY * -1,
          x: x + resourceWrappersOffsetX * -1,
          y: y + resourceWrappersOffsetY * -1,
          height,
          width,
        });
        return;
      }

      setResourceWrapperMirrorValues({
        defaultX: null,
        defaultY: null,
        x: 0,
        y: 0,
        height: 0,
        width: 0,
      });
    }, 150);
  }, [windowWidth, windowHeight, layout, data]);

  function handleMouseDown(e: React.MouseEvent) {
    let isSelected = false;
    for (let i = 0; i < selected.length && !isSelected; i++) {
      if (id === selected[i]) {
        isSelected = true;
      } else {
        continue;
      }
    }

    if (isSelected && selected.length > 0) {
      dispatch(
        updateAnimations({
          resourceWrappersDrag: true,
          resourceWrapperMirrorElSelected: e.currentTarget.id,
        })
      );
      return;
    }

    e.stopPropagation();

    if (e.button === 2 && !isSelected) {
      dispatch(updateSelectedId({ id }));
    } else if (e.button === 2 && isSelected) {
      // Don't update selected values for this case
    } else if (e.shiftKey) {
      dispatch(updateMultipleSelectedIds({ id }));
    } else {
      dispatch(updateSelectedId({ id }));
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      handleDoubleClick(id);
    } else {
      dispatch(updateSelectedId({ id }));
    }
  };

  const handleDoubleClick = (id: string) => {
    const item: ResourceProps | undefined = getResourceById(id, data);

    if (!item) {
      return;
    }

    if (item.type === "folder") {
      navigate(`/dashboard/folders/${id}`);
      dispatch(appendNavigation({ id, name }));
    } else {
      dispatch(updateOperations({ information: true }));
    }
  };

  const [draggableElX, draggableElY, stackX, stackY] = useMemo(() => {
    if (resourceWrapperEl.current) {
      return [
        resourceWrappersOffsetX,
        resourceWrappersOffsetY,
        resourceWrappersStackOffsetX,
        resourceWrappersStackOffsetY,
      ];
    }

    return [0, 0, 0, 0];
  }, [
    resourceWrappersOffsetX,
    resourceWrappersOffsetY,
    resourceWrappersStackOffsetX,
    resourceWrappersStackOffsetY,
    resourceWrapperEl.current,
    window.scrollX,
    window.scrollY,
  ]);

  const enableDragAnimation = useMemo(() => {
    return selected.includes(id) && resourceWrappersDrag;
  }, [selected, resourceWrappersDrag]);

  const [diffX, diffY] = useMemo(() => {
    if (resourceWrappersStackAnimateReset) {
      const currentDiffX = differ[0];
      const currentDiffY = differ[1];

      const defaultX = resourceWrapperMirrorValues.defaultX || 0;
      const defaultY = resourceWrapperMirrorValues.defaultY || 0;

      const currentXPos = resourceWrappersResetX || 0;
      const currentYPos = resourceWrappersResetY || 0;

      const newDiffX = defaultX - currentXPos + currentDiffX;
      const newDiffY = defaultY - currentYPos + currentDiffY;

      return [newDiffX - 1, newDiffY - 1];
    }

    if (resourceWrappersStack) {
      setDiffer([
        stackX - (resourceWrapperMirrorValues.defaultX || 0) + draggableElX,
        stackY - (resourceWrapperMirrorValues.defaultY || 0) + draggableElY,
      ]);

      return [
        stackX - (resourceWrapperMirrorValues.defaultX || 0) + draggableElX,
        stackY - (resourceWrapperMirrorValues.defaultY || 0) + draggableElY,
      ];
    }

    return [
      (resourceWrapperMirrorValues.defaultX || 0) + draggableElX * -1,
      (resourceWrapperMirrorValues.defaultY || 0) + draggableElY * -1,
    ];
  }, [resourceWrappersStack, resourceWrappersStackAnimateReset]);

  const elPosition: number = selected.findIndex(
    (selectedId: string) => selectedId === id
  );

  const boxShadow = useMemo(
    () =>
      theme === "light"
        ? `${lightTheme.palette.borderSelected?.shadow} 10px 10px 40px -10px`
        : `${darkTheme.palette.borderSelected?.shadow} 10px 10px 40px -10px`,
    [theme]
  );

  return (
    <>
      <Box
        component="div"
        ref={resourceWrapperMirrorEl}
        {...props}
        className="resource-wrapper-mirror"
        sx={{
          ...props.sx,
          position: "fixed",
          bgcolor: "selected.secondary",
          top: enableDragAnimation
            ? `${
                (resourceWrapperMirrorValues.defaultY || 0) + draggableElY * -1
              }px`
            : `${resourceWrapperMirrorValues.defaultY || 0}px`,
          left: enableDragAnimation
            ? `${
                (resourceWrapperMirrorValues.defaultX || 0) + draggableElX * -1
              }px`
            : `${resourceWrapperMirrorValues.defaultX || 0}px`,
          transform:
            enableDragAnimation && resourceWrappersStack
              ? `translate(${diffX}px, ${diffY}px)`
              : "translate(0px, 0px)",
          transition: `transform ease-out ${
            constants.stackAnimationTime
          }ms ${Math.min(20 * (elPosition - 1), 200)}ms`,
          width: `${resourceWrapperMirrorValues.width}px`,
          maxWidth: resourceWrappersStackAnimateReset ? "none" : "280px",
          borderRadius: "6px",
          zIndex: enableDragAnimation
            ? resourceWrapperMirrorElSelected === id
              ? 300
              : 200
            : 1,
          opacity: enableDragAnimation ? 1 : 0,
          borderWidth: resourceWrappersStackAnimateReset ? "0px" : "1px",
          borderStyle: "solid",
          borderColor: "borderSelected.primary",
          boxShadow: resourceWrappersStackAnimateReset
            ? "none"
            : resourceWrappersStack
            ? resourceWrapperMirrorElSelected === id
              ? boxShadow
              : "none"
            : boxShadow,
          pointerEvents: "none",
        }}
      >
        <Box component="div" className="resource_card">
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={getFileImage(type)}
                alt="file-icon"
                style={{ height: "25px", width: "25px" }}
              />
              <Typography
                fontSize={{
                  xs: "12px",
                  sm: "13px",
                }}
                sx={{
                  fontWeight: 500,
                  maxWidth: "170px",
                  marginLeft: "10px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  margin: "0px 10px",
                  width: "100%",
                }}
              >
                {name}
              </Typography>
            </Box>
            <IconButton
              sx={{ opacity: 0, pointerEvents: "none", cursor: "default" }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        className="resource-wrapper-mirror"
        sx={{
          ...props.sx,
          position: "fixed",
          bgcolor: "selected.secondary",
          borderRadius: "6px",
          width: `${resourceWrapperMirrorValues.width}px`,
          maxWidth: resourceWrappersStackAnimateReset ? "none" : "280px",
          top: `${
            (resourceWrapperMirrorValues.defaultY || 0) + draggableElY * -1
          }px`,
          left: `${
            (resourceWrapperMirrorValues.defaultX || 0) + draggableElX * -1
          }px`,
          transform:
            enableDragAnimation && resourceWrappersStack
              ? `translate(${diffX + 7}px, ${diffY + 7}px)`
              : "translate(0px, 0px)",
          zIndex: enableDragAnimation && resourceWrappersStack ? 1 : -1,
          opacity:
            enableDragAnimation && resourceWrappersStack
              ? resourceWrappersStackAnimateReset
                ? 0
                : 1
              : 0,
          borderWidth: resourceWrappersStackAnimateReset ? "0px" : "1px",
          borderStyle: "solid",
          borderColor: "borderSelected.primary",
          transition: "opacity 50ms ease-in 100ms",
          pointerEvents: "none",
        }}
      >
        <Box component="div" className="resource_card">
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={getFileImage(type)}
                alt="file-icon"
                style={{ height: "25px", width: "25px" }}
              />
              <Typography
                fontSize={{
                  xs: "12px",
                  sm: "13px",
                }}
                sx={{
                  fontWeight: 500,
                  maxWidth: "170px",
                  marginLeft: "10px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  margin: "0px 10px",
                  width: "100%",
                }}
              >
                {name}
              </Typography>
            </Box>
            <IconButton
              sx={{ opacity: 0, pointerEvents: "none", cursor: "default" }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          position: "fixed",
          bgcolor: "#0061D0",
          top: `${
            (resourceWrapperMirrorValues.defaultY || 0) + draggableElY * -1
          }px`,
          left: `${
            (resourceWrapperMirrorValues.defaultX || 0) + draggableElX * -1
          }px`,
          transform:
            enableDragAnimation && resourceWrappersStack
              ? `translate(${
                  diffX + resourceWrapperMirrorValues.width - 15
                }px, ${diffY - 15}px)`
              : "translate(0px, 0px)",
          zIndex: enableDragAnimation && resourceWrappersStack ? 300 : -1,
          height: "30px",
          width: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          pointerEvents: "none",
          opacity:
            enableDragAnimation && resourceWrappersStack
              ? resourceWrappersStackAnimateReset
                ? 0
                : 1
              : 0,
          border: "1px solid #AFAFAF30",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#FFF",
            fontWeight: 500,
          }}
        >
          {selected.length}
        </Typography>
      </Box>
      <Box
        ref={resourceWrapperEl}
        component="div"
        id={id}
        aria-label="resource-item"
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

export default ResourceWrapper;
