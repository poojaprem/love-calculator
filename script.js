function calculate()
{
    var userInput1 = document.getElementById("name1").value;
    var userInput2 = document.getElementById("name2").value;
    var n = Math.random();
    n=(n*100)+1;
    n=Math.floor(n);
    // Store the result in local storage
    localStorage.setItem("result", n);
    localStorage.setItem("name1", userInput1);
    localStorage.setItem("name2", userInput2);
      
    // Redirect to the destination page
    window.location.href = "results.html";


}
