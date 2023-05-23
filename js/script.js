var ctx = document.getElementById("sunPieChart");
var xValues = ["NFT Community Vault", "Marketing Wallet", "Team Wallet", "Seed Sale Round", "Pre-Sale Round",
    "Dex Liquidity", "Pink Sale Easy Sen",
    "Community Incentives", "Advisars"
];
var yValues = [20, 5.5, 10, 16, 25, 17, 0.5, 3, 3];
var barColors = ["#ff638450", "#36a2eb50", "#ffcd5650", "#ff638450", "#36a2eb50", "#ffcd5650", "#ff638450", "#36a2eb50", "#ffcd5650"];
var hoverColor = ["#ff6384", "#36a2eb", "#ffcd56", "#ff6384", "#36a2eb", "#ffcd56", "#ff6384", "#36a2eb", "#ffcd56"];
new Chart("myChart", {
    type: "doughnut",
    plugins: [{
        afterDraw: chart => {
            var ctx = chart.chart.ctx;
            ctx.save();
            var image = new Image();
            image.src =
                '#';
            imageSize = 60;
            ctx.drawImage(image, chart.chart.width / 2 - imageSize / 2, chart.chart.height / 2 - imageSize / 2,
                imageSize, imageSize);
            ctx.restore();
        }
    }],
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            hoverBackgroundColor: hoverColor,
            data: yValues
        }]
    },
    options: {
        onHover: function (evt, elements) {
            if (elements && elements.length) {
                segment = elements[0];
                this.chart.update();
                selectedIndex = segment["_index"];
                segment._model.outerRadius += 6;
            } else {
                if (segment) {
                    segment._model.outerRadius -= 6;
                }
                segment = null;
            }
        },
        layout: {
            padding: 8
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }
});
for (let i = 0; i < xValues.length; i++) {
    document.getElementsByClassName('tooltip')[i].textContent = xValues[i] + " " + yValues[i] + "%";
}
// Divider Animation
window.addEventListener('scroll', function (){
    let value = window.scrollY;
    document.getElementsByClassName('roadmap-header')[0].style.marginLeft = value * -1 + "px";
    document.getElementsByClassName('tokenomics-header')[0].style.marginLeft = value * -1 + "px";
});
// Side Navbar
function navbar(){
    let nav = document.getElementsByClassName('full-nav')[0];
    if (nav.style.width === "100%"){
        nav.style.width = "0px"
    }else{
        nav.style.width = "100%";
    }
}