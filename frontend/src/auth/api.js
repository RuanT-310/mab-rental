import axios from 'axios';

const baseURL = 'https://silver-umbrella-jjpxpp7rgvrhq776-3000.app.github.dev';

// Função de login
export const login = async ({ email, password }) => {
    try {
        const { data } = await axios.post(`${baseURL}/login`, { email, password });
        return data; // Retorna o token caso o login seja bem-sucedido
    } catch (error) {
        console.error("Erro no login:", error);
        return { token: null }; // Retorna null em caso de erro
    }
};

// Hook para gerenciar requisições do usuário
export const useUser = (token) => {
    const userReq = axios.create({
        baseURL: `${baseURL}/user`,
        timeout: 5000, // Aumentado o tempo limite
        headers: { 'authorization': token }
    });

    const userRentalReq = axios.create({
        baseURL: `${baseURL}/rental`,
        timeout: 5000, // Aumentado o tempo limite
        headers: { 'authorization': token }
    });

    // Métodos da API
    return {
        getRentals: async () => {
            try {
                const response = await userRentalReq.get('/');
                return response.data;
            } catch (error) {
                console.error("Erro ao buscar aluguéis:", error);
                return null;
            }
        },

        getOneRental: async (id) => {
            try {
                const response = await userRentalReq.get(`/${id}`);
                return response.data;
            } catch (error) {
                console.error(`Erro ao buscar aluguel ${id}:`, error);
                return null;
            }
        },

        createRental: async (data) => {
            const formData = new FormData();
          
            // Adiciona campos de texto
            formData.append('bath', data.bath);
            formData.append('bed', data.bed);
            formData.append('contact', data.contact);
            formData.append('location', data.location);
            formData.append('price', data.price);
            formData.append('sector', data.sector);
            formData.append('sqft', data.sqft);
            formData.append('status', data.status);
            formData.append('title', data.title);
            formData.append('type', data.type);
          
            // Adiciona arquivos (se houver múltiplos)
            if (data.images && data.images.length > 0) {
              for (let i = 0; i < data.images.length; i++) {
                formData.append('images', data.images[i]); // Adiciona cada arquivo
              }
            }
          
            console.log(formData);
          
            try {
              const response = await userRentalReq.post('/', formData);
              if (response.status != 201) throw new Error(response.data)
              return response.data;
            } catch (error) {
              console.error("Erro ao criar aluguel:", error);
              return null;
            }
        }
    };
};

