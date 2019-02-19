//观察者模式 观察者  要 置于被观察者中
// 观察者要提供一个更新方法，待被观察者数据变化时，需要调用观察者的update方法

function Target() {
    this.state = '不开心';
    this.arr = [];
}

Target.prototype.attach = function(o) {
    this.arr.push(o);
}

Target.prototype.setState = function(newState) {
    this.state = newState;
    this.arr.forEach(o => o.update(this.state));
}

function Observer(name, target) {
    this.name = name;
    this.target = target;
}

Observer.prototype.update = function(newState) {
    console.log(`${this.name}观察到了宝宝的变化${newState}`);
}

const t = new Target();
const o1 = new Observer('我', t);
const o2 = new Observer('我媳妇', t);
t.attach(o1);
t.attach(o2);
t.setState('开心');
t.setState('不开心');