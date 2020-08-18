const cropName = function(name) {
    var croppedName = ''
    if (name.length <= 21) {
      return name;
    }
    croppedName = `${name.slice(0, 22)}...`;
    return croppedName;
  }

  export default cropName;