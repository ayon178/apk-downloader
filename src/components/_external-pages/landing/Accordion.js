import { Icon } from '@iconify/react'
import { useEffect, useRef, useState } from 'react'
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill'
// material
import { styled } from '@mui/material/styles'
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material'
// utils
import mockData from '../../../../utils/mock-data'
// components
import Page from '../../Page'
//
import { Block } from './Block'

// ----------------------------------------------------------------------

const MOCK_ACCORDIONS = [...Array(12)].map((_, index) => ({
  id: mockData.id(index),
  value: `panel${index + 1}`,
  heading: `Question ${index + 1}`,
  subHeading: mockData.text.title(index),
  detail: mockData.text.description(index),
}))

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(15),
}))

// ----------------------------------------------------------------------

export default function AccordionComponent() {
  const [controlled, setControlled] = useState(false)
  const feedbackRef = useRef(null)

  useEffect(() => {
    if (window.location.hash === '#feedback') {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleChangeControlled = panel => (event, isExpanded) => {
    setControlled(isExpanded ? panel : false)
  }

  return (
    <RootStyle>
      <Container id="feedback" ref={feedbackRef}>
        <Typography
          variant="h2"
          color="primary"
          sx={{ mb: 3, textAlign: 'center' }}
        >
          FAQ
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', marginBottom: 5, textAlign:'center' }}
        >
          This Property Management Application is new concept in the country. To
          help consumers adopt this solution easily it is necessary that all
          relevant questions – answers are openly accessible with the
          application download page. There are total 12 questions are stated
          here which should cover the major areas of application uses. These are
          subject to changes depending on reviews & feedbacks.
        </Typography>
        <Block>
          {MOCK_ACCORDIONS.map((item, index) => (
            <Accordion
              key={item.value}
              expanded={controlled === item.value}
              onChange={handleChangeControlled(item.value)}
            >
              <AccordionSummary
                expandIcon={
                  <Icon icon={arrowIosDownwardFill} width={20} height={20} />
                }
              >
                <Typography
                  variant="subtitle1"
                  sx={{ width: '33%', flexShrink: 0 }}
                >
                  {item.heading}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  {item.subHeading}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Block>
      </Container>
    </RootStyle>
  )
}
