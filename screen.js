class product {
    constructor (id, img, name, description, price,){
        this.id = id;
        this.img = img;
        this.name = name;
        this.description = description;
        this.price = price;

    }
}
let screens = [
    new product (1, "https://philong.com.vn/media/product/250-28187-32un650-w-1.png","LG", "Màn Hình LG 4K 32inch 32UN650-W ", 8690000),
    new product (2, "https://philong.com.vn/media/product/250-29254-22t370-1.jpg","SAMSUNG", "Màn hình 21.5 inch SAMSUNG LF22T370", 2890000),
    new product (3, "https://philong.com.vn/media/product/250-20714-m--n-h--nh-lcd-samsung-27-inch-lc27r500fhexxv-2.jpg", "SAMSUNG", "Màn hình cong 27 SAMSUNG LC27R500FHE", 4490000),
    new product (4, "https://philong.com.vn/media/product/250-27120-3.jpg", "SAMSUNG", "Màn hình 23.8inch Samsung LS24R350FZEXXV ", 3140000),
    new product (5, "https://philong.com.vn/media/product/250-28089-vz249ehe-8.jpg","ASUS","Màn hình siêu mỏng 24 inch ASUS VZ24EHE", 3090000),
    new product (16, "https://philong.com.vn/media/product/250-29610-man-hinh-lenovo-q27q-20-66efgac3-philong3.png", "LENOVO", "Màn Hình Lenovo 2K 27 inch Q27q-20 66EFGAC3VN", 5990000),
    new product (7, "https://philong.com.vn/media/product/250-21101-27r350-5.jpg", "SAMSUNG", "Màn hình 27 SAMSUNG LS27R350FHE", 4090000),
    new product (8, "https://philong.com.vn/media/product/250-14672-c27f397fhe.jpg", "SAMSUNG", "Màn hình cong 27 SAMSUNG C27F397FHE", 4490000, )
]
function drawScreens(){
    document.querySelector('.containers').innerHTML = "";
for ( let i = 0 ; i < screens.length ; i++) {
    document.querySelector('.containers').innerHTML +=
    `
        <div class="product">
            <div class="button">
                <p class="edit" onclick="editClick(${screens[i].id})">Edit</p>
                <p class="delete" onclick="deleteClick(${screens[i].id})">Delete</p>
            </div>
            <div class="img">
                <img class="photo"src="${screens[i].img}" alt="">
            </div>
            <h3 class="name">${screens[i].name}</h3>
            <h3 class="description">${screens[i].description}</h3>
            <p class="price">${formatCurrency(screens[i].price)}</p>
        </div>     
    `
}
}
drawScreens();
function formatCurrency(number){
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}
function addClick(){
    document.getElementsByClassName('table_add')[0].style.display = "block";
}
function editClick(){
    document.getElementsByClassName('table_edit')[0].style.display = "block";
}
function cancelClick_1(){
    document.getElementsByClassName('table_add')[0].style.display = "none";
}
function cancelClick_2(){
    document.getElementsByClassName('table_edit')[0].style.display = "none";
}
function addProducts(){
    let errors = [];
    let img = document.getElementById("img-add").value;
    let name = document.getElementById("name-add").value ;
    let description = document.getElementById("description-add").value;
    let price = +document.getElementById("price-add").value;

    if(img == ''){
        errors.push('Hình ảnh sản phẩm không được để trống');
    }
    if(name == ''){
        errors.push('Tên sản phẩm không được để trống');
    }
    if(description == ''){
        errors.push('Mô tả sản phẩm không được để trống');
    }
    if(errors.length > 0){
        let note = "";
        for(let i = 0 ; i < errors.length ; i++){
            note += errors[i] + "\n";
        }
        alert(note);
    }else{
        let id;
        if( getMaxId() == -1 ){
            id = 1;
        }else{
            id = getMaxId();
        }
        let addnew = new product(id, img, name, description, price);
        screens.push(addnew);
        document.getElementsByClassName('table_add')[0].style.display = "none";
        drawScreens();
    }

}

function getMaxId(){
    if (screens.length > 0){
        let maxId = screens[0];
        for(let i = 1 ; i < screens.length; i++){
            if(screens[i].id > maxId.id ){
                maxId = screens[i];
            }
        }
        return maxId.id + 1 ;
    }else{
        return -1;
    }
}


function deleteClick(id){
    let check = confirm ("Bạn có chắc chắn xóa không?");
    if ( check ){
        for ( let i = 0 ; i < screens.length ; i++){
            if( screens[i].id == id){
                screens.splice(i , 1);
                break;
            }
        }
        drawScreens();
    }
}

function editProducts(id){
    for ( let i = 0 ; i < screens.length ; i++){
        if ( screens[i].id = id){
            document.getElementById("img-edit").value = product.img ;
            document.getElementById("name-edit").value = product.name ;
            document.getElementById("description-edit").value = product.description ;
            document.getElementById("price-edit").value = product.price ;
        }
        else{
            return null;
        }
    }
}