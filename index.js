//              mini fetch task


var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json()).then((value) => bar(value));

var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";
container.append(row);
document.body.append(container)

function bar(value) {
    for (var i = 0; i < value.length; i++) {
        var name = value[i].name;
        var flag = value[i].flags.png;
        var capital = value[i].capital;
        var region = value[i].region;
        var code = value[i].alpha3Code;

        row.innerHTML += `
        <div class="col-md-3 p-3">
            <div class="card h-100 border-primary mb-3" style="max-width: 18rem; text-align:center">
            <div class=" card-header p-3 mb-2 bg-dark text-white">${name}</div>
                <img src="${flag}" alt="flags">
                    <div class="card-body text-primary">
                        <p class="card-text">Country: ${capital}</p>
                        <p class="card-text">Region: ${region}</p>
                        <p class="card-text">Country code: ${code}</p>
                    </div>
                    <button type="button" m-auto class="btn btn-secondary">Click for weather</button>
            </div>
        </div>
        `
    }
}