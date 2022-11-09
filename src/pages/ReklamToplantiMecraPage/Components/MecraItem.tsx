import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { VscGistSecret } from "react-icons/vsc";
import { IconContext } from "react-icons";
import styled from "@emotion/styled";
import { IconType } from "react-icons/lib";
import { Grid } from "@mui/material";

type Props = {
  fileCount: number;
  Image: IconType;
  itemName: string;
};

const MecraItemCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#d2edfb",
  display: "flex",
  alignItems: "center",
  pointerEvents: "auto",
  padding: "0.0rem 0.3rem",
  justifyContent: "space-around",
  fontSize: "1.5rem",
  color: "#001e3c",
  flexDirection: "row",
  border: "none",
  minWidth: "220px",
  minHeight: "120px",
}));

//size={"2rem"} style={{ alignSelf: "center" }}

export default function MecraItem(props: Props) {
  const { Image } = props;

  return (
    <Grid 
    item
    xs={12}
    sm={6}
    md={6}
    lg={4}>
      <MecraItemCard>
          <Image size={"3rem"} style={{ alignSelf: "center", flex: "1" }} />

            <Typography
              sx={{
                paddingX: "auto",
                fontSize: "1.0rem",
                flex: "2",
                
              }}
            >
              {props.itemName}
            </Typography>
            <Typography sx={{
                flex: "1",
                fontSize: "0.99rem"
              }}
              ><b style={{fontSize: "1.2rem"}}>{props.fileCount}</b> Dosya</Typography>
      </MecraItemCard>
    </Grid>
  );
}
