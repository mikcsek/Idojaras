var idojaras    = document.getElementById("idojaras");
    napok   =   document.getElementById("napok");
    date = document.getElementById("date");
    fok = document.getElementById("fok");
    max = document.getElementById("max");
    min = document.getElementById("min");
    kozep = document.getElementById("kozep");
    kozepKetto = document.getElementById("kozepKetto");
    varosNevek = document.getElementById("varos-nevek");
    varos = document.getElementById("varos");
    varosAdatok = document.getElementById("varos-adatok");
    link = "https://api.open-meteo.com/v1/forecast?latitude=47.7400&longitude=18.1217&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&current_weather=true&timezone=Europe%2FBerlin";
    
   

    // sorba rendezi a város neveket és kiírja

    window.addEventListener("load", async ()  =>  {

        let res = await fetch("hu.json");
        let data = await res.json();


                console.log(data);

                data = data.sort((a, b) => {
                    if (a.city < b.city) {
                      return -1;
                    }
                  });

                var output = "";
                var varosAdatokOutput = "";

                var id = 0;
                
                for(var i in data)  {

                    output += `<span onClick="GFG_click(this.textContent)">${data[i].city}</span>`;
                    varosAdatokOutput += `<span id="${data[i].city}">${data[i].lat}&longitude=${data[i].lng}</span>`; 
                    id++;

                }
                varosAdatok.innerHTML = varosAdatokOutput;
                varosNevek.innerHTML = output;
            

    })



    
    // városokra kattintáskor

    function GFG_click(clicked) {
        console.log(clicked);

        var eredmeny = document.getElementById(clicked);
        

        
        //console.log(eredmeny);

        link = `https://api.open-meteo.com/v1/forecast?latitude=${eredmeny.textContent}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&current_weather=true&timezone=Europe%2FBerlin`;

        
        //console.log(link);

        varos.innerHTML = clicked;

        idojarasLekeres();   
        
    }



    // időjárás lekérés
    
