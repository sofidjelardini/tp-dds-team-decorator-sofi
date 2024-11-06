import Head from 'next/head';
import { PageContainer } from '../../components/PageContainer';
import RegistroTecnico from './components/RegistroTecnico';

export default function RegistroTecnicosPage() {
    return (
        <PageContainer>
            <Head>
                <title>Registrar Técnico</title>
            </Head>
            <main>
                <RegistroTecnico />
            </main>
        </PageContainer>
    );
}
