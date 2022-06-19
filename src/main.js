const newdiv=dom.create('<div>你好</div>');
console.log(newdiv);

dom.after(test,newdiv)//这些节点都是需要先在js线程中创建出来

const div2=dom.create('<div id="parent"></div>')
dom.wrap(test,div2)
const nodes =dom.empty(window.empty)
console.log(nodes)

dom.attr(test,'title','hi')
const title =dom.attr(test,'title')
console.log(title)
dom.text(test,'你好这是传入的文本')

dom.style(test,{border:'1px solid red',color:'blue'})

dom.class.add(test,'red')

const fn =()=>{
    console.log('点击了')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const divtest =dom.find('#test')[0]
console.log(divtest)
const divbule =dom.find('.bule',divtest)
console.log(divbule)
// const div = dom.find('#test>.red')[0]
// console.log(div)

// dom.style(div, `color`,`red`)

// const divList = dom.find('.red')
// console.log(divList)
// dom.each(divList, (n)=> console.log(n)) 