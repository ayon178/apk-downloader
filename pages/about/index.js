import React from 'react'
import Page from '../../src/components/Page'
import { Container } from '@mui/material'
import MainNavbar from 'src/layouts/main/MainNavbar'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

function About() {
  return (
    <>
      <MainNavbar />
      <Page>
        <Container
          sx={{
            paddingTop: 10,
            paddingRight: {
              xs: '10px',
              sm: '50px',
              md: '100px',
            },
            paddingLeft: {
              xs: '10px',
              sm: '50px',
              md: '100px',
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: 'primary.main',
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold',
                  textAlign: 'center',
                color: 'white',
                fontSize: {
                  xs: '1rem',
                  sm: '1.5rem',
                },
              }}
            >
              App Description of “SEL CONNECT“
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 'normal',
                  textAlign: 'center',
                color: 'white',
                mt: 2,
                fontSize: {
                  xs: '.8rem',
                },
              }}
            >
              Custom Property Management Application
              <br />
              designed for real estate consumers
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              mt: 5,
              textAlign: 'justify',
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            SEL Connect is a Property Management Application designed to
            digitally connect real estate consumers with SEL, for their various
            property related communications & updates.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 2,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            SEL is a quality oriented Real Estate & Construction Engineering
            company providing housing services to its consumers for last 40
            years in Bangladesh. In the digital era, it is immensely important
            to help the consumers connect with the online platform in an easy
            way in their feedbacks & property related communication activities.
            Therefore this custom application is developed according to the
            structure of the need of real estate consumers & the After Sales
            services of SEL. The goal is to connect consumer feedbacks & updates
            instantly through this app.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 2,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            Discover several features of property offers, property updates,
            communication & feedback options launched with this app
          </Typography>
        </Container>
      </Page>
    </>
  )
}

export default About
