import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {}

function MeetingHeader({}: Props) {
  return (
    <Box sx={{
      minWidth: "100%",
      backgroundColor: "#347ab6",
      height: "100px",
      display: "flex",
      flexDirection: "column",
      paddingY: "1.0rem",
      justifyContent: "flex-end",
      alignItems: "center"
    }}>
      <Box sx={{
        maxWidth: "145px"
      }}>
      <Typography
      sx={{
        color: "white",
        fontSize: "1.7rem"
      }}
      >Gümrük ve Ticaret Bakanlığı Reklam Kurulu Başkanlığı</Typography>
      </Box>
    </Box>
  )
}

export default MeetingHeader