var xValues = ["NFT Community Vault", "Marketing Wallet", "Team Wallet", "Seed Sale Round", "Pre-Sale Round",
    "Dex Liquidity", "Pink Sale Easy Sen",
    "Community Incentives", "Advisars"
];
var yValues = [20, 5.5, 10, 16, 25, 17, 0.5, 3, 3];
var barColors = ["#ff638450", "#36a2eb50", "#ffcd5650", "#ff638450", "#36a2eb50", "#ffcd5650", "#ff638450", "#36a2eb50", "#ffcd5650"];
var hoverColor = ["#ff6384", "#36a2eb", "#ffcd56", "#ff6384", "#36a2eb", "#ffcd56", "#ff6384", "#36a2eb", "#ffcd56"];
new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            hoverBackgroundColor: hoverColor,
            data: yValues
        }]
    },
    options: {
        layout: {
            padding: 8
        },
        legend: {
            display: false
        }
    }
});
// Divider Animation
window.addEventListener('scroll', function (){
    let value = window.scrollY;
    document.getElementsByClassName('roadmap-header')[0].style.marginLeft = value * -1 + "px";
    document.getElementsByClassName('tokenomics-header')[0].style.marginLeft = value * -1 + "px";
});
// Side Navbar
function navbar(){
    let nav = document.getElementsByClassName('full-nav')[0];
    let navImage = document.getElementsByClassName("nav-img")[0];
    if (nav.style.width === "100%"){
        navImage.classList.remove("nav-img-ani-forward");
        navImage.classList.add("nav-img-ani-backward");
        setTimeout(function (){
            nav.style.width = "0px";
        }, 700);
    }else{
        nav.style.width = "100%";
        navImage.classList.add("nav-img-ani-forward");
        navImage.classList.remove("nav-img-ani-backward");
    }
}
//Aggregators Animation
let aggregatorsCount = 1;
setInterval(function (){
    if(aggregatorsCount <= 4){
        document.getElementsByClassName('aggregators-ani')[0].setAttribute('src', 'images/aggregators/aggregators-' + aggregatorsCount + '.svg')
        aggregatorsCount++;
    }
    if(aggregatorsCount === 5){
        aggregatorsCount = 1;
    }
},2000)
//NFTVault Animation
let scrollMargin = window.getComputedStyle(document.getElementsByClassName('auto-scroll-ani')[0]).marginLeft.replace('px', '');
let temp = scrollMargin;
let scrollElement = document.getElementsByClassName('auto-scroll-ani')[0];
setInterval(function (){
    if(temp >= -400){
        temp -= 101;
        scrollElement.style.marginLeft = temp + 'vw';
    }else{
        temp = scrollMargin;
        scrollElement.style.marginLeft = scrollMargin + 'vw';
    }
},2000)