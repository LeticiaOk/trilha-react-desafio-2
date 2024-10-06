import axios from 'axios';

// Criando instância
export const api = axios.create({
    // Criando base para não precisar digitar a URL inteira
    baseURL: 'https://api.github.com'
})