import { PageContainer } from '../../components/PageContainer';
import Heladeras from './components/Heladeras';

export default function TecnicosPage() {
    return (
        <PageContainer>
            <Heladeras />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
