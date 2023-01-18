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