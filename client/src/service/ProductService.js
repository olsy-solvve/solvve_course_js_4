import axios from 'axios'


const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/'
});

export default class ProductService {

    getProductsSmall() {
		return api.get('/list').then(res => res.data);
	}

	getProducts() {
		return api.get('/list').then(res => res.data);
    }

    getProductsWithOrdersSmall() {
		return api.get('/list').then(res => res.data);
	}
}