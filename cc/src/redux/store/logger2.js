function logger2() {
  return ({ dispatch, getState }) => next => action => {
    console.log(action.type);
    if (action.type === "ERRPR_MSG") {
      action.message = "msg";
      console.log(action.message);
      next(action);
    } else if (action.type === "DISABLE") {
      //   next();
      //   console.log(action);
    } else {
      next(action);
    }
  };
}

export default logger2;

// function cc(arr) {
//   return arr.map(function(x) {
//     const s = x.toLowerCase();
//     const temp = [...s];
//     temp[0] = temp[0].toUpperCase();
//     return (x = temp.join(""));
//   });
// }
// console.log(cc(["adam", "LISA", "barT"]));
// function cc(arr) {
//   return arr.map(
//     x => x.slice(0, 1).toUpperCase() + x.substring(1).toLowerCase()
//   );
// }
// console.log(cc(["adam", "LISA", "barT"]));
