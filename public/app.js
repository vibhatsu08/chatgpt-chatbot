const conversationsContainer = document.getElementById("conversations-container");
const inputCommand = document.getElementById("input-command");
const inputCommandButton = document.getElementById("input-command-button");

inputCommandButton.addEventListener("click", function() {
    if (inputCommand.value.trim() !== "") {
        let gptInputCommand = document.createElement("div");
        gptInputCommand.classList.add("gpt-input-command");
        gptInputCommand.textContent = inputCommand.value;
        conversationsContainer.appendChild(gptInputCommand);

        fetch("/output")
            .then(response => response.text())
            .then(output => {
                let gptOutputResponse = document.createElement("div");
                gptOutputResponse.classList.add("gpt-output-response");
                gptOutputResponse.textContent = output;
                conversationsContainer.appendChild(gptOutputResponse); 
            })
            .catch(error => {
                console.log(error);
            });
    }
});