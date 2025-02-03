import { PageContainer } from '../../components/PageContainer';
import DistribucionViandasForm from './components/DistribucionViandas';

export default function DistribucionPage() {
    return (
        <PageContainer>
            <DistribucionViandasForm />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
