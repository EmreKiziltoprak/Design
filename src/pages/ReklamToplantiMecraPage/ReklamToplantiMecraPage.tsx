import React from "react";
import MecraItem from "./Components/MecraItem";
import { Box, Grid, Typography } from "@mui/material";
import { VscGistSecret } from "react-icons/vsc";
import styled from "@emotion/styled";
import { MdCleaningServices } from "react-icons/md";
import {GiScales} from "react-icons/gi"
import {CgSmartHomeRefrigerator} from "react-icons/cg"
import { CiForkAndKnife, CiDesktop, CiPill, CiBeerMugFull, CiLock, CiFolderOn } from "react-icons/ci";
function ReklamToplantiMecraPage(props: Props) {

  const { meetingNumber, meetingDate } = props;

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle farthest-corner at center,rgba(58,137,180,0) 0,rgba(58,137,180,.8) 100%),#FFF"
    }}>
    <ReklamToplantiMecraPageStyled>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
  
        }}
      >
        <Box
          sx={{
            mb: "0.3rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <TitleText>Toplantı: </TitleText>
          <RegularText>{meetingNumber}</RegularText>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <TitleText>Toplantı Tarihi: </TitleText>
          <RegularText>{meetingDate}</RegularText>
        </Box>
      </Box>

      <Grid item container spacing={2} direction="row">
        <MecraItem
          itemName="Örtülü Reklam"
          fileCount={3}
          Image={CiLock}
        />
        <MecraItem
          itemName="Kozmetik ve Temizlik Ürünleri"
          fileCount={3}
          Image={MdCleaningServices}
        />
        <MecraItem itemName="Sağlık" fileCount={3} Image={CiPill} />
        <MecraItem itemName="Gıda" fileCount={3} Image={CiForkAndKnife} />
        <MecraItem itemName="Teknoloji" fileCount={3} Image={CiDesktop} />
        <MecraItem
          itemName="Dayanıklı Tüketim Malları"
          fileCount={3}
          Image={CgSmartHomeRefrigerator}
        />

        <MecraItem
          itemName="Tütün ve Alkol"
          fileCount={3}
          Image={CiBeerMugFull}
        />

        <MecraItem
          itemName="Haksız Ticari Uygulamalar"
          fileCount={3}
          Image={GiScales}
        />

        <MecraItem
          itemName="Diğer Konuların Konuşulması"
          fileCount={3}
          Image={CiFolderOn}
        />
      </Grid>
    </ReklamToplantiMecraPageStyled>
    </Box>
  );
}

type Props = {
  meetingNumber: number;
  meetingDate: string;
};

const ReklamToplantiMecraPageStyled = styled(Box)(({ theme }) => ({
    maxWidth: "960px",
    background: "#FFF",
    WebkitBoxSizing: "border-box",
    boxSizing: "border-box",
    boxShadow: "0 .4em .5em rgba(33,78,103,.2)",
    padding: "0.6rem 0.9rem",
    borderRadius: 15,
    overflow: "overflow",
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: 500,
  paddingRight: "0.5rem"
  
}));

const RegularText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: 100,
  paddingRight: "0.5rem",
  color: "gray"
}));

export default ReklamToplantiMecraPage;
