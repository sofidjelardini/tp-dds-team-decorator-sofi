import Head from 'next/head';
import { PageContainer } from '../../components/PageContainer';
import RegistroPersonasVulnerables from './components/RegistroPersonasVulnerables';

export default function RegistroPersonasPage() {
    return (
        <PageContainer>
            <Head>
                <title>Registrar Persona Vulnerable</title>
            </Head>
            <main>
                <RegistroPersonasVulnerables />
            </main>
        </PageContainer>
    );
}
