
export default function HOC(WrapperComponent){
    return class HOC extends WrapperComponent{
        test1(){
            return this.test2()+5;
        }
        // componentDidMount(){
        //     console.log('1');
        //     this.setState({number:2});
        // }
        render(){
            //使用super调用传入组件的render方法
            return super.render();
        }

    }
}