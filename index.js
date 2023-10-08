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
        console.log(value[i]);
        var name = value[i].name;
        var flag = value[i].flag;
        var capital = value[i].capital;
        var region = value[i].region;
        var code = value[i].alpha3Code;

        row.innerHTML += `
        <div class="col-md-4 p-3 h-100 w-100 m-auto">
            <div class="card border-primary mb-3" style="max-width: 18rem; text-align:center">
            <div class=" card-header p-3 mb-2 bg-dark text-white">${name}</div>
                <img style="width:100% height:100%" src="${flag}" alt="">
                    <div class="card-body text-primary">
                    <p class="card-text">Country: ${capital}</p>
                    <p class="card-text">Region: ${region}</p>
                    <p class="card-text">Country code: ${code}</p>
                    <button type="button" class="btn btn-secondary">Click for weather</button>
                </div>
            </div>
        </div>
        `
    }
}