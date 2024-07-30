"use strict";
let item = document.getElementById("input_item");
const add_btn = document.getElementById("add_btn");
const output = document.querySelector(".out");
let list = [];

let editindex = -1;
console.log(add_btn);
add_btn && add_btn.addEventListener("click", () => {
    const input = item.value;
    if (input) {
        if (editindex !== -1) {
            list[editindex] = input;
            editindex = -1;
            add_btn.textContent = "Add";
        }
        else {
            list.push(input);
        }
        item.value = "";
        renderList();
    }
    else {
        alert("Insert input");
    }
});
function renderList() {
    let list_html = "";
    if ((list === null || list === void 0 ? void 0 : list.length) > 0) {
        for (let i = 0; i < list.length; i += 1) {
            const name = list[i];
            const L_html = `
          <div class="Outputs">
              <div class="names">${name}</div>
              <div class="btn-block">
                  <button class="edit_btn" data-index="${i}">Edit</button>
                  <button class="delete_btn" onclick="
                    list.splice(${i}, 1);
                    renderList();
                  ">Delete</button>
              </div>
          </div>
      `;
            list_html += L_html;
        }
        output.innerHTML = list_html;
        document.querySelectorAll(".edit_btn").forEach((button) => {
            button.addEventListener("click", function (e) {
                const target = e.currentTarget;
                const index = parseInt(target.getAttribute("data-index"), 10);
                editindex = index;
                item.value = list[editindex];
                add_btn.textContent = "Update";
            });
        });
    }
    else {
        output.textContent = "No items found.";
    }
}
renderList();
//# sourceMappingURL=index.js.map