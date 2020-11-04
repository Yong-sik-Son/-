const input = document.getElementById("selFolder");
const preview = document.querySelector(".file_list");

input.addEventListener("change", showTextFile);

function showTextFile() {
  const selectedFiles = input.files;
  const list = document.createElement("ul");
  preview.appendChild(list);

  if (val == 2) {
    var j=0;
    for (const file of selectedFiles) {
      
      const listItem = document.createElement("li");
      const summary = document.createElement("div");
      const img = document.createElement("img");
      const inp = document.createElement("textarea");

      img.id = "a";
      img.src = file.webkitRelativePath;

      fn[j] = file.webkitRelativePath;
      j++;

      img.width = "300";
      img.height = "300";
      inp.cols = "100";
      inp.rows = "15";
      summary.textContent = file.name;
      listItem.appendChild(summary);
      list.appendChild(listItem);
      listItem.appendChild(img);
      listItem.appendChild(inp);
    }
  } else {
    var j=0;
    for (const file of selectedFiles) {
      const listItem = document.createElement("li");
      const summary = document.createElement("div");
      const table = document.createElement("table");
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      const img = document.createElement("img");

      table.border=1;

      img.id = "a";
      img.src = file.webkitRelativePath;

      fn[j] = file.webkitRelativePath;
      j++;

      img.width = "300";
      img.height = "300";
      summary.textContent = file.name;
      listItem.appendChild(summary);
      list.appendChild(listItem);
      listItem.appendChild(table);
      table.appendChild(tr);
      tr.appendChild(td);
      td.appendChild(img);
    }
  }
}
