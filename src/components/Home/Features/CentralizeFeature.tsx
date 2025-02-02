import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box, LinearProgress, Typography } from "@mui/material";
import {
  FolderOpenRounded as FolderOpenIcon,
  SearchRounded as SearchIcon,
  ExpandMore as MoreIcon,
  MoreVertRounded as MoreVertIcon,
  Sort as ListIcon,
  Apps as GridIcon,
} from "@mui/icons-material";
import dashboardLinks, { LinkProps } from "@/utils/dashboardLinks";
import { dummyUsers } from "@/data";
import FolderImg from "../../../../public/files/ic_folder.svg";
import WordImg from "../../../../public/files/ic_word.svg";
import ExcelImg from "../../../../public/files/ic_excel.svg";
import PhotoImg from "../../../../public/files/ic_img.svg";
import PdfImg from "../../../../public/files/ic_pdf.svg";
import WordPreview from "../../../../public/preview/word_preview.webp";
import ExcelPreview from "../../../../public/preview/excel_preview.webp";
import PngPreview from "../../../../public/preview/png_preview.webp";
import PdfPreview from "../../../../public/preview/pdf_preview.webp";
import StackDriveLogo from "../../../../public/stack-drive-new-logo.svg";

interface Props {
  number: number;
  boxShadow: string;
}

