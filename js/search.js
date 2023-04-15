function Search() {
  var input, filter, table, tr, tdName, tdCountry, tdOrder, i, txtValueName, txtValueCountry, txtValueOrder;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    tdName = tr[i].getElementsByTagName("td")[0];
    tdCountry = tr[i].getElementsByTagName("td")[1];
    tdOrder = tr[i].getElementsByTagName("td")[2];
    if (tdName && tdCountry && tdOrder) {
      txtValueName = tdName.textContent || tdName.innerText;
      txtValueCountry = tdCountry.textContent || tdCountry.innerText;
      txtValueOrder = tdOrder.textContent || tdOrder.innerText;
      if (txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueCountry.toUpperCase().indexOf(filter) > -1 || txtValueOrder.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}