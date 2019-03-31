
class compiler{
    constructor(el, vm) {
        this.el = this.isElementnode(el) ? el : document.querySelector(el);
        this.vm = vm;
        // 当前节点中的元素 获取到 放到内存中
        let fragment = this.node2fragement(this.el);
        // 把节点中的内容进行替换

        // 用数据编译模板
        this.compile(fragment);
        // 把内容塞到页面中
        this.el.appendChild(fragment);
    }
    compile(node){
        let childNodes = node.childNodes;
        [...childNodes].forEach(child => {
            if(this.isElementnode(child)) {
                this.compileElement(child);
            }else{
                this.compileText(child);
            }
        })
    }
    compileElement(node){

    }
    compileText(node){
        
    }
    node2fragement(node) {
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = node.firstChild) {
            // appendChild具有移动性
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
    isElementnode(node) {
        return node.nodeType === 1;
    }
}
// 基类 调度
class Vue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el) {
            new compiler(this.$el, this);
        }
    }
}