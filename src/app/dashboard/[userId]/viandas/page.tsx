import { PageContainer } from '../../components/PageContainer';
import FormularioVianda from './components/FormularioVianda';

export default function ViandasPage() {
    return (
        <PageContainer>
            <FormularioVianda />
        </PageContainer>
    );
}

export async function generateStaticParams() {
    return [{ userId: 'default' }];
}
