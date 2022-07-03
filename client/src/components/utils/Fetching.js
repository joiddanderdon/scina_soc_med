export async function fetchData(
    route = '',
    data = {},
    methodType) 
    {
        //console.log(`http://localhost:5000${route}`);
        console.log(methodType);
        console.log(data);
        console.log(route);
        const response = await fetch(`http://localhost:5000${route}`, {
            method: methodType,
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
    });
    
    if (response.ok) {
        return await response.json();
    } else {
        throw await response.json();
    }
}