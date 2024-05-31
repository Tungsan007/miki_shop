import Page from 'src/components/Page';
import MainLayout from 'src/layouts';
import AboutSection2 from 'src/sections/main/about/AboutSection2';
//always import from src folder, not "./", "../", "../../",...

Recruit.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function Recruit() {
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
            <AboutSection2 />
        </div>
    );
}
