function setAvatar(name) {
  var path;
  name = name.toLowerCase();
  name = name.slice(0, 1);
  // path = "./images/avatar/" + name + ".jpg";
  return name;
}
export default setAvatar;
