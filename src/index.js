const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Access Input Value Directly
    const input = document.querySelector("input#searchByID");

    console.log(input.value);

    // Fetch Data Based on User Input
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((res) => res.json())
      .then((data) => {
        // Display Fetched Data on the Page
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerHTML = data.title;
        summary.innerHTML = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
