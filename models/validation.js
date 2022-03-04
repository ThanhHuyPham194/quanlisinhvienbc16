function Validation (){
    this.kiemTraRong = function (value, selectorError, mess){
        if(value.trim() === ''){
            document.querySelector(selectorError).innerHTML = mess;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    this.kiemTraDoDaiKiTu = function(value,selectorError,min,max){
        // 4-10
        if(value.trim().length >= min && value.trim().length <= max){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = `Vui Lòng Nhập Từ ${min} Đến ${max} Ký Tự `;
        return false;
    }
    this.kiemTraChuoiKiTu = function(value,selectorError){
        var letters = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if(value.match(letters)){
            //hợp lệ
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Vui Lòng Nhập Vào Chuỗi Ký Tự';
        return false;
    }
    this.kiemTraSo = function(value, selectorError){
        var numbers = /^[0-9]+$/; 
        if (value.match(numbers)) {
            //hợp lệ
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Vui Lòng Nhập Vào Số';
        return false;

    }
    this.kiemTraDiem = function(value,selectorError){
        // 4-10
        if(value >= 0 && value <= 10){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Vui Lòng Nhập Từ 0 Đến 10 ';
        return false;
    }
    this.kiemTraEmail = function(value,selectorError){
        var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(value.match(mailformat)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Email Không Hợp Lệ';
        return false;
    }
    this.kiemTraTrungMaSV = function(value, selectorError, mangSinhVien){
        /**
         * 0. Tạo biến status
         * 1. Duyệt mangSinhVien
         * 2. Nếu value trùng mã SV của Object SV
         *  => Đúng => Value đã tồn tại 
         */
        var status = true;
        for(i = 0; i < mangSinhVien.length; i++){
            if(value === mangSinhVien[i].maSinhVien){
                //Mã Sinh Viên Đã Tồn Tại
                document.querySelector(selectorError).innerHTML = 'Mã Sinh Viên Đã Tồn Tại';
                status = false;
                break;
            }
        }
        if(status){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Mã Sinh Viên Đã Tồn Tại';
        return false;

        
    }

}