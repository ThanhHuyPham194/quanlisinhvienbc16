function getData(){
    // Gọi hàm axios truyền vào Object
    var promise = axios({
        url:'../data/data.txt', //Đường dẫn đến file hoặc link api backend cung cấp
        method:'GET',
        responseType:'Test'
    });
    /**
     * promise là đối tượng có 2 phương thức cần nhớ:
     *  + then(): Nhận vào 1 hàm khi request thành công
     *  + catch(): Nhận vào 1 hàm khi request thất bại 
     */
    //Xử lý thành công
    promise.then(function(ketQua){
        console.log('ketQua',ketQua.data);
        document.querySelector('#content').innerHTML = 'Họ Tên:' + ketQua.data;
    });
    //Xử lý thất bại
    promise.catch(function(error){
        console.log('ketQua', error);
    });
}
getData();

function getDataXML(){
    var promise = axios({
        url:'../data/data.xml',
        method: 'GET',
        responseType:'document'
    });
        //Xử lý thành công
        promise.then(function(ketQua){
            console.log('ketQua',ketQua.data);
            var hoTen = ketQua.data.querySelector('hoTen').innerHTML;
            document.querySelector('#content').innerHTML = '<h1>' + hoTen + '</h1>';
        })
        //Xử lý thất bại
        promise.catch(function(error){
            console.log('ketQua', error);
        })
    
}
getDataXML();


function getDataJson(){
    var promise = axios({
        url:'../data/data.json',
        method: 'GET',
        responseType:'json'
    });


    promise.then(function(ketQua){
        console.log('ketQua', ketQua.data);
        document.querySelector('#content').innerHTML += '<h3>' + ketQua.data.hoTen + '</h3>';
    })


    promise.catch(function(){
        console.log('ketQua', error);
    })
}