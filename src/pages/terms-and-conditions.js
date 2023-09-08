import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { TermsAndConditions } from "../components/termsAndConditions.js";
import { DashboardLayout } from "../components/dashboard-layout.js";
import LoaderLayout from "../components/loaderLayout";

const Page = () => (
  <LoaderLayout>
    <Head>
      <title>Terms and Conditions | Admin Panel</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Terms and Conditions
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <TermsAndConditions />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </LoaderLayout>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