const CentralizeFeature: FC<Props> = ({ number, boxShadow }) => {
  const theme = useSelector((state: RootState) => state.settings.theme);

  return (
    <Box
      component="div"
      sx={{ opacity: number === 1 ? 1 : 0, transition: "opacity 150ms linear" }}
    >
      <>
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "-100px",
            right: "100px",
            height: "40px",
            width: "2px",
            bgcolor: "icon.selected",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "-100px",
            right: "100px",
            height: "2px",
            width: "100px",
            bgcolor: "icon.selected",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "-125px",
            right: "200px",
            height: "50px",
            width: "200px",
            bgcolor: "background.paper",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            px: 1,
            boxShadow,
          }}
        >
          <img
            src={WordImg}
            alt="word"
            style={{ height: "24px", width: "24px" }}
          />
          <Box component="div">
            <Typography sx={{ fontSize: "9px", fontWeight: 500 }}>
              List of questions.doc
            </Typography>
            <Typography
              sx={{ fontSize: "8px", fontWeight: 400, color: "text.secondary" }}
            >
              12.5 MB
            </Typography>
          </Box>
        </Box>
      </>
      <>
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "150px",
            right: "-15px",
            height: "2px",
            width: "15px",
            bgcolor: "icon.selected",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "-20px",
            right: "-15px",
            height: "170px",
            width: "2px",
            bgcolor: "icon.selected",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "-80px",
            right: "-43px",
            height: "60px",
            width: "60px",
            bgcolor: "background.paper",
            borderRadius: "4px",
            boxShadow,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={theme === "dark" ? "#FFF" : "#CFCFCF"}
            height="60%"
            width="60%"
          >
            <path
              fillRule="evenodd"
              d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
              clipRule="evenodd"
            />
          </svg>
        </Box>
      </>
      <>
        <Box
          component="div"
          sx={{
            position: "absolute",
            bottom: "25px",
            left: "200px",
            height: "35px",
            width: "2px",
            bgcolor: "icon.selected",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            bottom: "25px",
            left: "200px",
            height: "2px",
            width: "150px",
            bgcolor: "icon.selected",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            bottom: "-15px",
            left: "350px",
            height: "60px",
            width: "200px",
            bgcolor: "background.paper",
            borderRadius: "6px",
            boxShadow,
            p: 1,
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            <FolderOpenIcon sx={{ height: 15, width: 15 }} />
            <Typography sx={{ fontSize: "10px", fontWeight: 600, flex: 1 }}>
              Storage
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              20%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={20}
            sx={{ borderRadius: "20px", mt: 0.5, mb: 1 }}
          />
          <Typography sx={{ fontSize: "8px", color: "text.secondary" }}>
            120 MB of 500 MB has been used
          </Typography>
        </Box>
      </>
      <>
        <Box
          component="div"
          sx={{
            position: "absolute",
            bottom: "25px",
            left: "170px",
            height: "35px",
            width: "2px",
            bgcolor: "icon.selected",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            bottom: "25px",
            left: "65px",
            height: "2px",
            width: "105px",
            bgcolor: "icon.selected",
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            left: "5px",
            bottom: "-10px",
            bgcolor: "background.paper",
            height: "60px",
            width: "60px",
            boxShadow,
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={theme === "dark" ? "#FFFFFF" : "#CFCFCF"}
            height="30px"
            width="30px"
          >
            <path
              fillRule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
              clipRule="evenodd"
            />
            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
          </svg>
        </Box>
      </>
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 60,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "background.default",
          borderRadius: "8px",
          borderWidth: "1px",
          borderColor: "border.primary",
          borderStyle: "solid",
          boxShadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "8%",
            minWidth: "55px",
            height: "100%",
            borderRightWidth: "1px",
            borderRightStyle: "dashed",
            borderRightColor: "border.primary",
            py: 2,
            px: 1,
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={StackDriveLogo}
              alt="stackrive-logo"
              style={{ width: "55%" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              my: 2,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {dashboardLinks.map((link: LinkProps, index: number) => (
              <Box
                key={link.id}
                component="div"
                sx={{
                  width: "100%",
                  height: "35px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  bgcolor: index === 0 ? "link.selected" : "link.default",
                  borderRadius: "4px",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    height: "15px",
                    width: "15px",
                    color: index === 0 ? "icon.selected" : "icon.default",
                  }}
                >
                  {link.icon}
                </Box>
                <Typography
                  sx={{
                    width: "30px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "7px",
                    fontWeight: 700,
                    textAlign: "center",
                    color: index === 0 ? "icon.selected" : "icon.default",
                  }}
                >
                  {link.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="div" sx={{ flex: 1, height: "100%" }}>
          <Box
            component="div"
            sx={{
              height: "40px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
            }}
          >
            <SearchIcon
              sx={{ height: 14, width: 14, color: "text.secondary" }}
            />
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={dummyUsers[0].img}
                alt="dummy-user"
                style={{ height: "20px", width: "20px", borderRadius: "50%" }}
              />
            </Box>
          </Box>
          <Box component="div" sx={{ px: 3, py: 2 }}>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                  My Drive
                </Typography>
                <MoreIcon sx={{ height: 10, width: 10 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "border.primary",
                  borderRadius: "3px",
                  p: 0.5,
                }}
              >
                <Box
                  component="div"
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: "3px",
                    height: "15px",
                    width: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GridIcon sx={{ height: "60%", width: "80%" }} />
                </Box>
                <Box
                  component="div"
                  sx={{
                    borderRadius: "3px",
                    height: "15px",
                    width: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ListIcon sx={{ height: "60%", width: "80%" }} />
                </Box>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{ width: "100%", my: 1, display: "flex", gap: "5px" }}
            >
              <Box
                component="div"
                sx={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "border.primary",
                  fontSize: "8px",
                  py: 0.5,
                  px: 1,
                  borderRadius: "4px",
                  color: "text.secondary",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                Type
                <MoreIcon sx={{ height: 10, width: 10 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "border.primary",
                  fontSize: "8px",
                  py: 0.5,
                  px: 1,
                  borderRadius: "4px",
                  color: "text.secondary",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                People
                <MoreIcon sx={{ height: 10, width: 10 }} />
              </Box>
              <Box
                component="div"
                sx={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "border.primary",
                  fontSize: "8px",
                  py: 0.5,
                  px: 1,
                  borderRadius: "4px",
                  color: "text.secondary",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                Modified
                <MoreIcon sx={{ height: 10, width: 10 }} />
              </Box>
            </Box>
            <Box component="div" sx={{ my: 2 }}>
              <Box component="div">
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "9px",
                    fontWeight: 600,
                  }}
                >
                  Folders
                </Typography>
                <Box
                  component="div"
                  sx={{
                    position: "absolute",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "border.primary",
                    borderRadius: "3px",
                    fontSize: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    py: 0.5,
                    px: 1,
                    top: 115,
                    right: 25,
                  }}
                >
                  Sort By <MoreIcon sx={{ height: 10, width: 10 }} />
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "repeat(2, 1fr)",
                      lg: "repeat(4, 1fr)",
                    },
                    gap: "5px",
                    my: 1,
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      height: "35px",
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      px: 1,
                    }}
                  >
                    <img
                      src={FolderImg}
                      alt="folder"
                      style={{ height: "14px", width: "14px" }}
                    />
                    <Typography sx={{ fontSize: "8px", flex: 1 }}>
                      folder_example
                    </Typography>
                    <MoreVertIcon sx={{ height: "10px", width: "10px" }} />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      height: "35px",
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      px: 1,
                    }}
                  >
                    <img
                      src={FolderImg}
                      alt="folder"
                      style={{ height: "14px", width: "14px" }}
                    />
                    <Typography sx={{ fontSize: "8px", flex: 1 }}>
                      course_images
                    </Typography>
                    <MoreVertIcon sx={{ height: "10px", width: "10px" }} />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      height: "35px",
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      display: {
                        md: "none",
                        lg: "flex",
                      },
                      alignItems: "center",
                      gap: "7px",
                      px: 1,
                    }}
                  >
                    <img
                      src={FolderImg}
                      alt="folder"
                      style={{ height: "14px", width: "14px" }}
                    />
                    <Typography sx={{ fontSize: "8px", flex: 1 }}>
                      23-04-2023
                    </Typography>
                    <MoreVertIcon sx={{ height: "10px", width: "10px" }} />
                  </Box>
                </Box>
              </Box>
              <Box component="div" sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "9px",
                    fontWeight: 600,
                  }}
                >
                  Files
                </Typography>
                <Box
                  component="div"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "repeat(2, 1fr)",
                      lg: "repeat(4, 1fr)",
                    },
                    gap: "5px",
                    my: 1,
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      display: "flex",
                      flexDirection: "column",
                      height: "110px",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        height: "35px",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        px: 1,
                      }}
                    >
                      <img
                        src={WordImg}
                        alt="folder"
                        style={{ height: "14px", width: "14px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "8px",
                          flex: 1,
                        }}
                      >
                        Untitled documen...
                      </Typography>
                      <MoreVertIcon sx={{ height: "10px", width: "10px" }} />
                    </Box>
                    <Box component="div" sx={{ pb: 1, px: 1, flex: 1 }}>
                      <Box
                        component="div"
                        sx={{
                          height: "100%",
                          width: "100%",
                          background: `url("${WordPreview}") no-repeat top center/cover`,
                          borderRadius: "2px",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      display: "flex",
                      flexDirection: "column",
                      height: "110px",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        height: "35px",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        px: 1,
                      }}
                    >
                      <img
                        src={ExcelImg}
                        alt="folder"
                        style={{ height: "14px", width: "14px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "8px",
                          flex: 1,
                        }}
                      >
                        404 page.xlsx
                      </Typography>
                      <MoreVertIcon sx={{ height: "10px", width: "10px" }} />
                    </Box>
                    <Box component="div" sx={{ pb: 1, px: 1, flex: 1 }}>
                      <Box
                        component="div"
                        sx={{
                          height: "100%",
                          width: "100%",
                          background: `url("${ExcelPreview}") no-repeat top center/cover`,
                          borderRadius: "2px",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      display: {
                        md: "none",
                        lg: "flex",
                      },
                      flexDirection: "column",
                      height: "110px",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        height: "35px",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        px: 1,
                      }}
                    >
                      <img
                        src={PhotoImg}
                        alt="folder"
                        style={{ height: "14px", width: "14px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "8px",
                          flex: 1,
                        }}
                      >
                        jumpstart.png
                      </Typography>
                      <MoreVertIcon sx={{ height: "10px", width: "10px" }} />
                    </Box>
                    <Box component="div" sx={{ pb: 1, px: 1, flex: 1 }}>
                      <Box
                        component="div"
                        sx={{
                          height: "100%",
                          width: "100%",
                          background: `url("${PngPreview}") no-repeat top center/cover`,
                          borderRadius: "2px",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      display: {
                        md: "none",
                        lg: "flex",
                      },
                      flexDirection: "column",
                      height: "110px",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        height: "35px",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        px: 1,
                      }}
                    >
                      <img
                        src={PdfImg}
                        alt="folder"
                        style={{ height: "14px", width: "14px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "8px",
                          flex: 1,
                        }}
                      >
                        Getting Started.pdf
                      </Typography>
                      <MoreVertIcon sx={{ height: "10px", width: "10px" }} />
                    </Box>
                    <Box component="div" sx={{ pb: 1, px: 1, flex: 1 }}>
                      <Box
                        component="div"
                        sx={{
                          height: "100%",
                          width: "100%",
                          background: `url("${PdfPreview}") no-repeat top center/cover`,
                          borderRadius: "2px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CentralizeFeature;
