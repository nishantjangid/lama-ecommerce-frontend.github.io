import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjY3N2U5ZTg1ZDFmNzg4OGMwMWY1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQ0MDYyNSwiZXhwIjoxNjM1Njk5ODI1fQ.LB2ebE88ToO7HtyHZc8TLCXbo5nD-Tl68P5rSFtlH6c";

export const publicRequest = axios.create({
    baseURL : BASE_URL
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token : `Bearer ${TOKEN}`},
});