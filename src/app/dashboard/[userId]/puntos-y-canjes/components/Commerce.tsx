'use client';
import { useState, useEffect } from 'react';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Commerce = ({
    puntajeUsuario,
    setActualizar
}: {
    puntajeUsuario: number;
    setActualizar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [category, setCategory] = useState('electronics');
    const [products, setProducts] = useState<any>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        if (modalVisible) {
            const timer = setTimeout(() => {
                setModalVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [modalVisible]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                `https://fakestoreapi.com/products/category/${category}`
            );
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [category]);

    const hacerCanje = async (producto: any) => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error('No hay usuario logueado');
            return;
        }

        try {
            const response = await fetch('/api/canjes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: Math.floor(Math.random() * 999999),
                    producto,
                    userId
                })
            });

            if (!response.ok) {
                throw new Error('Error al hacer el canje');
            }

            const data = await response.json();
            setModalVisible(true);
            setActualizar(true);
        } catch (error) {
            console.error('Error al hacer el canje:', error);
        }
    };

    return (
        <div className='container mx-auto mt-4'>
            <h2 className='text-xl font-bold mb-4'>Productos participantes</h2>

            <Select
                onValueChange={value => setCategory(value)}
                defaultValue='electronics'
            >
                <SelectTrigger className='w-[200px]'>
                    <SelectValue placeholder='Selecciona una categoría' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='electronics'>Electrónica</SelectItem>
                    <SelectItem value='jewelery'>Joyería</SelectItem>
                    <SelectItem value="men's clothing">
                        Ropa para hombres
                    </SelectItem>
                    <SelectItem value="women's clothing">
                        Ropa para mujeres
                    </SelectItem>
                </SelectContent>
            </Select>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {products.map(
                    (product: {
                        id: any;
                        image: any;
                        title: any;
                        price: number;
                    }) => (
                        <Card key={product.id} className='p-4'>
                            <CardHeader>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className='h-48 object-cover mb-4'
                                />
                                <CardTitle>{product.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-sm'>
                                    Puntos necesarios:{' '}
                                    {product.price.toFixed(2)}
                                </p>
                            </CardContent>
                            <Button
                                onClick={() => {
                                    hacerCanje(product);
                                }}
                                className={
                                    puntajeUsuario < product.price
                                        ? 'w-full bg-gray-500 hover:bg-gray-400'
                                        : 'w-full bg-red-500 hover:bg-red-400'
                                }
                                disabled={puntajeUsuario < product.price}
                            >
                                Canjear
                            </Button>
                        </Card>
                    )
                )}
            </div>
            {modalVisible && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded-md shadow-md'>
                        <h3 className='text-lg font-semibold m-auto'>
                            ¡Puntos Canjeados!
                        </h3>
                        <p>
                            Gracias! La transacción se ha guardado exitosamente.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Commerce;
