import React from "react";
import {
  CardContent,
  Typography,
  Card,
  Stack,
  useTheme,
} from "@mui/material";
import { orderBy } from "lodash";

const ServiceCard = ({ data }) => {
  const theme = useTheme();
  const sortedData = orderBy(data, "service_order");

  const topStyle = {
    backgroundColor: "#f4f4f4",
    padding: "1rem 6rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 1rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1rem 2rem",
    },
  };
  const styles = {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      textAlign: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      width: "100% !important",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
    gap: "1rem",
  };

  return (
    <>
      {sortedData.map((item, index) => (
        <Stack key={index} sx={topStyle}>
          <Card
            className="body-content"
            sx={{
              display: "flex",
              flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <img
              component="img"
              width="50%"
              alt="Paella dish"
              src={item.icon}
            />
            <CardContent style={styles}>
              <Stack>
                <img src={item.photo} alt="icon" width={50} />
              </Stack>
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "1.6rem", fontWeight: "600" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ fontSize: ".785rem", margin: "2rem 0" }}
                  dangerouslySetInnerHTML={{ __html: item.description1 }}
                />

                <Typography
                  sx={{
                    background: "#e9ebff",
                    textAlign: "justify",
                    fontSize: ".785rem",
                    padding: "1rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.description2 }}
                />
              </CardContent>
            </CardContent>
          </Card>
        </Stack>
      ))}
    </>
  );
};

export default ServiceCard;