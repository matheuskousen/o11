// import { Container } from './styles';

export default class Request {
  uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const imgId = localStorage.setItem("imgId", file);
    return fetch("http://192.168.0.108:9000/post", {
      method: "post",
      body: formData,
    });
  };
}