window.addEventListener("load", idojarasLekeres());

    function idojarasLekeres() {
        


    var xhr = new XMLHttpRequest();

    xhr.open("GET", link, true);

    xhr.onload = function() {

        if(xhr.status === 200)  {
            var data = JSON.parse(xhr.responseText);
            console.log(data);

            var dateOutput = `<span class="bold">Idő: </span>${data.current_weather.time} ${data.timezone_abbreviation}`;

            var fokOutput = `<span>${data.current_weather.temperature}°</span>`;

            var maxOutput = `<span>Max: ${data.daily.temperature_2m_max[0]}°</span>`;
            var minOutput = `<span>Min: ${data.daily.temperature_2m_min[0]}°</span>`;
            
            
            //Ikon középen
            
            
            var IkonKozepLinkVege = "";

            if  (data.current_weather.weathercode == 0) {
                IkonKozepLinkVege = "img/0.png";
            }   else if (data.current_weather.weathercode == 1 || data.current_weather.weathercode == 2 || data.current_weather.weathercode == 3)   {
                IkonKozepLinkVege = "img/123.png";
            }   else if (data.current_weather.weathercode == 45 || data.current_weather.weathercode == 48)  {
                IkonKozepLinkVege ="img/4548.png";
            }   else if (data.current_weather.weathercode == 51 || data.current_weather.weathercode == 53 || data.current_weather.weathercode == 55)  {
                IkonKozepLinkVege = "img/515355.png";
            }   else if (data.current_weather.weathercode == 61 || data.current_weather.weathercode == 63 || data.current_weather.weathercode == 65 || data.current_weather.weathercode == 80 || data.current_weather.weathercode == 81 || data.current_weather.weathercode == 82)    {
                IkonKozepLinkVege = "img/616365.png";
            }   else if (data.current_weather.weathercode == 71 || data.current_weather.weathercode == 73 || data.current_weather.weathercode == 75 || data.current_weather.weathercode == 77 || data.current_weather.weathercode == 85 || data.current_weather.weathercode == 86)  {
                IkonKozepLinkVege = "img/71737577.png";
            }   else if (data.current_weather.weathercode == 0) {
                IkonKozepLinkVege = "img/95.png";
            };
            
            
            //Ikon melletti adatok

            var windOutput = data.current_weather.windspeed;
            var rainOutput = data.current_weather.rain_sum;
            
            
            //első nap - 0-tól indul

            var elsoIkon = "";

            if  (data.daily.weathercode[0] == 0) {
                elsoIkon = "img/0.png";
            }   else if (data.daily.weathercode[0] == 1 || data.daily.weathercode[0] == 2 || data.daily.weathercode[0] == 3)   {
                elsoIkon = "img/123.png";
            }   else if (data.daily.weathercode[0] == 45 || data.daily.weathercode[0] == 48)  {
                elsoIkon ="img/4548.png";
            }   else if (data.daily.weathercode[0] == 51 || data.daily.weathercode[0] == 53 || data.daily.weathercode[0] == 55)  {
                elsoIkon = "img/515355.png";
            }   else if (data.daily.weathercode[0] == 56 || data.daily.weathercode[0] == 57 || data.daily.weathercode[0] == 66 || data.daily.weathercode[0] == 67)  {
                elsoIkon = "img/56576667.png";
            }   else if (data.daily.weathercode[0] == 61 || data.daily.weathercode[0] == 63 || data.daily.weathercode[0] == 65 || data.daily.weathercode[0] == 80 || data.daily.weathercode[0] == 81 || data.daily.weathercode[0] == 82)    {
                elsoIkon = "img/616365.png";
            }   else if (data.daily.weathercode[0] == 71 || data.daily.weathercode[0] == 73 || data.daily.weathercode[0] == 75 || data.daily.weathercode[0] == 77 || data.daily.weathercode[0] == 85 || data.daily.weathercode[0] == 86)  {
                elsoIkon = "img/71737577.png";
            }   else if (data.daily.weathercode[0] == 95 || data.daily.weathercode[0] == 96 || data.daily.weathercode[0] == 99) {
                elsoIkon = "img/95.png";
            };

            
            var outputElso = `
                    <div id="elso-nap" class="napokRow">
                        <div id="elso-nap-elso class=""><span class="">Dátum: </span><br>${data.daily.time[0]}</div>
                        <div class="mtb"><img src="${elsoIkon}"></div>
                        <div class="mtb"><span class="">Max hőmérséklet: </span><br>${data.daily.temperature_2m_max[0]} <span>°C</span></div>
                        <div class="mtb"><span class="">Min hőmérséklet: </span><br>${data.daily.temperature_2m_min[0]} <span>°C</span></div>  
                        <div class="mtb"><span class="">Csapadék: </span><br>${data.daily.rain_sum[0]} ${data.daily_units.rain_sum}</div>  
                    </div>
                        
                    
            `;

            
            //második nap

            var masodikIkon = "";

            if  (data.daily.weathercode[1] == 0) {
                masodikIkon = "img/0.png";
            }   else if (data.daily.weathercode[1] == 1 || data.daily.weathercode[1] == 2 || data.daily.weathercode[1] == 3)   {
                masodikIkon = "img/123.png";
            }   else if (data.daily.weathercode[1] == 45 || data.daily.weathercode[1] == 48)  {
                masodikIkon ="img/4548.png";
            }   else if (data.daily.weathercode[1] == 51 || data.daily.weathercode[1] == 53 || data.daily.weathercode[1] == 55)  {
                masodikIkon = "img/515355.png";
            }   else if (data.daily.weathercode[1] == 56 || data.daily.weathercode[1] == 57 || data.daily.weathercode[1] == 66 || data.daily.weathercode[1] == 67)  {
                masodikIkon = "img/56576667.png";
            }   else if (data.daily.weathercode[1] == 61 || data.daily.weathercode[1] == 63 || data.daily.weathercode[1] == 65 || data.daily.weathercode[1] == 80 || data.daily.weathercode[1] == 81 || data.daily.weathercode[1] == 82)    {
                masodikIkon = "img/616365.png";
            }   else if (data.daily.weathercode[1] == 71 || data.daily.weathercode[1] == 73 || data.daily.weathercode[1] == 75 || data.daily.weathercode[1] == 77 || data.daily.weathercode[1] == 85 || data.daily.weathercode[1] == 86)  {
                masodikIkon = "img/71737577.png";
            }   else if (data.daily.weathercode[1] == 95 || data.daily.weathercode[1] == 96 || data.daily.weathercode[1] == 99) {
                masodikIkon = "img/95.png";
            };

            var outputMasodik = `
                        
            <div id="elso-nap" class="napokRow">
                <div class="mtb"><span class="">Dátum: </span><br>${data.daily.time[1]}</div>
                <div class="mtb"><img src="${masodikIkon}"></div>
                <div class="mtb"><span class="">Max hőmérséklet: </span><br>${data.daily.temperature_2m_max[1]} <span>°C</span></div>
                <div class="mtb"><span class="">Min hőmérséklet: </span><br>${data.daily.temperature_2m_min[1]} <span>°C</span></div>  
                <div class="mtb"><span class="">Csapadék: </span><br>${data.daily.rain_sum[1]} ${data.daily_units.rain_sum}</div>  
            </div>
                        
                    
            `;

            //Harmadik nap

                        var harmadikIkon = "";

                        if  (data.daily.weathercode[2] == 0) {
                            harmadikIkon = "img/0.png";
                        }   else if (data.daily.weathercode[2] == 1 || data.daily.weathercode[2] == 2 || data.daily.weathercode[2] == 3)   {
                            harmadikIkon = "img/123.png";
                        }   else if (data.daily.weathercode[2] == 45 || data.daily.weathercode[2] == 48)  {
                            harmadikIkon ="img/4548.png";
                        }   else if (data.daily.weathercode[2] == 51 || data.daily.weathercode[2] == 53 || data.daily.weathercode[2] == 55)  {
                            harmadikIkon = "img/515355.png";
                        }   else if (data.daily.weathercode[2] == 56 || data.daily.weathercode[2] == 57 || data.daily.weathercode[2] == 66 || data.daily.weathercode[2] == 67)  {
                            harmadikIkon = "img/56576667.png";
                        }   else if (data.daily.weathercode[2] == 61 || data.daily.weathercode[2] == 63 || data.daily.weathercode[2] == 65 || data.daily.weathercode[2] == 80 || data.daily.weathercode[2] == 81 || data.daily.weathercode[2] == 82)    {
                            harmadikIkon = "img/616365.png";
                        }   else if (data.daily.weathercode[2] == 71 || data.daily.weathercode[2] == 73 || data.daily.weathercode[2] == 75 || data.daily.weathercode[2] == 77 || data.daily.weathercode[2] == 85 || data.daily.weathercode[2] == 86)  {
                            harmadikIkon = "img/71737577.png";
                        }   else if (data.daily.weathercode[2] == 95 || data.daily.weathercode[2] == 96 || data.daily.weathercode[2] == 99) {
                            harmadikIkon = "img/95.png";
                        };

            var outputHarmadik = `
            <div id="elso-nap" class="napokRow">
                <div class="mtb"><span class="">Dátum: </span><br>${data.daily.time[2]}</div>
                <div class="mtb"><img src="${harmadikIkon}"></div>
                <div class="mtb"><span class="">Max hőmérséklet: </span><br>${data.daily.temperature_2m_max[2]} <span>°C</span></div>
                <div class="mtb"><span class="">Min hőmérséklet: </span><br>${data.daily.temperature_2m_min[2]} <span>°C</span></div>  
                <div class="mtb"><span class="">Csapadék: </span><br>${data.daily.rain_sum[2]} ${data.daily_units.rain_sum}</div>  
            </div>
                        
                    
            `;

                        //Negyedik nap
                        var negyedikIkon = "";

                        if  (data.daily.weathercode[3] == 0) {
                            negyedikIkon = "img/0.png";
                        }   else if (data.daily.weathercode[3] == 1 || data.daily.weathercode[3] == 2 || data.daily.weathercode[3] == 3)   {
                            negyedikIkon = "img/123.png";
                        }   else if (data.daily.weathercode[3] == 45 || data.daily.weathercode[3] == 48)  {
                            negyedikIkon ="img/4548.png";
                        }   else if (data.daily.weathercode[3] == 51 || data.daily.weathercode[3] == 53 || data.daily.weathercode[3] == 55)  {
                            negyedikIkon = "img/515355.png";
                        }   else if (data.daily.weathercode[3] == 56 || data.daily.weathercode[3] == 57 || data.daily.weathercode[3] == 66 || data.daily.weathercode[3] == 67)  {
                            negyedikIkon = "img/56576667.png";
                        }   else if (data.daily.weathercode[3] == 61 || data.daily.weathercode[3] == 63 || data.daily.weathercode[3] == 65 || data.daily.weathercode[3] == 80 || data.daily.weathercode[3] == 81 || data.daily.weathercode[3] == 82)    {
                            negyedikIkon = "img/616365.png";
                        }   else if (data.daily.weathercode[3] == 71 || data.daily.weathercode[3] == 73 || data.daily.weathercode[3] == 75 || data.daily.weathercode[3] == 77 || data.daily.weathercode[3] == 85 || data.daily.weathercode[3] == 86)  {
                            negyedikIkon = "img/71737577.png";
                        }   else if (data.daily.weathercode[3] == 95 || data.daily.weathercode[3] == 96 || data.daily.weathercode[3] == 99) {
                            negyedikIkon = "img/95.png";
                        };

            var outputNegyedik = `
                  
            <div id="elso-nap" class="napokRow">
                <div class="mtb"><span class="">Dátum: </span><br>${data.daily.time[3]}</div>
                <div class="mtb"><img src="${negyedikIkon}"></div>
                <div class="mtb"><span class="">Max hőmérséklet: </span><br>${data.daily.temperature_2m_max[3]} <span>°C</span></div>
                <div class="mtb"><span class="">Min hőmérséklet: </span><br>${data.daily.temperature_2m_min[3]} <span>°C</span></div>  
                <div class="mtb"><span class="">Csapadék: </span><br>${data.daily.rain_sum[3]} ${data.daily_units.rain_sum}</div>  
            </div>
                    
            `;

                        //Ötödik nap
                        var otodikIkon = "";

                        if  (data.daily.weathercode[4] == 0) {
                            otodikIkon = "img/0.png";
                        }   else if (data.daily.weathercode[4] == 1 || data.daily.weathercode[4] == 2 || data.daily.weathercode[4] == 3)   {
                            otodikIkon = "img/123.png";
                        }   else if (data.daily.weathercode[4] == 45 || data.daily.weathercode[4] == 48)  {
                            otodikIkon ="img/4548.png";
                        }   else if (data.daily.weathercode[4] == 51 || data.daily.weathercode[4] == 53 || data.daily.weathercode[4] == 55)  {
                            otodikIkon = "img/515355.png";
                        }   else if (data.daily.weathercode[4] == 56 || data.daily.weathercode[4] == 57 || data.daily.weathercode[4] == 66 || data.daily.weathercode[4] == 67)  {
                            otodikIkon = "img/56576667.png";
                        }   else if (data.daily.weathercode[4] == 61 || data.daily.weathercode[4] == 63 || data.daily.weathercode[4] == 65 || data.daily.weathercode[4] == 80 || data.daily.weathercode[4] == 81 || data.daily.weathercode[4] == 82)    {
                            otodikIkon = "img/616365.png";
                        }   else if (data.daily.weathercode[4] == 71 || data.daily.weathercode[4] == 73 || data.daily.weathercode[4] == 75 || data.daily.weathercode[4] == 77 || data.daily.weathercode[4] == 85 || data.daily.weathercode[4] == 86)  {
                            otodikIkon = "img/71737577.png";
                        }   else if (data.daily.weathercode[4] == 95 || data.daily.weathercode[4] == 96 || data.daily.weathercode[4] == 99) {
                            otodikIkon = "img/95.png";
                        };

            var outputOtodik = `
                           
            <div id="elso-nap" class="napokRow">
                <div class="mtb"><span class="">Dátum: </span><br>${data.daily.time[4]}</div>
                <div class="mtb"><img src="${otodikIkon}"></div>
                <div class="mtb"><span class="">Max hőmérséklet: </span><br>${data.daily.temperature_2m_max[4]} <span>°C</span></div>
                <div class="mtb"><span class="">Min hőmérséklet: </span><br>${data.daily.temperature_2m_min[4]} <span>°C</span></div>  
                <div class="mtb"><span class="">Csapadék: </span><br>${data.daily.rain_sum[4]} ${data.daily_units.rain_sum}</div>  
            </div> 

            `;

                        //Hatodik nap
                        var hatodikIkon = "";

                        if  (data.daily.weathercode[5] == 0) {
                            hatodikIkon = "img/0.png";
                        }   else if (data.daily.weathercode[5] == 1 || data.daily.weathercode[5] == 2 || data.daily.weathercode[5] == 3)   {
                            hatodikIkon = "img/123.png";
                        }   else if (data.daily.weathercode[5] == 45 || data.daily.weathercode[5] == 48)  {
                            hatodikIkon ="img/4548.png";
                        }   else if (data.daily.weathercode[5] == 51 || data.daily.weathercode[5] == 53 || data.daily.weathercode[5] == 55)  {
                            hatodikIkon = "img/515355.png";
                        }   else if (data.daily.weathercode[5] == 56 || data.daily.weathercode[5] == 57 || data.daily.weathercode[5] == 66 || data.daily.weathercode[5] == 67)  {
                            hatodikIkon = "img/56576667.png";
                        }   else if (data.daily.weathercode[5] == 61 || data.daily.weathercode[5] == 63 || data.daily.weathercode[5] == 65 || data.daily.weathercode[5] == 80 || data.daily.weathercode[5] == 81 || data.daily.weathercode[5] == 82)    {
                            hatodikIkon = "img/616365.png";
                        }   else if (data.daily.weathercode[5] == 71 || data.daily.weathercode[5] == 73 || data.daily.weathercode[5] == 75 || data.daily.weathercode[5] == 77 || data.daily.weathercode[5] == 85 || data.daily.weathercode[5] == 86)  {
                            hatodikIkon = "img/71737577.png";
                        }   else if (data.daily.weathercode[5] == 95 || data.daily.weathercode[5] == 96 || data.daily.weathercode[5] == 99) {
                            hatodikIkon = "img/95.png";
                        };

            var outputHatodik = `
                    
            <div id="elso-nap" class="napokRow">
                <div class="mtb"><span class="">Dátum: </span><br>${data.daily.time[5]}</div>
                <div class="mtb"><img src="${hatodikIkon}"></div>
                <div class="mtb"><span class="">Max hőmérséklet: </span><br>${data.daily.temperature_2m_max[5]} <span>°C</span></div>
                <div class="mtb"><span class="">Min hőmérséklet: </span><br>${data.daily.temperature_2m_min[5]} <span>°C</span></div>  
                <div class="mtb"><span class="">Csapadék: </span><br>${data.daily.rain_sum[5]} ${data.daily_units.rain_sum}</div>  
            </div>
                        
                    
            `;

                        //Hetedik nap
                        var hetedikIkon = "";

                        if  (data.daily.weathercode[6] == 0) {
                            hetedikIkon = "img/0.png";
                        }   else if (data.daily.weathercode[6] == 1 || data.daily.weathercode[6] == 2 || data.daily.weathercode[6] == 3)   {
                            hetedikIkon = "img/123.png";
                        }   else if (data.daily.weathercode[6] == 45 || data.daily.weathercode[6] == 48)  {
                            hetedikIkon ="img/4548.png";
                        }   else if (data.daily.weathercode[6] == 51 || data.daily.weathercode[6] == 53 || data.daily.weathercode[6] == 55)  {
                            hetedikIkon = "img/515355.png";
                        }   else if (data.daily.weathercode[6] == 56 || data.daily.weathercode[6] == 57 || data.daily.weathercode[6] == 66 || data.daily.weathercode[6] == 67)  {
                            hetedikIkon = "img/56576667.png";
                        }   else if (data.daily.weathercode[6] == 61 || data.daily.weathercode[6] == 63 || data.daily.weathercode[6] == 65 || data.daily.weathercode[6] == 80 || data.daily.weathercode[6] == 81 || data.daily.weathercode[6] == 82)    {
                            hetedikIkon = "img/616365.png";
                        }   else if (data.daily.weathercode[6] == 71 || data.daily.weathercode[6] == 73 || data.daily.weathercode[6] == 75 || data.daily.weathercode[6] == 77 || data.daily.weathercode[6] == 85 || data.daily.weathercode[6] == 86)  {
                            hetedikIkon = "img/71737577.png";
                        }   else if (data.daily.weathercode[6] == 95 || data.daily.weathercode[6] == 96 || data.daily.weathercode[6] == 99) {
                            hetedikIkon = "img/95.png";
                        };

            var outputHetedik = `
                    
                    
            <div id="elso-nap" class="napokRow">
                <div class="mtb"><span class="">Dátum: </span><br>${data.daily.time[6]}</div>
                <div class="mtb"><img src="${hetedikIkon}"></div>
                <div class="mtb"><span class="">Max hőmérséklet: </span><br>${data.daily.temperature_2m_max[6]} <span>°C</span></div>
                <div class="mtb"><span class="">Min hőmérséklet: </span><br>${data.daily.temperature_2m_min[6]} <span>°C</span></div>  
                <div class="mtb"><span class="">Csapadék: </span><br>${data.daily.rain_sum[6]} ${data.daily_units.rain_sum}</div>  
            </div>
                    
                    
            `;


            max.innerHTML = maxOutput;
            min.innerHTML = minOutput;
            fok.innerHTML = fokOutput;
            date.innerHTML = dateOutput;
            kozep.innerHTML = `<img src="${IkonKozepLinkVege}" >`;
            
            napok.innerHTML = outputElso + outputMasodik + outputHarmadik + outputNegyedik + outputOtodik + outputHatodik + outputHetedik;
            
        }


    }
    xhr.send();


}