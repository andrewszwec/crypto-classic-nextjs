import dynamic from 'next/dynamic';
const Seo = dynamic(import('components/seo'));
const Layout = dynamic(import('components/layout'));
const Banner = dynamic(import('sections/banner'));
const WhyChoose = dynamic(import('sections/why-choose'));
// const SalesInvestment = dynamic(import('sections/sales-investment'));
// const RoadMap = dynamic(import('sections/roadmap'));
// const CountDownBlock = dynamic(import('sections/countdown'));
// const WorldwideUsers = dynamic(import('sections/worldwide-user'));
// const OurWallet = dynamic(import('sections/our-wallet'));
const CallToAction = dynamic(import('sections/call-to-action'));
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Seo
            title="Fusion Labs"
            description="Product Services for Crypto"
          />
          <Banner />
          <WhyChoose />
          {/* <SalesInvestment /> */}
          {/* <RoadMap /> */}
          {/* <CountDownBlock />
          <WorldwideUsers /> */}
          {/* <OurWallet /> */}
          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
