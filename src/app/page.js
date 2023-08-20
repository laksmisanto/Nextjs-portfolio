import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Feedback from "@/components/Feedback";
import Partners from "@/components/Partners";
import Subscribe from "@/components/Subscribe";
import Teammembers from "@/components/Team-member";
import Work from "@/components/Work";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Clients />
        <Teammembers />
        <Blog />
        <Work />
        <Partners />
        <Feedback />
        <Subscribe />
      </Layout>
    </>
  );
}
