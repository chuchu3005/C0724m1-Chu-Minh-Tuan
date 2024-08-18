function ketqua() {
    let aElement = document.getElementById('a');
    let bElement = document.getElementById('b');
    let valueA= aElement.value
    let valueB= bElement.value
    if (valueA==0) {
        if (valueB==0) {
            alert('phuong trinh vo so nghiem./n');
        } else {
            alert('phuong trinh vo nghiem');
        }
    }else {
        x= -valueB/valueA;
        alert('nghiem cua phuong trinh la: x=' -valueB/valueA)
    }

}