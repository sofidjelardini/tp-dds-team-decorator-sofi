import Head from 'next/head';
import { PageContainer } from '../../components/PageContainer';
import FormularioPersona from './components/FormularioPersona';
import FormPersona from './components/FormPersona';
import RegistroPersonasSection from './components/RegistroPersonasSection';

export default function RegistroPersonasPage() {
    return (
        <PageContainer>
            <Head>
                <title>Registrar Persona Vulnerable</title>
            </Head>
            <main>
                {/* <FormularioPersona /> */}
                {/* <FormPersona /> */}
                <RegistroPersonasSection />
            </main>
        </PageContainer>
    );
}
