import React from "react";
import { Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdNoMeetingRoom, MdOutlineMeetingRoom } from "react-icons/md";
import styled from "@emotion/styled";

interface MeetingCardProps {
  color?: string;
  no?: number;
  date?: string;
  recordCount?: number;
  icon?: string;
}

const CardButton = styled("button")(({ theme }) => ({
  backgroundColor: "white",
  pointerEvents: "auto",
  padding: "0rem 0rem",
  fontSize: "0.98rem",
  
  color: "#001e3c",
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  border: "none",
  minWidth: "45px",
  width: "100%",
  flex: 2,
}));

function MeetingCard(props: MeetingCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Card
        sx={{
          boxShadow: 3,
          minWidth: "240px",
          maxWidth: "550px",
        }}
      >
        <CardContent>
          <Box>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <Typography variant="h6" component="div" sx={{ mr: "0.3rem" }}>
                  Toplantı No:
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mr: "auto" }}
                >
                  3234
                </Typography>

                <MdOutlineMeetingRoom size={"1.5rem"} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <Typography
                  component="div"
                  sx={{ mr: "0.3rem", fontSize: "0.85rem" }}
                >
                  Toplantı Günü:
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ mr: "0.3rem", fontSize: "0.8rem" }}
                  color="text.secondary"
                >
                  13/07/2021
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <Typography
                  component="div"
                  sx={{ mr: "0.3rem", fontSize: "0.85rem" }}
                >
                  Dosya sayısı:
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ mr: "0.3rem", fontSize: "0.8rem" }}
                  color="text.secondary"
                >
                  136
                </Typography>
              </Box>

              <Box
                sx={{
                  "&>*:nth-child(1)": { mt: 3 },
                  "&>*:last-child": { mb: 0 },
                  "&>*:not(:last-child)": { mb: 1 },
                }}
              >
                <CardButton>Gündem</CardButton>
                <CardButton>Reklam Kurulu Gündem</CardButton>
                <CardButton>4.1 Diğer Konuların Görüşülmesi</CardButton>
                <CardButton>5.1 İncelemeye Alınmayanlar</CardButton>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MeetingCard;
