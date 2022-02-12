

const getData = axios.get('https://jsonplaceholder.typicode.com/users');

getData.then((result)=>{
    console.log(result.data[0]);
    var dis = document.getElementById('success');
    dis.innerHTML = result;
    ;
})
