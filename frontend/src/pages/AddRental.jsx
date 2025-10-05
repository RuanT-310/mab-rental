import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../auth/authContext';
import { Navigate } from 'react-router';

export const AddRental = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { getUser } = useAuth()
  const userReq = getUser()
  const onSubmit = async (data) => {
    console.log('Dados do imóvel:', data);
    try {
      await userReq.createRental(data);
      alert('Imóvel cadastrado com sucesso!');
      reset(); // Limpa o formulário após o envio
      <Navigate to="/" />
    } catch (error) {
      alert('Erro ao cadastrar imóvel. Tente novamente.');
    }
  }
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Cadastrar Imóvel</h1>
          <p>Preencha os detalhes do imóvel que deseja cadastrar.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="wow fadeInUp" data-wow-delay="0.3s">
          <div className="row g-3">
            {/* Status */}
            <div className="col-md-6">
              <div className="form-floating">
                <select
                  className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                  id="status"
                  {...register('status', { required: 'Status é obrigatório' })}
                >
                  <option value="">Selecione o status</option>
                  <option value="Recentes">Recentes</option>
                  <option value="Venda">Venda</option>
                  <option value="Aluguel">Aluguel</option>
                </select>
                <label htmlFor="status">Status</label>
                {errors.status && (
                  <div className="invalid-feedback">{errors.status.message}</div>
                )}
              </div>
            </div>

            {/* Tipo */}
            <div className="col-md-6">
              <div className="form-floating">
                <select
                  className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                  id="type"
                  {...register('type', { required: 'Tipo é obrigatório' })}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Casa">Casa</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Terreno">Terreno</option>
                </select>
                <label htmlFor="type">Tipo</label>
                {errors.type && (
                  <div className="invalid-feedback">{errors.type.message}</div>
                )}
              </div>
            </div>

            {/* Preço */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                  id="price"
                  placeholder="Preço"
                  {...register('price', { required: 'Preço é obrigatório' })}
                />
                <label htmlFor="price">Preço</label>
                {errors.price && (
                  <div className="invalid-feedback">{errors.price.message}</div>
                )}
              </div>
            </div>

            {/* Título */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                  id="title"
                  placeholder="Título"
                  {...register('title', { required: 'Título é obrigatório' })}
                />
                <label htmlFor="title">Título</label>
                {errors.title && (
                  <div className="invalid-feedback">{errors.title.message}</div>
                )}
              </div>
            </div>

            {/* Localização */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  id="location"
                  placeholder="Localização"
                  {...register('location', { required: 'Localização é obrigatória' })}
                />
                <label htmlFor="location">Localização</label>
                {errors.location && (
                  <div className="invalid-feedback">{errors.location.message}</div>
                )}
              </div>
            </div>

            {/* Setor */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.sector ? 'is-invalid' : ''}`}
                  id="sector"
                  placeholder="Setor"
                  {...register('sector', { required: 'Setor é obrigatório' })}
                />
                <label htmlFor="sector">Setor</label>
                {errors.sector && (
                  <div className="invalid-feedback">{errors.sector.message}</div>
                )}
              </div>
            </div>

            {/* Área (m²) */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.sqft ? 'is-invalid' : ''}`}
                  id="sqft"
                  placeholder="Área (m²)"
                  {...register('sqft', { required: 'Área é obrigatória' })}
                />
                <label htmlFor="sqft">Área (m²)</label>
                {errors.sqft && (
                  <div className="invalid-feedback">{errors.sqft.message}</div>
                )}
              </div>
            </div>

            {/* Quartos */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.bed ? 'is-invalid' : ''}`}
                  id="bed"
                  placeholder="Quartos"
                  {...register('bed', { required: 'Número de quartos é obrigatório' })}
                />
                <label htmlFor="bed">Quartos</label>
                {errors.bed && (
                  <div className="invalid-feedback">{errors.bed.message}</div>
                )}
              </div>
            </div>

            {/* Banheiros */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.bath ? 'is-invalid' : ''}`}
                  id="bath"
                  placeholder="Banheiros"
                  {...register('bath', { required: 'Número de banheiros é obrigatório' })}
                />
                <label htmlFor="bath">Banheiros</label>
                {errors.bath && (
                  <div className="invalid-feedback">{errors.bath.message}</div>
                )}
              </div>
            </div>

            {/* Contato */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                  id="contact"
                  placeholder="Contato"
                  {...register('contact', { required: 'Contato é obrigatório' })}
                />
                <label htmlFor="contact">Contato</label>
                {errors.contact && (
                  <div className="invalid-feedback">{errors.contact.message}</div>
                )}
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-floating">
                <input
                  type="file"
                  className={`form-control ${errors.images ? 'is-invalid' : ''}`}
                  id="images"
                  multiple
                  {...register('images', { required: 'Imagens são obrigatórias' })}
                />
                <label htmlFor="images">Imagens</label>
                {errors.images && (
                  <div className="invalid-feedback">{errors.images.message}</div>
                )}
              </div>
            </div>

            {/* Botão de Envio */}
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Cadastrar Imóvel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

