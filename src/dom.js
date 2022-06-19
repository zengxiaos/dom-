window.dom={
     create(string){
         const container=document.createElement('template'); // template可以用来容纳所以的标签和字符串（）里的内容需要加上引号，表示是字符串 
         container.innerHTML= string.trim(); //trim函数可以去除所创建的文本元素
         return container.content.firstChild;
     },
     after(node,node2){//node2插入到node的前面
         node.parentNode.insertBefore(node2,node.nextSibling)
     },
     before(node,node2){
         node.parentNode.insertBefore(node2,node)
     },
     append(parent,node){
         parent.appendChild(node)
     },
     wrap(node,parent){
         dom.before(node,parent)
         dom.append(parent,node)
     },
     remove(node){
         //node.remove()较新
         node.parentNode.removeChild(node)
         return node
     },
     empty(node){//去除该节点的所有子节点-
        // node.innerHTML("")这种无法返回所删除的节点
        const {childNodes}=node// const childNodes=node.childNodes该语法的高级写法
        const array=[]
        let x=node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x=node.firstChild
        }
        return array
        // for(let i=0;i<childNodes.length;i++){
        //     dom.remove(childNodes[i])
        //     array.push(childNodes[i])
        // }childNodes会实时更新，其长度是变化的因此在这里不适应故而采取while循环
        // return array
     },
     attr(node,name,value){
         if(arguments.length===3){
            node.setAttribute(name,value)
         }
         if(arguments.length===2){
           return node.getAttribute(name)
         }
     },
     text(node,string){
        if(arguments.length===2) 
        {if('innerText' in node)
        {node.innerText=string
     }else{
         node.textContent = string
     }
     if(arguments.length===1)
     {if('innerText' in node)
        {return node.innerText
     }else{
         return node.textContent
     }
    }
    }
    },
    html(node,string){
       if(arguments.length===2) 
       {node.innerHTML=string
    }else
    if(arguments.length===1)
       {return node.innerHTML
    }
   },
   style(node,name,value){
    if(arguments.length===3){
    node.style[name]=value}
    if(arguments.length===2){
        if (typeof name===`string`)
        {const B=node.style[name]
        return B}
        if(name instanceof Object){
            const object=name
            for(let key in object){
                node.style[key]=object[key]
            }
        }
      }
    },
    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            node.classList.has(className)
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
        find(selector,scope){
        return (document||scope).querySelectorAll(selector);
    },
    children(node){
        return node.children
    },
    parent(node){
        return node.parent
    },
    
    siblings(node){
        return Array.from(node.parentNode.children).filter(
            n=>n!==node
        )
    },
    next(node){
        let x=node.nestSibling
        while(x&&x.nodeType===3){
            x =x.nestSibling
        }
        return x
    },
    previous(node){
        let x=node.previousSibling
        while(x&&x.nodeType===3){
            x =x.previousSibling
        }
        return x
    },
  
    each(array,fn){
        Array.from(array)
        let i 
        for(let i=0;i < array.length;i++){
        fn.call(null,array[i])
        }},
        index(node){
            const list =dom.children(node.parentNode)
        for(let i =0;i<list.length;i++){
            if(list[i]=node)
            break
        }
        return i        
    },
}