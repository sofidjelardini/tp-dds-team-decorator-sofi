import { PageContainer } from '../../components/PageContainer';
import GestionTarjetas from './components/GestionTarjetas';

export default function TarjetasPage() {
    return (
        <PageContainer>
            <GestionTarjetas />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
