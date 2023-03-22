import { question } from "readline-sync";

let sobimat : number ;
let sodoan : number ;
let luotchoi : number ;
let diem : number ;
console.log("Chao mung ban den voi game doan so: ");
console.log("Minh se du doan con so tu 15 - 20 nhe");
sodoan = Number(question("Moi ban nhap con so minh du doan: "));
sobimat = Math.floor(Math.random() * (20 - 15) + 15) ;
luotchoi = 1;
if(sodoan == sobimat){
    if(luotchoi == 1){
        diem = 100;
    }
    else if(luotchoi == 2){
        diem = 70;
    }
    else{
        diem = 30;
    }
   console.log("Win: " +diem); 
}
else{
    
    if(sodoan < sobimat){
        console.log("So doan nho qua");
        luotchoi++;
       
    }
    else{
        console.log("So lon qua");
        luotchoi++;
        
       
    }
    if(luotchoi <= 3){
        sodoan = Number(question("Moi nhap lai con so du doan: "));
        if(sodoan == sobimat){
            if(luotchoi == 1){
                diem = 100;
            }
            else if(luotchoi == 2){
                diem = 70;
            }
            else {
                diem = 30;
            }
                console.log("Win: " +diem); 
            
        }
        else{
            if(sodoan < sobimat){
                console.log("So doan nho qua");
                luotchoi++;
               
            }
            else{
                console.log("So lon qua");
                luotchoi++;  
            }
            if(luotchoi <= 3){
                sodoan = Number(question("Moi nhap lai con so du doan: "));
                if(sodoan == sobimat){
                    if(luotchoi == 1){
                        diem = 100;
                    }
                    else if(luotchoi == 2){
                        diem = 70;
                    }
                    else {
                        diem = 30;
                    }
                        console.log("Win: " +diem); 
                    
                }
                else{
                    if(sodoan < sobimat){
                        console.log("So doan nho qua");
                        luotchoi++;
                       
                    }
                    else{
                        console.log("So lon qua");
                        luotchoi++;  
                    }
                    if(luotchoi <= 3){
                        sodoan = Number(question("Moi nhap lai con so du doan: "));
                        if(sodoan == sobimat){
                            if(luotchoi == 1){
                                diem = 100;
                            }
                            else if(luotchoi == 2){
                                diem = 70;
                            }
                            else {
                                diem = 30;
                            }
                                console.log("Win: " +diem); 
                            
                        }
                        else{
                            if(sodoan < sobimat){
                                console.log("So doan nho qua");
                                luotchoi++;
                               
                            }
                            else{
                                console.log("So lon qua");
                                luotchoi++;  
                            }
                            
                         }
                     
                     }
                     else{
                        console.log("Game Over, Voi So Bi Mat la: ",sobimat);
                     }
                 }
             
             }
             else{
                console.log("Game Over, voi so bi mat la: ",sobimat);
             }
            } 
        }            
    else{
        console.log("Game Over, voi so bi mat la: ",sobimat);
    }   
    

}






