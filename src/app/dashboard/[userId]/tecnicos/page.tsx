import { PageContainer } from '../../components/PageContainer';
import Tecnicos from './components/Tecnicos';

export default function TecnicosPage() {
    return (
        <PageContainer>
            <Tecnicos />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
