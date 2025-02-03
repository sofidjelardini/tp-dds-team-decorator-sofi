import { PageContainer } from '../../components/PageContainer';
import EditarPerfil from './components/EditarPerfil';

export default function EditarPerfilPage() {
    return (
        <PageContainer>
            <EditarPerfil />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
