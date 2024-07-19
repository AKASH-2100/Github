function request(){
    var Name = document.getElementById("finder").value;
    fetch("https://api.github.com/users/" + Name)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            var result = document.getElementById("result");
            result.innerHTML = `
                <img src="${response.avatar_url}" alt="user">
                <p><strong>ID:</strong> ${response.id}</p>
                <p><strong>Username:</strong> ${response.login}</p>
            `;
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
            var result = document.getElementById("result");
            result.innerHTML = `<p>Error fetching user data</p>`;
        });
}
function request1(){
    var Name = document.getElementById("finder1").value;
    fetch("https://api.github.com/users/" + Name+"/repos")
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            var result1 = document.getElementById("result1");
            response.forEach(element => {
                result1.innerHTML+=`<p>${element.name}`;
            });
           /* result.innerHTML = `
                <img src="${response.avatar_url}" alt="user">
                <p><strong>ID:</strong> ${response.id}</p>
                <p><strong>Username:</strong> ${response.login}</p>
            `;*/
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
            var result = document.getElementById("result");
            result.innerHTML = `<p>Error fetching user data</p>`;
        });
}