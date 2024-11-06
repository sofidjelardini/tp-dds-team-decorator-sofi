export default function AuthLayout({
    children,
    modal
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <main className='w-full flex-1 overflow-hidden h-screen flex items-center justify-center'>
            {children}
        </main>
    );
}
