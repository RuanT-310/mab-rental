import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

export const SingUp = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log('Dados do cadastro:', data);
    // Aqui você pode enviar os dados para uma API ou criar o usuário
  };

  // Validação de confirmação de senha
  const password = watch('password');

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Cadastro</h1>
          <p>Crie uma nova conta para começar.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="wow fadeInUp" data-wow-delay="0.3s">
          <div className="row g-3">
            {/* Nome */}
            <div className="col-md-12">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Nome"
                  {...register('name', { required: 'Nome é obrigatório' })}
                />
                <label htmlFor="name">Nome</label>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
            </div>

            {/* E-mail */}
            <div className="col-md-12">
              <div className="form-floating">
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="E-mail"
                  {...register('email', { required: 'E-mail é obrigatório' })}
                />
                <label htmlFor="email">E-mail</label>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
            </div>

            {/* Senha */}
            <div className="col-md-12">
              <div className="form-floating">
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  placeholder="Senha"
                  {...register('password', { required: 'Senha é obrigatória' })}
                />
                <label htmlFor="password">Senha</label>
                {errors.password && (
                  <div className="invalid-feedback">{errors.password.message}</div>
                )}
              </div>
            </div>

            {/* Confirmação de Senha */}
            <div className="col-md-12">
              <div className="form-floating">
                <input
                  type="password"
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  {...register('confirmPassword', {
                    required: 'Confirmação de senha é obrigatória',
                    validate: (value) => value === password || 'As senhas não coincidem',
                  })}
                />
                <label htmlFor="confirmPassword">Confirme sua senha</label>
                {errors.confirmPassword && (
                  <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                )}
              </div>
            </div>

            {/* Botão de Envio */}
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Cadastrar
              </button>
            </div>

            {/* Link para Login */}
            <div className="col-12 text-center">
              <p className="mb-0">
                Já tem uma conta? <Link to="/login">Faça login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

