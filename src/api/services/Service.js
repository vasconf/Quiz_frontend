import axios from 'axios';

class Service {

    constructor(service) {
        this.service = service;
        this.api = axios.create({
            baseURL: `${process.env.BASE_URL}/${this.service}/v${process.env.VERSION}/`
        })
    }

    async getAll({ endpoint }) {
        const response = await this.api.get(endpoint)
        return response.data
    }

    async getById({ id, endpoint }) {
        var new_endpoint = endpoint ? `${endpoint}/${id}` : id.toString();
        const response = await this.api.get(new_endpoint)
        return response.data;
    }


    async post({ entity, endpoint }) {
        const response = await this.api.post(endpoint ?? "", entity).catch(err => console.log(err));
        return response.data;
    }

    async put({ entity, endpoint }) {
        const response = await this.api.path(`${this.endpoint}`, entity)
        return response.data;
    }

    async delete({ id, endpoint }) {
        var new_endpoint = endpoint ? `${endpoint}/${id}` : id.toString();
        const response = await this.api.delete(new_endpoint)
        return response.data;
    }
}



export default Service;