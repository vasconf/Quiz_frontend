import Service from "../Service";

export default class AuthService extends Service  {
   constructor(){

   }
   super(){
    this.endpointService = `Auth/v${process.env.VERSION}`
   }

  
}