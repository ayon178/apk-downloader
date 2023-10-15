import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Container, Typography } from '@mui/material'
import Page from '../../Page'
import Image from 'next/image'
import phoneImage from '../../../assets/downloaded/phone.png'
import google from '../../../assets/downloaded/google.png'
import apple from '../../../assets/downloaded/app.png'
import rq from '../../../assets/downloaded/qr.png'

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}))

const AppInterface = () => {
  return (
    <RootStyle>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Image src={phoneImage} alt="phone" width={400} height={600} />
          <Box sx={{ width: '50%', textAlign: 'right' }}>
            <Typography variant="h2" color="primary" sx={{ mb: 3 }}>
              App interface
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Fully coded components and pages built with Material-UI can be
              used to build applications like Dropbox or Medium in minutes.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: 2,
                gap: 2,
              }}
            >
              <Image src={google} alt="google" width={170} height={60} />
              <Image src={apple} alt="apple" width={170} height={60} />
            </Box>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', marginTop: 4, marginBottom: 2 }}
            >
              or scan this QR code below
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Image
                style={{
                  border: '3px solid #590504',
                  borderRadius: '5px',
                  padding: '5px',
                }}
                src={rq}
                alt="qr"
                width={200}
                height={200}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </RootStyle>
  )
}

export default AppInterface
