
exports.example = () => {
  console.log(exports.run(0, 100));
}

exports.run = (min, max) => {
  var output = [];
  for (var i = min; i <= max; i++) {
    output.push(exports.getResult(i));
  }
  return output;
};

exports.getResult = (value) => {
  var results = '';
  if (value % 3 === 0) results += 'Froth';
  if (value % 5 === 0) results += 'Hiss';
  if (!results.length) results += '' + (value);
  return results;
};


