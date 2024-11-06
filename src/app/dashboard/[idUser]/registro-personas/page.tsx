import Head from 'next/head';
import { PageContainer } from '../../components/PageContainer';
import FormularioPersona from './components/FormularioPersona';

export default function RegistroPersonasPage() {
    return (
        <PageContainer>
            <Head>
                <title>Registrar Persona Vulnerable</title>
            </Head>
            <main>
                <FormularioPersona />
            </main>
        </PageContainer>
    );
}
