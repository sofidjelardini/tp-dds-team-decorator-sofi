'use client';
import { DataFormProvider } from '../context/DataFormContext';
import RegistroPage from './registro/page';

export default function RegistroPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            usuario: '',
            password: '',
            password2: '',
            personaJuridica: false,
            ayudarPersonas: false
        }
    });

    async function onSubmit(dataForm: z.infer<typeof formSchema>) {}

    return (
        <DataFormProvider>
            <RegistroPage />
        </DataFormProvider>
    );
}
