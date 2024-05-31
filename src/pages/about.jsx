import Page from 'src/components/Page';
import MainLayout from 'src/layouts';
import AboutSection1 from 'src/sections/main/about/AboutSection1';
//always import from src folder, not "./", "../", "../../",...

AboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function AboutPage() {
  return (
    <div>
      <Page
        data={{
          title: 'Miki Shop',
          description: '',
          url: '',
          thumbnailUrl: '',
        }}
      />
      <AboutSection1 />
    </div>
  );
}
