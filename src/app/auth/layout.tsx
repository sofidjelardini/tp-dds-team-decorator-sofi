import { DataFormProvider } from '../context/DataFormContext';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return <DataFormProvider>{children}</DataFormProvider>;
}
