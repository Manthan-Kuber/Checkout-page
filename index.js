window.onload = function () {
  const increment = document.getElementsByClassName("increment");
  const decrement = document.getElementsByClassName("decrement");
  const totalCost = document.getElementById("total cost");

  let count1 = document.getElementById("input1").value;
  let count2 = document.getElementById("input2").value;

  totalCost.innerText = "$" + (54.99 * count1 + 74.99 * count2 + 12).toFixed(2);

  increment[0].addEventListener("click", () => {
    console.log("Inc button clicked");
    count1 < 10 ? ++count1 : null;
    console.log("count1 = " + count1);
    document.getElementById("input1").value = count1;
    totalCost.innerText =
      "$" + (54.99 * count1 + 74.99 * count2 + 12).toFixed(2);
  });

  decrement[0].addEventListener("click", () => {
    console.log("Dec button clicked");
    count1 > 1 ? --count1 : null;
    console.log("count1 = " + count1);
    document.getElementById("input1").value = count1;
    totalCost.innerText =
      "$" + (54.99 * count1 + 74.99 * count2 + 12).toFixed(2);
  });

  increment[1].addEventListener("click", () => {
    console.log("Inc button clicked");
    count2 < 10 ? ++count2 : null;
    console.log("count2 = " + count2);
    document.getElementById("input2").value = count2;
    totalCost.innerText =
      "$" + (54.99 * count1 + 74.99 * count2 + 12).toFixed(2);
  });

  decrement[1].addEventListener("click", () => {
    console.log("Dec button clicked");
    count2 > 1 ? --count2 : null;
    console.log("count2 = " + count2);
    document.getElementById("input2").value = count2;
    totalCost.innerText =
      "$" + (54.99 * count1 + 74.99 * count2 + 12).toFixed(2);
  });
};
