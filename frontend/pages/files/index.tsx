import axios from "axios"
import { useState } from "react";

const Upload = () => {
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
        axios.post("http://localhost:4200/api/files", formData, {
            // params: {"folder": `${nameFolder}`}
            // "headers": {"Content-type": "multipart/form-data"},
        })
            .then(res => {
                console.log(`Success` + res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (

        <div>
            <h1>Зона тестов2</h1>
            <input
                multiple
                type="file"
                onChange={UploadContent}
            />
            <button onClick={OnSumbit}>
                Сохранить и закрыть
            </button>
        </div>
    )
}

export default Upload;