import axios from "axios";

export const getCategoryList = () =>
    axios.get('http://localhost:80/category', { withCredentials: true });


export const postLogin = (email, password) =>
    axios.post("http://localhost:80/auth/login", {
        username: email,
        password: password
    });

export const postRegister = (email, password, passwordConfirm) =>
    axios.post("http://localhost:80/auth/register", {
        username: email,
        password: password,
        passwordConfirm: passwordConfirm
    });

export const createCategory = (title) => {
    axios.post("http://localhost:80/category", {
        title: title
    }, { withCredentials: true })
};

export const updateCategory = (id, newTitle) => {
    axios.put("http://localhost:80/category/" + id, { title: newTitle }, { withCredentials: true })
};

export const getStatus = (categoryId) =>
    axios.get('http://localhost:80/status?categoryId=' + categoryId, { withCredentials: true });


export const createStatus = (title, categoryId, color) => {
    axios.post("http://localhost:80/status", {
        title: title,
        categoryId: categoryId,
        color: color
    }, { withCredentials: true })
};

export const updateStatusColor = (stausId, color) => {
    axios.put("http://localhost:80/status/" + stausId, { color: color }, { withCredentials: true })
};

export const deleteStatus = (stausId) => {
    axios.delete("http://localhost:80/status/" + stausId, { withCredentials: true })
};


export const getTodoList = () =>
    axios.get('http://localhost:80/todo', { withCredentials: true });


export const getStatuListByCategoryId = (categoryId) =>
    axios.get('http://localhost:80/status?categoryId=' + categoryId, { withCredentials: true });


export const createTodo = (title, categoryId, statusId) => {
    axios.post("http://localhost:80/todo", {
        title: title,
        categoryId: Number(categoryId),
        statusId: Number(statusId)
    }, { withCredentials: true })
};

export const getCategoryById = (categoryId) =>
    axios.get('http://localhost:80/category/' + categoryId, { withCredentials: true });

    export const getStatusById = (statusId) =>
    axios.get('http://localhost:80/status/' + statusId, { withCredentials: true });