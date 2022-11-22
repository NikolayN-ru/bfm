import axios from "axios"
import { FC, useState } from "react";

const Upload:FC<any> = ({filePath, addImageProp, id}) => {
    console.log(filePath, "filePath")
    const [file, setFile] = useState<any>();

    const UploadContent = (event: any) => {
        event.preventDefault();
        if (event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const OnSumbit = (event: any) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('fileData', file);
        axios.post(`http://localhost:4200/api/files?folder=${filePath}`, formData, {
            // params: {"folder": `${nameFolder}`}
            // "headers": {"Content-type": "multipart/form-data"},
        })
        .then(res => {
            // console.log(`Success` + res.data);
            // console.log(`/uploads/${filePath}/${file.name}`, 'full_PATH')
            const fileUrl = `/uploads/${filePath}/${file.name}`
            // console.log(id, 'id', fileUrl, 'fileUrl');
            addImageProp(id, fileUrl)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (

        <div>
            {/* <h1>Зона тестов2</h1> */}
            <input
                multiple
                type="file"
                onChange={UploadContent}
            />
            <button onClick={OnSumbit}>
                загрузить на сервер
            </button>
        </div>
    )
}

export default Upload;