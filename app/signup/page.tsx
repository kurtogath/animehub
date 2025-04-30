'use client';
import { LabelInput } from '@/components/inputs/LabelInput';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUp() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Verificar que todos los campos están completos
        if (!name || !email || !password) {
            setError('Por favor, llena todos los campos.');
            return;
        }

        try {
            // Enviar los datos al backend para crear el usuario
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, surname }),
            });

            const result = await response.json();

            if (response.ok) {
                // Redirigir al usuario a la página de login después de crear el usuario
                router.push(`/login`);
            } else {
                setError(
                    result.error ||
                        'Cliente: Hubo un error al crear el usuario.'
                );
            }
        } catch (err) {
            console.error(err);
            setError('Hubo un error al crear el usuario.');
        }
    };

    return (
        <div className="container">
            <h1>Registrarse</h1>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <LabelInput
                        label="Nombre"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(value) => setName(value)}
                        required
                        autoFocus
                    />
                </div>
                <div>
                    <LabelInput
                        label="Apellido"
                        type="text"
                        id="surname"
                        value={surname}
                        onChange={(value) => setSurname(value)}
                    />
                </div>
                <div>
                    <LabelInput
                        label="Correo electrónico"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(value) => setEmail(value)}
                        required
                    />
                </div>
                <div>
                    <LabelInput
                        label="Contraseña"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}
