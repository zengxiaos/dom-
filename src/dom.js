window.dom={
    find(selector){
        return document.querySelectorAll(selector);
    },
    style(node,name,value){
        if(arguments.length===3){
        node.style[name]=value}
        if(arguments.length===2){
            if (typeof name===`string`)
            {const B=node.style[name]
            return B}if(name instanceof Object){
                const object=name
                for(let key in object){
                    node.style[key]=object[key]
                }
            }
        }
    },
    each(array,fn){
        Array.from(array)
        let i 
        for(let i=0;i < array.length;i++){
        fn.call(null,array[i])
        }


    }
}