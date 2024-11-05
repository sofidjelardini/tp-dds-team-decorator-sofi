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
        }
    };

    return data[pageName];
};
