$(document).ready(function(){
    $(".registration__inGame").click(function(){
        $(this).parent().parent().css({
            'width': '435px',
            'background-color':'#198a9c'
        })
        $(this).parent().parent().html('<div class="headOfGameRegistration">' +
            '<p class="PlayersInReg">5 კაციანი</p>' +
            '<div class="CashInReg">' +
                '<p class="gamePriceInReg">5 ლარი</p>' +
                '<p class="maxWinInReg">5000 <span style="font-size: 16px;">GEL</span></p>' +
            '</div>' +
        '</div>' +
        '<div class="CentralContent">' +
            '<p class="coeficient GeoFont">5X</p>' +
            '<img src="images/JamingImg.png" alt="JamingImg" class="Jaming">' +
        '</div>' +
        '<div class="text">' +
            '<p class="coefText">კოეფიციენტი</p>' +
            '<p class="jamingText">JAMING JARS</p>' +
        '</div>' +
        '<ul class="UsersWAittingForGame">' +
            '<li><img src="images/icons/UserStrongGreen.svg" alt="WAittingForGame" class="UserIconInReg"></li>' +
            '<li><img src="images/icons/UserStrongGreen.svg" alt="WAittingForGame" class="UserIconInReg"></li>' +
            '<li><img src="images/icons/UserStrongGreen.svg" alt="WAittingForGame" class="UserIconInReg"></li>' +
            '<li><img src="images/icons/UserStrongGreen.svg" alt="WAittingForGame" class="UserIconInReg"></li>' +
            '<li><img src="images/icons/UserStrongGreen.svg" alt="WAittingForGame" class="UserIconInReg"></li>' +
        '</ul>' +
        '<button class="startButtonInReg" onclick="clickOnStartBTN()">დაწყება</button>')
    })
})

function clickOnStartBTN(){
    $(document).ready(function(){
        $(".startButtonInReg").click(function(){
            $(this).parent().html('<div class="headOfGameRegistration">' +
            '<p class="PlayersInReg">5 კაციანი</p>' +
            '<div class="CashInReg">' +
                '<p class="gamePriceInReg">5 ლარი</p>' +
                '<p class="maxWinInReg">5000 <span style="font-size: 16px;">GEL</span></p>' +
            '</div>' +
        '</div>' +
        '<div class="contentInLoadGame">' +
            '<p class="loadGameHead"> გთხოვთ დაელოდოთ მოწინააღმდეგეს</p>' +
            '<ul class="usersIconInLoadGame">' +
                '<li><img src="images/icons/UserStrongGreen.svg" alt="usersinLoadGame"></li>' +
                '<li><img src="images/icons/UserStrongGreen.svg" alt="usersinLoadGame"></li>' +
                '<li><img src="images/icons/UserStrongGreen.svg" alt="usersinLoadGame"></li>' +
                '<li><img src="images/icons/UserStrongGreen.svg" alt="usersinLoadGame"></li>' +
                '<li><img src="images/icons/UserStrongGreen.svg" alt="usersinLoadGame"></li>' +
            '</ul>' +
            '<p class="TimeBeforeStartGame">სავარაუდო მოლოდინის დრო: <span id=""loadTime>30</span> წამი </p>' +
            '<div class="loadFullLine"><div class="loadLine" id="load"></div></div>' +
            '<button class="cancelGame" onclick="loadTimeout()">გაუქმება </button>' +
        '</div>')
        })
    })
}



function loadLine(){
    setInterval(function(){
        let margin = document.getElementById("load").style.marginLeft;
        if(margin >= "232px"){
            document.getElementById("load").style.marginLeft = "0px"
            document.getElementById("load").style.transition = "2s";
        }
        else if(margin = "0px"){
            document.getElementById("load").style.marginLeft = "233px";
            document.getElementById("load").style.transition = "1s";
        }
    }, 2000)
}

loadLine();

clickOnStartBTN();