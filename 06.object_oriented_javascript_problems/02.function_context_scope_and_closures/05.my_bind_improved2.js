function myBind(func, ctx, args) {
  let previousArgs = [].slice.apply(arguments, [2]);

  return function() {
    let currentArgs = [].slice.apply(arguments);
    let fullArgs = previousArgs.concat(currentArts)

    return func.apply(ctx, fullArgs);
  }
}

