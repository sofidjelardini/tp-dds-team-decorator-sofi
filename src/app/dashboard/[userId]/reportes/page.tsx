import Head from 'next/head';
import { PageContainer } from '../../components/PageContainer';
import Reportes from './components/Reportes';

export default function ReportesPage() {
    return (
        <PageContainer>
            <Head>
                <title>Reportes</title>
            </Head>
            <main>
                <Reportes />
            </main>
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
