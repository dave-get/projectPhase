const item = document.getElementById("input");
const add_btn = document.getElementById("add");
const load = document.getElementById("load");
const output = document.querySelector(".out");

let list = [];
let editIndex = null;

add_btn.addEventListener("click", function () {
  const inputItem = item.value;
  if (inputItem) {
    if (editIndex !== null) {
      list[editIndex] = inputItem;
      editIndex = null;
      add_btn.textContent = "Add";
    } else {
      list.push(inputItem);
    }
    item.value = "";
    renderList();
  } else {
    alert("Please Enter Items");
  }
});

window.deleteItem = function (index) {
  list.splice(index, 1);
  renderList();
};

function renderList() {
  let list_html = "";
  if (list.length > 0) {
    for (let i = 0; i < list.length; i += 1) {
      const name = list[i];
      const L_html = `
          <div class="Outputs">
              <div class="names">${name}</div>
              <div class="btn-block">
                  <button class="edit_btn" data-index="${i}">Edit</button>
                  <button class="delete_btn" onclick="deleteItem(${i})">Delete</button>
              </div>
          </div>
      `;
      list_html += L_html;
    }
    output.innerHTML = list_html;

    document.querySelectorAll(".edit_btn").forEach((button) => {
      button.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"), 10);
        editIndex = index;
        item.value = list[editIndex];
        add_btn.textContent = "Update";
      });
    });
  } else {
    output.textContent = "No items found.";
  }
}

renderList();
