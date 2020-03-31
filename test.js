let str = "rEACTEUR";
str = str[0].toUpperCase() + str.substring(1).toLowerCase();
console.log(str);

for (let i = 12; i >= 0; i--) {
  if (i === 7) {
    console.log("Ignition sequence start");
  } else if (i === 8) continue;
  else {
    console.log(i);
  }
}
console.log("All engines running");
console.log("Liftoff! 🚀");
