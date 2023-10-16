import React from 'react'
import { styled } from '@mui/material/styles'
import Page from '../../Page'
import { Container, Typography, useMediaQuery } from '@mui/material'

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
}))

const responsiveIframeStyle = {
  position: 'relative',
  paddingTop: '56.25%',
  overflow: 'hidden',
  marginLeft: 'auto',
}

const ResponsiveIframe = props => {
  return (
    <div style={{ ...responsiveIframeStyle, ...props.style }}>
      <iframe
        {...props}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '70%',
          ...props.style,
        }}
      />
    </div>
  )
}

const Details = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme =>
    theme.breakpoints.between('md', 'lg')
  )

  const iframeWidth = isSmallScreen ? '100%' : isMediumScreen ? '90%' : '90%'

  return (
    <RootStyle>
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h2" color="primary" sx={{ mb: 3 }}>
          Description
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', marginBottom: 5 }}
        >
          This is a simple app to help you manage your tasks. You can add, edit,
          delete and mark as completed your tasks. absolutely free and without
          ads. app is available on android and ios. atn is a simple app to help
          you manage your tasks. You can add, edit, delete and mark as completed
          your tasks. absolutely free and without ads. app is available on
          android and ios. atn is a simple app to help you manage your tasks.
        </Typography>

        <ResponsiveIframe
          src="https://www.youtube.com/embed/O8V8aLwOGHA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: iframeWidth,
          }}
        />
      </Container>
    </RootStyle>
  )
}

export default Details
