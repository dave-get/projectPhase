let item = document.getElementById("input_item") as HTMLInputElement;
const add_btn = document.getElementById("add_btn") as HTMLButtonElement;
const output = document.querySelector(".out") as HTMLDivElement;

let list: string[] = []
let editindex: number = -1;

console.log(add_btn);

// add-items
add_btn && add_btn.addEventListener("click", () => {
    const input: string = item.value;
    
    if (input){
        if (editindex !== -1){
            list[editindex] = input;
            editindex = -1;
            add_btn.textContent = "Add";
        } else {
            list.push(input);
        }
        item.value = "";
        renderList();
    }else{
        alert("Insert input");
    }
})

// display item
function renderList() {
  let list_html:string = "";

  if (list?.length > 0) {
    for (let i = 0; i < list.length; i += 1) {
      const name:string = list[i];
      const L_html: string = `
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
    // edit items

    document.querySelectorAll(".edit_btn").forEach((button) => {
      button.addEventListener("click", function (e) {
        const target = e.currentTarget as HTMLDivElement
        const index: number = parseInt(target.getAttribute("data-index")!, 10);

        editindex = index;
        item.value = list[editindex];
        add_btn.textContent = "Update";
      });
    });

  } else {
    output.textContent = "No items found.";
  }
}
renderList();