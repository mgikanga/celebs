 // A function to get Authors and then render our list of Authors
 function getCelebs() {
    $.get("/api/celebs", renderCelebList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderCelebList(data) {
    if (!data.length) {
      window.location.href = "/celebs";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createCelebRow(data[i]));
    }
    CelebSelect.empty();
    console.log(rowsToAdd);
    console.log(authorSelect);
    celebSelect.append(rowsToAdd);
    celebSelect.val(celebId);
  }