export function Contents(cc){
    Object.defineProperty(cc, "name", {
        get: function () { return  cc.state.name; },
        set: function (value) { cc.setState({name:value}) ; }
    });
}