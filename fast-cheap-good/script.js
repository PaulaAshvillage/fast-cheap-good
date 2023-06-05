const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");

fast.addEventListener("click", onlyTwo);
cheap.addEventListener("click", onlyTwo);
good.addEventListener("click", onlyTwo);

function onlyTwo() {
  //get all checked Elements in a list
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log(checked);

  if (checked.length === 3) {
    itemToRemove = checked[1];
    itemToCheck = checked[2];

    itemToRemove.checked = false;
    itemToCheck.checked = true;
    itemToRemove.remove;
  }
}
