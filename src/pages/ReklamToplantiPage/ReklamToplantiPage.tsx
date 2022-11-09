import { Box } from '@mui/system'
import React from 'react'
import MeetingCard from './components/MeetingCard'
import MeetingHeader from './components/MeetingHeader'
import {Grid} from "@mui/material"
import MecraItem from '../ReklamToplantiMecraPage/Components/MecraItem'
import { VscGistSecret } from "react-icons/vsc";

type Props = {}

function ReklamToplantiPage(props: Props) {
  return (
    <Grid
    container
    spacing={2}
    sx={{padding: "1rem 1rem"}}
  >

      <MeetingCard/>
      <MeetingCard/>
      <MeetingCard/>
      <MeetingCard/>
      <MeetingCard/>
      <MeetingCard/>
      <MeetingCard/>
      
     
    
    </Grid>
  )
}

export default ReklamToplantiPage