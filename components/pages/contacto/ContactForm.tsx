'use client';

import { useState, FormEvent } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Campo requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Campo requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'Campo requerido';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      alert('¡Mensaje enviado! Nos pondremos en contacto pronto.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <form className="space-y-6 sm:space-y-7 md:space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group">
          <input
            type="text"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className={`w-full border-b py-3 text-neutral-900 focus:outline-none transition-colors bg-transparent placeholder-neutral-400 min-h-[44px] ${
              errors.firstName ? 'border-red-500' : 'border-neutral-300 focus:border-neutral-900'
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div className="group">
          <input
            type="text"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="w-full border-b border-neutral-300 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent placeholder-neutral-400 min-h-[44px]"
          />
        </div>
      </div>
      <div className="group">
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full border-b py-3 text-neutral-900 focus:outline-none transition-colors bg-transparent placeholder-neutral-400 min-h-[44px] ${
            errors.email ? 'border-red-500' : 'border-neutral-300 focus:border-neutral-900'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div className="group">
        <select
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className="w-full border-b border-neutral-300 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent min-h-[44px]"
        >
          <option value="">Motivo del contacto</option>
          <option value="reservaciones">Reservaciones</option>
          <option value="eventos">Eventos Privados</option>
          <option value="prensa">Prensa</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div className="group">
        <textarea
          rows={4}
          placeholder="Su Mensaje"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`w-full border-b py-3 text-neutral-900 focus:outline-none transition-colors bg-transparent placeholder-neutral-400 resize-none ${
            errors.message ? 'border-red-500' : 'border-neutral-300 focus:border-neutral-900'
          }`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-neutral-900 text-white px-12 py-5 text-xs tracking-[0.2em] uppercase hover:bg-neutral-700 transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </div>
    </form>
  );
};
