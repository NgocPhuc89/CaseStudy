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
    document.getElementsByClassName('table_edit')[0].style.display = "none";
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

function editClick(id){
    document.getElementsByClassName('table_edit')[0].style.display = "block";
    document.getElementsByClassName('table_add')[0].style.display = "none";
    document.getElementById('idEdit').value = id ;
    let p = findId(id);
        if ( p != null ){
            document.getElementById("img-edit").value = p.img ;
            document.getElementById("name-edit").value = p.name ;
            document.getElementById("description-edit").value = p.description ;
            document.getElementById("price-edit").value = p.price ;
        }
        else{
            alert ('fail');
        } 
}

function findId(id){
    for ( let i = 0 ; screens.length ; i++){
        if ( screens[i].id == id){
            return screens[i];
        }
    }
    return null;
}

function editProducts(){
    let id = +document.getElementById("idEdit").value;
    let img = document.getElementById("img-edit").value;
    let name = document.getElementById("name-edit").value ;
    let description = document.getElementById("description-edit").value;
    let price = +document.getElementById("price-edit").value;

    let newProduct = new product ( id , img, name, description, price);
    update ( id , newProduct );
    document.getElementsByClassName('table_edit')[0].style.display = "none";
    drawScreens();
}

function update (id , newProduct){
    for ( let i = 0 ; i < screens.length ; i++){
        if ( screens[i].id == id){
            screens[i].img = newProduct.img ;
            screens[i].name = newProduct.name;
            screens[i].description = newProduct.description;
            screens[i].price = newProduct.price;
        }
    }
}

