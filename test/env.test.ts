import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.join(__dirname,'../src/.env') }); 

//a test to find out if the application can get values from the env file.

describe("typescript-socekt-io", () => {  
  let port : string; 
  it('should return port number 3000',()=>{
    
        port = process.env.PORT || '3001';
        expect(port).toMatch('/300/');
  });


}); 