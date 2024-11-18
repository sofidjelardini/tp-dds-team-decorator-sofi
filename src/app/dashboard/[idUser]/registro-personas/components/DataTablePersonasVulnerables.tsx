'use client';

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnDef
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { PersonaVulnerableAction } from './PersonaVulerableAction';

export type PersonaVulnerable = {
    id: string;
    nombre: string;
    tarjeta: string;
    cantMenoresACargo: number;
};

const personasVulnerables: PersonaVulnerable[] = [
    {
        id: '1',
        nombre: 'adsd',
        tarjeta: '123123',
        cantMenoresACargo: 0
    },
    {
        id: '2',
        nombre: 'dasdasda',
        tarjeta: '0o3102o30',
        cantMenoresACargo: 1
    }
];
export const columns: ColumnDef<PersonaVulnerable>[] = [
    {
        accessorKey: 'id',
        header: 'id'
    },
    {
        accessorKey: 'nombre',
        header: 'Nombre'
    },
    {
        accessorKey: 'tarjeta',
        header: 'Tarjeta asociada'
    },
    {
        id: 'actions',
        cell: ({ row }) => <PersonaVulnerableAction data={row.original} />
    }
];

export function DataTablePersonasVulnerables({
    idUser
}: {
    idUser: string | number;
}) {
    // const { categories, isLoading } = useCategoryFetcher(idUser);

    const table = useReactTable({
        data: personasVulnerables,
        columns,
        getCoreRowModel: getCoreRowModel()
    });
    // if (isLoading) return <Spinner>Cargando tabla...</Spinner>;

    return (
        <div className='rounded-md border'>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map(row => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && 'selected'}
                            >
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className='h-24 text-center'
                            >
                                Sin resultados
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
