import { PageContainer } from '../../components/PageContainer';
import CargarColaboracionesForm from './components/CargarColaboraciones';

export default function CargaColaboraciones() {
    return (
        <PageContainer>
            <CargarColaboracionesForm />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
