async function render_number_of_visits(num) {
  const visit_count_container = document.querySelector(
    "#visit-count-container"
  );

  const visit_count_text = document.createElement("p");
  const visit_count_text_content = document.createTextNode(
    `total number of visits: ${num}`
  );

  visit_count_text.appendChild(visit_count_text_content);
  visit_count_container.appendChild(visit_count_text);

  visit_count_text.classList.add("visit-counter");
}

async function get_number_of_visits() {
  const url =
    "https://khasxcpkoc.execute-api.ap-southeast-4.amazonaws.com/update_vistor_count";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Resonse status: ${response.status}`);
    }

    const json = await response.json();
    render_number_of_visits(json);
  } catch (error) {
    console.error(error.message);
  }
}

async function main() {
  get_number_of_visits();
  // render_number_of_visits(numberOfVisits);
}

main();
