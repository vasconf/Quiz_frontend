import axios from 'axios';

class Service {

  

    constructor(endpointService){

        this.endpointService = endpointService;
        this.api = axios.create({
            baseURL:`${process.env.BASE_URL}/${this.endpointService}`
        })
        
    }

    async getAll(){
        const response = await this.api.get(`${this.endpoint}`)
        return response.data
       }
    

    async getById({id})  {
        const response = await this.api.get(`${this.endpoint}/${id}`, id)  
        return response.data;
    }
    
    
    async create(entity){
        const response = await this.api.post(this.endpoint, entity).catch(err => console.log(err));
        console.log(response);
        return response.data;
    }          
     
    async update(entity)  { 
        const response = await this.api.path(`${this.endpoint}`, entity)
        return response.data;
    }
    
    async delete({id})  {
        await this.api.delete(`${this.endpoint}/${id}`)
        
    }
}



export default Service;