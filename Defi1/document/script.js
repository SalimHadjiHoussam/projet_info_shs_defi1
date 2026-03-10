document.querySelector("#bt").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    const url = "https://cors-anywhere.herokuapp.com/https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb";

    xhr.open("GET", url); 
    xhr.setRequestHeader("Accept", "application/json"); 

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log(response); 

                const message = document.querySelector("#message");
                message.innerHTML = "";

                
                response.lines.line.forEach(line => {
                    const li = document.createElement("li");
                    li.textContent = `${line.shortName} - ${line.name}`;
                    message.appendChild(li);
                });
            } else {
                document.querySelector("#message").textContent = "Impossible de charger les lignes.";
            }
        }
    };

    xhr.send(); 
});
