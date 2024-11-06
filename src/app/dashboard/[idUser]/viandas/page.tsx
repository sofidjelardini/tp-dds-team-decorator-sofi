import Head from 'next/head';
import { PageContainer } from '../../components/PageContainer';
import FormularioVianda from './components/FormularioVianda';

export default function ViandasPage() {
    return (
        <PageContainer>
            <Head>
                <title>Cargar Viandas</title>
            </Head>
            <FormularioVianda />
        </PageContainer>
    );
}
