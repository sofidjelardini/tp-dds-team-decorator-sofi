import { Fragment } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from './ui/breadcrumb';
import { Slash } from 'lucide-react';

type BreadcrumbItemProps = {
    title: string;
    link: string;
};

const Breadcrumbs = ({ items }: { items: BreadcrumbItemProps[] }) => {
    return (
        <Breadcrumb className='mb-4'>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <Fragment key={item.title}>
                        {index !== items.length - 1 && (
                            <BreadcrumbItem>
                                <BreadcrumbLink href={item.link}>
                                    {item.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                        {index < items.length - 1 && (
                            <BreadcrumbSeparator>
                                <Slash />
                            </BreadcrumbSeparator>
                        )}
                        {index === items.length - 1 && (
                            <BreadcrumbPage>{item.title}</BreadcrumbPage>
                        )}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default Breadcrumbs;
