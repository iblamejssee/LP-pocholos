'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Info } from 'lucide-react';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ReservationsPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        local: 'Principal - FONAVI',
        fecha: '',
        dni: '',
        personas: '',
        hora: '',
        mensaje: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.nombre) newErrors.nombre = 'Tu nombre no es opcional';
        if (!formData.email) newErrors.email = 'Tu email no es opcional';
        if (!formData.telefono) newErrors.telefono = 'El teléfono es requerido';
        if (!formData.fecha) newErrors.fecha = 'Selecciona una fecha';
        if (!formData.dni) newErrors.dni = 'El DNI es requerido';
        if (!formData.personas) newErrors.personas = 'Indica la cantidad de personas';
        if (!formData.hora) newErrors.hora = 'Selecciona una hora';
        if (!formData.mensaje) newErrors.mensaje = 'El mensaje no es opcional';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const message = `*Nueva Reserva Web* %0A%0A` +
                `👤 *Nombre:* ${formData.nombre}%0A` +
                `📧 *Email:* ${formData.email}%0A` +
                `📱 *Teléfono:* ${formData.telefono}%0A` +
                `📍 *Local:* ${formData.local}%0A` +
                `📅 *Fecha:* ${formData.fecha}%0A` +
                `🆔 *DNI:* ${formData.dni}%0A` +
                `👥 *Personas:* ${formData.personas}%0A` +
                `⏰ *Hora:* ${formData.hora}%0A` +
                `📝 *Mensaje:* ${formData.mensaje}`;

            window.open(`https://wa.me/51936853996?text=${message}`, '_blank');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <main className="min-h-screen bg-stone-50">
            {/* Header Mini */}
            <div className="h-20 md:h-28 bg-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-stone-900 opacity-80" />
                <h1 className="relative z-10 font-serif text-2xl md:text-4xl text-white font-bold tracking-wider">
                    Reservas
                </h1>
            </div>

            <section className="container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* Intro / Rules */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-24"
                        >
                            <h2 className="font-serif text-3xl text-land-text font-black mb-4">Reserva</h2>
                            <p className="text-stone-600 font-body leading-relaxed mb-6 text-sm md:text-base">
                                ¡Bienvenido a Pocholo's Chicken! Completa el formulario y realiza tu reserva.
                                Aceptamos reservas de Lunes a Domingo de 5:30 PM a 11:00 PM.
                            </p>

                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 space-y-3">
                                <div className="flex gap-3 text-stone-600">
                                    <Clock className="text-land-orange shrink-0" size={18} />
                                    <p className="text-xs md:text-sm">Tolerancia máxima de 20 minutos.</p>
                                </div>
                                <div className="flex gap-3 text-stone-600">
                                    <Users className="text-land-orange shrink-0" size={18} />
                                    <p className="text-xs md:text-sm">Grupos mayores a 10 personas requieren confirmación telefónica.</p>
                                </div>
                                <div className="flex gap-3 text-stone-600">
                                    <Info className="text-land-orange shrink-0" size={18} />
                                    <p className="text-xs md:text-sm">No se aceptan reservas los días feriados o días festivos sin previo abono.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Formulario Compacto */}
                    <div className="lg:w-2/3">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-land-red"
                        >
                            <div className="space-y-4">
                                {/* Row 1: Nombre & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">Nombre</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Escribe tu nombre"
                                            className={`w-full p-2.5 rounded-lg border ${errors.nombre ? 'border-red-500' : 'border-stone-300'} text-stone-900 placeholder:text-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 text-sm transition-all`}
                                        />
                                        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Escribe tu email"
                                            className={`w-full p-2.5 rounded-lg border ${errors.email ? 'border-red-500' : 'border-stone-300'} text-stone-900 placeholder:text-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 text-sm transition-all`}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Row 2: Teléfono & DNI */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">Teléfono</label>
                                        <div className="flex gap-2">
                                            <div className="w-16 p-2.5 rounded-lg border border-stone-300 bg-stone-100 flex items-center justify-center text-stone-900 font-bold text-sm">
                                                +51
                                            </div>
                                            <input
                                                type="tel"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                placeholder="999 999 999"
                                                className={`flex-1 p-2.5 rounded-lg border ${errors.telefono ? 'border-red-500' : 'border-stone-300'} text-stone-900 placeholder:text-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 text-sm transition-all`}
                                            />
                                        </div>
                                        {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">DNI</label>
                                        <input
                                            type="text"
                                            name="dni"
                                            value={formData.dni}
                                            onChange={handleChange}
                                            placeholder="DNI del titular"
                                            className={`w-full p-2.5 rounded-lg border ${errors.dni ? 'border-red-500' : 'border-stone-300'} text-stone-900 placeholder:text-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 text-sm transition-all`}
                                        />
                                        {errors.dni && <p className="text-red-500 text-xs mt-1">{errors.dni}</p>}
                                    </div>
                                </div>

                                {/* Row 3: Local */}
                                <div>
                                    <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">Local</label>
                                    <select
                                        name="local"
                                        value={formData.local}
                                        onChange={handleChange}
                                        className="w-full p-2.5 rounded-lg border border-stone-300 text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 bg-white text-sm"
                                    >
                                        <option value="Principal - FONAVI">Principal - FONAVI (Ayacucho)</option>
                                    </select>
                                </div>

                                {/* Row 4: Fecha, Personas, Hora */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">Fecha</label>
                                        <input
                                            type="date"
                                            name="fecha"
                                            value={formData.fecha}
                                            onChange={handleChange}
                                            className={`w-full p-2.5 rounded-lg border ${errors.fecha ? 'border-red-500' : 'border-stone-300'} text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 text-sm transition-all`}
                                        />
                                        {errors.fecha && <p className="text-red-500 text-xs mt-1">{errors.fecha}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">Personas</label>
                                        <input
                                            type="number"
                                            name="personas"
                                            min="1"
                                            value={formData.personas}
                                            onChange={handleChange}
                                            placeholder="#"
                                            className={`w-full p-2.5 rounded-lg border ${errors.personas ? 'border-red-500' : 'border-stone-300'} text-stone-900 placeholder:text-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 text-sm transition-all`}
                                        />
                                        {errors.personas && <p className="text-red-500 text-xs mt-1">{errors.personas}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">Hora</label>
                                        <select
                                            name="hora"
                                            value={formData.hora}
                                            onChange={handleChange}
                                            className={`w-full p-2.5 rounded-lg border ${errors.hora ? 'border-red-500' : 'border-stone-300'} text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 bg-white text-sm`}
                                        >
                                            <option value="">Seleccionar</option>
                                            <option value="17:30">5:30 PM</option>
                                            <option value="18:00">6:00 PM</option>
                                            <option value="18:30">6:30 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                            <option value="19:30">7:30 PM</option>
                                            <option value="20:00">8:00 PM</option>
                                            <option value="20:30">8:30 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                            <option value="21:30">9:30 PM</option>
                                            <option value="22:00">10:00 PM</option>
                                            <option value="22:30">10:30 PM</option>
                                        </select>
                                        {errors.hora && <p className="text-red-500 text-xs mt-1">{errors.hora}</p>}
                                    </div>
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label className="block text-stone-900 font-bold mb-1 text-xs uppercase tracking-wide">Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        rows={2}
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        placeholder="Comentarios adicionales..."
                                        className={`w-full p-2.5 rounded-lg border ${errors.mensaje ? 'border-red-500' : 'border-stone-300'} text-stone-900 placeholder:text-stone-400 font-medium focus:outline-none focus:ring-2 focus:ring-land-orange/50 text-sm transition-all`}
                                    />
                                    {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>}
                                </div>

                                {/* Botón */}
                                <button
                                    type="submit"
                                    className="w-full bg-land-brown hover:bg-land-text text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg uppercase tracking-widest text-sm"
                                >
                                    Enviar Mensaje
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
