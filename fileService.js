import {v4 as uuidv4} from "uuid";

class fileService{
    async saveFile(file){
        try{
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