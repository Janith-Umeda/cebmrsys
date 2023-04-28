function formatNumber(price){
    return `Rs ${new Intl.NumberFormat().format(price)}`
}

class ReadyCookies{

    #cook_array;

    constructor(){
        this.#cook_array = {};
        const cookies = document.cookie.split(';');
        cookies.forEach((elem)=>{
        let cook_elem = elem.split('=');
        let cook_key = cook_elem[0].trimStart();
        this.#cook_array[cook_key] = cook_elem[1]
        })
    }

    getCookie(name){
        if(name != ""){
        return this.#cook_array[name];
        }else{
        return this.#cook_array;
        }
    }

    setSession(key,value){
        document.cookie = `${key}=${value};path=/`;
    }
}


export {formatNumber,ReadyCookies}