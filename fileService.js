import { error } from "console";
import {v4 as uuidv4} from "uuid";

class fileService{
    async saveFile(file){
        try{

            if(!file){
                throw new Error("файл не передан")
            }

        const MAX_SIZE =5*1024*1024

        if(file.size > MAX_SIZE){
            throw new Error("Файл слишком большой, максимум 5МБ")
        }
        //получаем формат
        const fileType = file.name.split('.').pop()
        const fileName = `${uuidv4()}.${fileType}`
        // const fileName = `${file[0]}${uuidv4()}.${fileType[1]}`

        const filePath = `./files/${fileName}`

        await file.mv(filePath) 

        return fileName;

        }catch{
            console.log("ошибка при добавлении файла:" + err);
            

        }


    }
}
export default new fileService;