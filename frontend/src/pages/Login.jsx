import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { useAuth } from '../auth/authContext';

export const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { login } = useAuth()
  const onSubmit = async (data) => {
    const { error } =  await login(data)
    if (error) window.alert("usuario ou senha errados")
    reset()
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Login</h1>
          <p>Faça login para acessar sua conta.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="wow fadeInUp" data-wow-delay="0.3s">
          <div className="row g-3">
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

            {/* Botão de Envio */}
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Entrar
              </button>
            </div>

            {/* Link para Cadastro */}
            <div className="col-12 text-center">
              <p className="mb-0">
                Não tem uma conta? <Link to="/singup">Cadastre-se</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};