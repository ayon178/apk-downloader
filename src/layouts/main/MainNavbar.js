// next
import NextLink from 'next/link'
import { useRouter } from 'next/router'
// material
import { styled } from '@mui/material/styles'
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  Typography,
} from '@mui/material'
// hooks
import useOffSetTop from '../../hooks/useOffSetTop'
// components
import { ButtonAnimate } from '../../../src/components/animate'
import Image from 'next/image'
import logoImage from '../../assets/downloaded/main.png'
import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('../../components/Logo'), { ssr: false })

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 88

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP,
  },
}))

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}))

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const router = useRouter()
  const isOffset = useOffSetTop(100)
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            height: { md: APP_BAR_DESKTOP - 16 },
            backdropFilter: 'blur(6px)',
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <NextLink href="/">
            {/* <Logo /> */}
            <Image src={logoImage} alt="logo" width={70} height={70} />
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />

          <Typography
            onClick={() => router.push('/about')}
            variant="body2"
            sx={{
              marginRight: 2,
              color: 'primary.main',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: {
                xs: '0.6rem',
                sm: '0.7rem',
                md: '1rem',
              },
            }}
          >
            About App
          </Typography>

          <Typography
            onClick={() => router.push('/privacy-policy')}
            variant="body2"
            sx={{
              marginRight: 2,
              color: 'primary.main',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: {
                xs: '0.6rem',
                sm: '0.7rem',
                md: '1rem',
              },
            }}
          >
            Privacy Policy
          </Typography>

          <ButtonAnimate>
            <Button
              variant="contained"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'common.white',
                fontSize: {
                  xs: '0.6rem',
                  sm: '0.7rem',
                  md: '.9rem',
                },
              }}
            >
              Download
            </Button>
          </ButtonAnimate>
          <ButtonAnimate>
            <Button
              variant="outlined"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'main.primary',
                marginLeft: 2,
                fontSize: {
                  xs: '0.6rem',
                  sm: '0.7rem',
                  md: '.9rem',
                },
              }}
            >
              Register Now
            </Button>
          </ButtonAnimate>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  )
}
