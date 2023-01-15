## github搜索案例相关知识点##
    1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
    2.ES6小知识点:解构赋值+重命名
        let obj = fa:(b:1
        const {a} = obj; //传统解构赋值
        const {a:{b]} = obj; //连续解构赋值const {a:{b:value}》 = obj; //连续解构赋值+重命名
    3.消息订阅与发布机制
        1.先订阅，再发布(理解: 有一种隔空对话的感觉)
        2.适用于任意组件间通信
        3.要在组件的componentwillUnmount中取消订阅
    4.fetch发送请求(关注分离的设计思想)
        try {
            const response= await fetch( /api1/search/users2?q=${keyword)')
            const data = await response.json()
            console.log(data);
         }  catch (error){
            console.log(请求出错',error);
         }

## 三、路由的基本使用
    1.明确好界面中的导航区、展示区
    2.导航区的a标签改为Link标签
         <Link to="/xxxxx">Demo</Link>
    3.展示区写Route标签进行路径的匹配
         <Route path='/xxxx’ component={Demo}/>
    4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 四、路由组件与一般组件
    1.写法不同:
        一般组件: <Demo/>
        路由组件: <Route path="/demo” component={Demo}/>
    2.存放位置不同:
        一般组件: components
        路由组件: pages
    3.接收到的props不同:
        一般组件:写组件标签时传递了什么，就能收到什么
        路由组件:接收到三个固定的属性
                    history:
                        go: f go(n)
                        goBack: f goBack()
                        goForward: f goForward()
                        push: f push(path, state)
                        replace: f replace(path, state) 
                    location:
                        pathname:"/about"
                        search: un
                        state: undefined
                    match:
                        params:[
                        path:"/about"
                        url:"/about"