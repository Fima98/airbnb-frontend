import { getAccessToken } from "@/lib/actions";

const apiService = {
    get: async function(url: string): Promise<any> {
        const token = await getAccessToken();

        const headers: HeadersInit = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: headers
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    },

    post: async function(url: string, data: any): Promise<any> {
        const token = await getAccessToken();
    
        const headers: HeadersInit = {
            'Accept': 'application/json',
        };

        if (!(data instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
            data = JSON.stringify(data);
        }
    
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
    
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: data, 
                headers: headers
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    },
    
};

export default apiService;
