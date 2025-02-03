import Head from 'next/head';
import { PageContainer } from '../../components/PageContainer';
import FormularioIncidente from './components/FormularioIncidente';

export default function FormularioIncidentesPage() {
    return (
        <PageContainer>
            <Head>
                <title>Incidente en Heladera</title>
            </Head>
            <main>
                <FormularioIncidente />
            </main>
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
