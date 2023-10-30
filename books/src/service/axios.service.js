import axios from 'axios'


export  const buildServiceAxiosConfig = (({url, body, method})=>{
	const basicHeaders = {
		'Content-Type': 'application/json'
	};
	return {
		headers: { ...basicHeaders },
		method: (method),
		url,
		data: body
	};
});

export const getHttpServiceWithAxios = async (axiosConfig) => {
  return await axios.request(axiosConfig);
}

export const getHttpServiceWithAxiosGetMethod = async (url, params= {}) => {
	return axios.get(url,params);
}


