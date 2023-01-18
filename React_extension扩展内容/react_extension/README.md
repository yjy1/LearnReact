## 1. setState
    setState更新状态的2种写法
        (1).setstate(stateChange，[calIback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.ca11back是可选的回调函数，它在状本更新完毕、界面也更新后(render调用后)才被调用
        (2).setState(updater，[cal1back])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.ca11back是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用。
    总结:
        1.对象式的setstate是函数式的setstate的简写方式(语法糖)
        2.使用原则:
            (1).如果新状态不依赖于原状态 ===>使用对象方式
            (2).如果新状态依赖于原状态 ===使用函数方式
            (3).如果需要在setstate0执行后获取最新的状本数据
            要在第二个ca11back函数中读取


## 4. Effect Hook
    (1).Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钓子)
    (2).React中的副作用操作:
        发ajax请求数据获取设置订阅 /启动定时器
        手动更改真实DOM
    (3).语法和说明:
        useEffect(() => {
            //在此可以执行任何带副作用操作
            return () => // 在组件卸载前执行
              //在此做一些收尾工作，比如清除定时器/取消订阅等
            }
        }，[stateValue]) // 如果指定的是[]，回调函数只会在第一次render ()后执行
    (4).可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount()


## 6. 组件优化
    Component的2个问题
        1.只要执行setState0),即使不改变状态数据组件也会重新render0)
        2.只当前组件重新render0,就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==>效率低 
    效率高的做法
        只有当组件的state或props数据发生改变时才重新render0)
    原因
        Component中的shouldComponentUpdate()总是返回true
    解决
        办法1:
            重写shouldComponentUpdateO方法
            比较新旧state或props数据，如果有变化才返回true，如果没有返回false
        办法2:
            使用PureComponent
            PureComponent重写了shouldComponentUpdate()，只有state或props数据有变化才返回true
            注意:
                只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，返回false不要直接   修改state数据，而是要产生新数据
        项目中一般使用PureComponent来优化
