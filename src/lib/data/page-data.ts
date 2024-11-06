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
        tecnicos: {
            title: 'Manejo Técnicos de Heladeras',
            description:
                'Gestiona el alta, baja y modificación de información de técnicos para el mantenimiento de las heladeras.',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Manejo Técnicos',
                    link: `/${idUser}/tecnicos`
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
        },
        administradores: {
            title: 'Administradores',
            description: 'Edita información del los administradores',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Administradores',
                    link: `/${idUser}/administradores`
                }
            ]
        },
        'cargar-colaboraciones': {
            title: 'Carga Masiva Colaboraciones',
            description: 'Carga varias colaboraciones juntas.',
            breadcrumbs: [
                { title: 'Inicio', link: '/' },
                {
                    title: 'Cargar Colaboraciones',
                    link: `/${idUser}/cargar-colaboraciones`
                }
            ]
        }
    };

    return data[pageName];
};
