export interface Breadcrumb {
    title: string;
    link: string;
}

export interface PageData {
    title: string;
    description: string;
    breadcrumbs: Breadcrumb[];
}

export const getPageData = (
    pageName: string,
    idUser: string | number
): PageData => {
    const data: Record<string, PageData> = {
        heladeras: {
            title: 'Heladeras',
            description: 'Gestiona el alta y baja de las heladeras',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Heladeras',
                    link: `/${idUser}/heladeras`
                }
            ]
        },
        'registro-personas': {
            title: 'Registro Personas en Situación Vulnerable',
            description:
                'Gestiona el alta y baja de personas en situación vulnerable',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Registro Personas',
                    link: `/${idUser}/registro-personas`
                }
            ]
        },
        viandas: {
            title: 'Viandas',
            description: 'Gestiona la carga de Viandas',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Viandas',
                    link: `/${idUser}/viandas`
                }
            ]
        },
        donaciones: {
            title: 'Donaciones',
            description: 'Gestiona la carga de Donaciones de Dinero',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Donaciones',
                    link: `/${idUser}/donaciones`
                }
            ]
        },
        distribucion: {
            title: 'Distribución de Viandas',
            description: 'Cargá los datos necesarios para distribuir viandas.',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Distribución de Viandas',
                    link: `/${idUser}/distribucion`
                }
            ]
        },
        'registro-tecnicos': {
            title: 'Registro Técnicos de Heladeras',
            description:
                'Gestiona el alta y baja de técnicos para el mantenimiento de las heladeras.',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Registro Técnicos',
                    link: `/${idUser}/registro-tecnicos`
                }
            ]
        },
        'editar-perfil': {
            title: 'Editar Perfil',
            description: 'Editá tu información.',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Editar Perfil',
                    link: `/${idUser}/editar-perfil`
                }
            ]
        }
    };

    return data[pageName];
};
