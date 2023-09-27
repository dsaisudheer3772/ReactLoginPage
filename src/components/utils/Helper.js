const SERVER_NAME=`https://localhost:7256`;

export async function postData(url,data) {
    const URL=`${SERVER_NAME}/${url}`;
    const res=await fetch(URL,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return res;
}
export async function updateData(url,data) {
    const URL=`${SERVER_NAME}/${url}`;
    const res=await fetch(URL,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return res;
}
export async function deleteData(url) {
    const URL=`${SERVER_NAME}/${url}`;
    const res=await fetch(URL,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return res;
}
export async function getData(url) {
    const URL=`${SERVER_NAME}/${url}`;
    const res=await fetch(URL,{
        method: "GET"
    });
    return await res.json();
}