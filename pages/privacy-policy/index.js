import React from 'react'
import Page from '../../src/components/Page'
import { Container } from '@mui/material'
import MainNavbar from 'src/layouts/main/MainNavbar'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

function Privacy() {
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
              Privacy Policy for “ SEL CONNECT ”
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
            This Privacy Policy document contains types of information that is
            collected and recorded by SEL Connect application and how we use it.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 3,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              1.{' '}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              Information You Provide Us:
            </Typography>
            <br />
            Information is provided when you only upload it to the app. You may
            provide us with documents and pictures. While it may not constitute
            personal information, if you use our services, we will likely host
            data you provide us in the application related to your features
            only. As such, we do not access, use, or disclose your data. This
            app doesn’t access any other data on your devices besides your
            uploaded data.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 3,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              2.{' '}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              Third-Party Policies :
            </Typography>
            <br />
            Third-party ad servers, links, or ad networks and technologies like
            cookies, JavaScript, or Web beacons are not used in the app. This
            app is entirely ad-free. No third-party advertisement or features
            are used in this app. No information or data will be shared with
            third parties as this app is entirely free from third-party use.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 3,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              3.{' '}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              HOW WE USE YOUR INFORMATION :
            </Typography>
            <br />
            We do not use, share, or reference your information or application
            use related data for any other purposes except for usability of the
            application. Your provided feedbacks, communication information &
            data inputs are stored & used as records & application
            functionalities.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 3,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              4.{' '}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              WHO DO WE SHARE YOUR INFORMATION WITH :
            </Typography>
            <br />
            For any reason of Legal and Regulatory Disclosures, we may disclose
            your information or application related data to courts, law
            enforcement, governmental authorities, tax authorities, or legally
            bound third parties, if and to the extent we are required or
            permitted to do so by law or if such disclosure is reasonably
            necessary: (a) to comply with our legal obligations; (b) to comply
            with a valid legal request or to respond to claims; (c) to respond
            to a valid legal request relating to a investigation or alleged or
            suspected illegal activity or any other activity that may expose us,
            you, or any other of our users to legal liability; or (d) to enforce
            and administer our Terms of Service or other agreements with users.
            Such disclosures may be necessary to comply with our legal
            obligations, for the protection of your or another person’s legal
            rights & interests, or for the purposes of keeping our services
            secure, preventing harm or crime, enforcing or defending legal
            rights, or facilitating the collection of taxes.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 3,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              5.{' '}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              SECURITY:
            </Typography>
            <br />
            We are continuously implementing and updating administrative,
            technical, and physical security measures to help protect your
            information against unauthorized access, loss, destruction, or
            alteration. Sensitive data is encrypted and website connections are
            protected using strong transport layer security.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 3,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              6.{' '}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              User access for Children :
            </Typography>
            <br />
            Information for Children, Individuals under 18 are not permitted to
            use our services, and we do not collect information on individuals
            under 18 years of age, regardless of their residency. Incidental
            exposure to this information may be possible if, for example, our
            customers upload this information to one of our services.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 3,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              7.{' '}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              Service Providers (If Need) :
            </Typography>
            <br />
            We may employ third-party companies and individuals due to the
            following reasons:
            <br />
            To facilitate our Service;
            <br />
            To provide the Service on our behalf;
            <br />
            To perform Service-related services; or
            <br />
            To assist us in analyzing how our Service is used.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              mt: 3,
              fontSize: {
                xs: '.8rem',
                sm: '.9rem',
              },
            }}
          >
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              8.{' '}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              Changes to This Privacy Policy :
            </Typography>
            <br />
            We may update our privacy policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new privacy policy on this
            page.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontWeight: 'normal',
              textAlign: 'justify',
              color: 'text.secondary',
              paddingBottom: 5,
              mt: 5,
              fontSize: {
                xs: '.9rem',
              },
            }}
          >
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our App Services. If you choose to use our Service,
            then you agree to the collection and use of information in relation
            to this policy. The file sharing that this app collects is used in
            the database for your account; where your data will be recorded for
            application usability.
          </Typography>
        </Container>
      </Page>
    </>
  )
}

export default Privacy
