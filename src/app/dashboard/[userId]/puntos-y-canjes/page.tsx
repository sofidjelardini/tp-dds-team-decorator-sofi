import Head from 'next/head';
import { PageContainer } from '../../components/PageContainer';
import PuntosCanjesSection from './components/PuntosCanjesSection';

export default function RegistroPersonasPage() {
    return (
        <PageContainer>
            <Head>
                <title>Puntos y canjes</title>
            </Head>
            <main>
                <PuntosCanjesSection />
            </main>
        </PageContainer>
    );
}
