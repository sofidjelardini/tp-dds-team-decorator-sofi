import { PageContainer } from '../../components/PageContainer';
import DonacionesForm from './components/Donaciones';

export default function DonacionesPage() {
    return (
        <PageContainer>
            <DonacionesForm />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
