export default function HOC(WrapperComponent) {
  let getDisplayName = component => {
    return component.displayName || component.name || "Component";
  };
  return class HOC extends WrapperComponent {
    static displayName = `HOC(${getDisplayName(WrapperComponent)})`;
    test1() {
      return this.test2() + 5;
    }
    componentDidMount() {
      console.log("1");
      this.setState({ number: 2 });
    }
    render() {
      //使用super调用传入组件的render方法
      return super.render();
    }
  };
}
