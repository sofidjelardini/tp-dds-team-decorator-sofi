import { PageContainer } from '../../components/PageContainer';
import FormAdministrador from './components/FormAdministrador';

export default function AdministradorPage() {
    return (
        <PageContainer>
            <FormAdministrador />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
