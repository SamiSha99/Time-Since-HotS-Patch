// If you are inspecting this, don't call me out please!!! :(
// Documents all patches, taken from https://heroespatchnotes.com/patch/summary.html
// with some specifications added (like almost exact date of release).
// First entry is the newest while last is the oldest.
const patchDateMaps = [
        {version: "2.55.0", date: "Tue Nov 30 2021 19:33:11 GMT", tag:["event", "balance", "rework"]},
        {version: "2.54.4", date: "Mon Sep 27 2021 18:11:00 GMT", tag:["balance"]},
        {version: "2.54.3", date: "Fri Aug 20 2021 17:08:58 GMT", tag:["balance"]},
        {version: "2.54.2", date: "Tue Jul 20 2021 18:14:00 GMT", tag:["balance"]},
        {version: "2.54.1", date: "Tue Jun 15 2021 17:25:26 GMT", tag:["balance"]},
        {version: "2.54.0", date: "Tue May 18 2021 16:33:00 GMT", tag:["event", "balance","rework"]},
        {version: "2.53.2", date: "Wed Mar 03 2021 01:17:00 GMT", tag:["balance"]},
        {version: "2.53.1", date: "Tue Jan 19 2021 23:43:00 GMT", tag:["balance"]},
        {version: "2.53.0", date: "Tue Dec 01 2020 19:13:45 GMT", tag:["hero", "hogger"]},
        {version: "2.52.2", date: "Wed Nov 04 2020 20:30:00 GMT", tag:["balance"]},
        {version: "2.52.1", date: "Wed Oct 07 2020 22:10:27 GMT", tag:["balance"]},
        {version: "2.52.0", date: "Tue Sep 08 2020 16:52:00 GMT", tag:["rework", "anomaly"]},
        {version: "2.51.2", date: "Wed Aug 19 2020 20:42:28 GMT", tag:["balance"]},
        {version: "2.51.1", date: "Wed Jul 15 2020 20:36:00 GMT", tag:["balance"]},
        {version: "2.51.0", date: "Tue Jun 23 2020 16:42:27 GMT", tag:["hero","mei","rework","anomaly"]},
        {version: "2.50.2", date: "Wed Jun 03 2020 20:35:00 GMT", tag:["balance"]},
        {version: "2.50.1", date: "Wed May 06 2020 20:37:00 GMT", tag:["balance","rework"]},
        {version: "2.50.0", date: "Tue Apr 14 2020 16:40:00 GMT", tag:["rework","anomaly"]},
        {version: "2.49.4", date: "Wed Mar 11 2020 21:35:00 GMT", tag:["balance","rework"]},
        {version: "2.49.3", date: "Wed Feb 12 2020 21:44:44 GMT", tag:["balance"]},
        {version: "2.49.2", date: "Wed Jan 22 2020 22:47:00 GMT", tag:["balance"]},
        {version: "2.49.1", date: "Mon Dec 16 2019 17:52:00 GMT", tag:["balance"]},
        {version: "2.49.0", date: "Tue Dec 03 2019 17:56:00 GMT", tag:["hero","deathwing","anomaly"]},
        {version: "2.48.4", date: "Fri Nov 22 2019 21:40:00 GMT", tag:["balance"]},
        {version: "2.48.2", date: "Tue Oct 15 2019 17:52:00 GMT", tag:["balance"]},
        {version: "2.48.0", date: "Tue Sep 24 2019 14:59:00 GMT", tag:["balance","rework"]},
        {version: "2.47.2", date: "Wed Aug 28 2019 20:39:45 GMT", tag:["balance"]},
        {version: "2.47.0", date: "Tue Aug 06 2019 15:06:00 GMT", tag:["hero","qhira"]},
        {version: "2.46.1", date: "Wed Jul 10 2019 21:02:00 GMT", tag:["balance"]},
        {version: "2.46.0", date: "Tue Jun 18 2019 16:14:00 GMT", tag:["rework"]},
        {version: "2.45.1", date: "Wed May 22 2019 23:35:00 GMT", tag:["balance"]},
        {version: "2.45.0", date: "Tue Apr 30 2019 15:59:00 GMT", tag:["hero","anduin"]},
        {version: "2.44.1", date: "Wed Apr 17 2019 20:48:00 GMT", tag:["balance"]},
        {version: "2.44.0", date: "Tue Mar 26 2019 16:16:18 GMT", tag:["rework","roles"]},
        {version: "2.43.2", date: "Wed Feb 27 2019 23:02:00 GMT", tag:["balance"]},
        {version: "2.43.0", date: "Tue Feb 12 2019 17:00:00 GMT", tag:["rework"]},
        {version: "2.42.1", date: "Wed Jan 23 2019 18:32:00 GMT", tag:["balance"]},
        {version: "2.42.0", date: "Tue Jan 08 2019 16:30:00 GMT", tag:["hero","imperius"]},
        {version: "2.41.2", date: "Wed Dec 19 2018 18:00:00 GMT", tag:["balance"]},

        // Jeez, the difference from here and above speaks to itself...
        {version: "2.41.0", date: "Tue Dec 11 2018 16:23:00 GMT", tag:["major","rework"]},
        {version: "2.40.1", date: "Wed Nov 28 2018 18:00:00 GMT", tag:["balance"]},
        {version: "2.40.0", date: "Tue Nov 13 2018 16:39:00 GMT", tag:["hero","orphea"]},
        {version: "2.39.2", date: "Wed Oct 31 2018 17:00:00 GMT", tag:["balance"]},
        {version: "2.39.0", date: "Tue Oct 16 2018 23:00:00 GMT", tag:["hero","malganis"]},
        {version: "2.38.2", date: "Mon Oct 08 2018 17:29:00 GMT", tag:["balance"]},
        {version: "2.38.0", date: "Tue Sep 25 2018 16:10:00 GMT", tag:["rework,map rework"]},
        {version: "2.37.1", date: "Mon Sep 17 2018 17:00:00 GMT", tag:["balance"]},
        {version: "2.37.0", date: "Tue Sep 04 2018 17:00:00 GMT", tag:["rework"]},
        {version: "2.36.2", date: "Wed Aug 22 2018 17:00:00 GMT", tag:["balance, rework"]},
        {version: "2.36.0", date: "Tue Aug 07 2018 17:00:00 GMT", tag:["hero","whitemane","rework","balance"]},
        {version: "2.35.1", date: "Wed Jul 25 2018 16:00:00 GMT", tag:["balance"]},
        {version: "2.35.0", date: "Tue Jul 10 2018 14:30:00 GMT", tag:["balance,rework"]},
        
        // I have no idea, I've looked everywhere and it doesn't have a version code number, oh well..
        {version: "Unknown", date: "Tue Jul 03 2018 17:30:00 GMT", tag:["balance"]},
        
        {version: "2.34.3", date: "Wed Jun 27 2018 16:50:00 GMT", tag:["balance"]},
        {version: "2.34.0", date: "Tue Jun 12 2018 15:00:00 GMT", tag:["hero","yrel","map","alterac pass","balance"]},
        {version: "2.33.1", date: "Wed Jun 06 2018 16:30:00 GMT", tag:["balance"]},
        {version: "2.33.0", date: "Tue May 22 2018 15:30:00 GMT", tag:["rework"]},
        {version: "2.32.2", date: "Wed May 09 2018 16:30:00 GMT", tag:["balance"]},
        {version: "2.32.0", date: "Tue Apr 24 2018 14:40:00 GMT", tag:["hero","deckard cain","balance"]},
        {version: "2.31.2", date: "Wed Apr 11 2018 17:00:00 GMT", tag:["balance"]},
        {version: "2.31.0", date: "Tue Mar 27 2018 14:35:00 GMT", tag:["hero","fenix","balance","rework"]},
        {version: "2.30.6", date: "Wed Mar 21 2018 16:36:00 GMT", tag:["balance"]},
        {version: "2.30.4", date: "Tue Mar 06 2018 15:30:00 GMT", tag:["balance", "rework"]},
        {version: "2.30.3", date: "Wed Feb 21 2018 17:30:00 GMT", tag:["balance","voice chat"]},
        {version: "2.30.1", date: "Fri Feb 09 2018 17:49:00 GMT", tag:["balance"]},
        {version: "2.30.0", date: "Tue Feb 06 2018 16:00:00 GMT", tag:["hero","maiev","balance","rework"]},
        {version: "2.29.9", date: "Wed Jan 24 2018 17:55:00 GMT", tag:["balance"]},
        {version: "2.29.8", date: "Tue Jan 16 2018 18:00:00 GMT", tag:["rework"]},
        {version: "2.29.7", date: "Tue Jan 09 2018 16:30:00 GMT", tag:["hero","blaze","balance","rework"]},
        {version: "2.29.5", date: "Wed Dec 20 2017 20:30:00 GMT", tag:["balance"]},
        {version: "2.29.3", date: "Tue Dec 12 2017 16:00:00 GMT", tag:["major","hero","hanzo","balance","rework",]},
        {version: "2.29.2", date: "Wed Nov 29 2017 17:40:00 GMT", tag:["balance", "rework"]},
        {version: "2.29.0", date: "Tue Nov 14 2017 15:30:00 GMT", tag:["hero","alexstrasza","rework"]},
        {version: "2.28.5", date: "Wed Nov 01 2017 16:35:00 GMT", tag:["balance"]},
        {version: "2.28.3", date: "Tue Oct 17 2017 16:00:00 GMT", tag:["hero","junkrat","rework"]},
        {version: "2.28.2", date: "Wed Oct 11 2017 16:35:00 GMT", tag:["balance"]},
        {version: "2.28.0", date: "Tue Sep 26 2017 16:23:00 GMT", tag:["hero","ana","map","volskaya foundry","balance","rework"]},
        {version: "2.27.5", date: "Mon Sep 18 2017 16:55:00 GMT", tag:["balance"]},
        {version: "2.27.3", date: "Tue Sep 05 2017 15:00:00 GMT", tag:["hero","kelthuzad","balance","rework"]},
        {version: "2.27.2", date: "Wed Aug 23 2017 16:50:00 GMT", tag:["balance"]},
        {version: "2.27.0", date: "Tue Aug 08 2017 14:45:00 GMT", tag:["hero","garrosh","balance"]},
        {version: "2.26.4", date: "Wed Jul 26 2017 16:30:00 GMT", tag:["balance"]},
        {version: "2.26.3", date: "Tue Jul 11 2017 18:40:00 GMT", tag:["stukov","balance","rework"]},
        {version: "2.26.1-2", date: "Wed Jun 28 2017 16:30:00 GMT", tag:["balance"]},
        {version: "2.26.0", date: "Tue Jun 13 2017 16:00:00 GMT", tag:["malthael","balance","rework"]},
        {version: "2.25.5", date: "Wed May 31 2017 16:39:49 GMT", tag:["balance"]},
        {version: "2.25.4", date: "Tue May 16 2017 16:30:00 GMT", tag:["hero","d.va","balance","rework"]},
        {version: "2.25.3", date: "Wed May 10 2017 16:31:00 GMT", tag:["balance"]},

        // 2.0 launch
        {version: "2.25.0", date: "Tue Apr 25 2017 18:50:00 GMT", tag:["major","hero","genji","map","hanamura","balance","rework"]},
        {version: "24.6", date: "Thu Apr 20 2017 16:30:00 GMT", tag:["balance"]},
        {version: "24.4", date: "Tue Apr 04 2017 16:40:00 GMT", tag:["balance","rework"]},
        {version: "24.2", date: "Tue Mar 28 2017 16:43:00 GMT", tag:["balance"]},
        {version: "24.0", date: "Tue Mar 14 2017 16:00:00 GMT", tag:["hero","probius","balance","rework"]},
        {version: "23.5", date: "Mon Feb 27 2017 18:00:00 GMT", tag:["balance"]},
        {version: "23.3", date: "Tue Feb 14 2017 18:00:00 GMT", tag:["hero","lucio","balance","rework"]},
        {version: "23.1", date: "Fri Jan 27 2017 17:30:00 GMT", tag:["balance"]},
        {version: "23.0", date: "Tue Jan 24 2017 16:00:00 GMT", tag:["hero","valeera","balance","rework"]},
        {version: "22.6", date: "Fri Jan 06 2017 17:30:00 GMT", tag:["balance"]},
        {version: "22.5", date: "Wed Jan 04 2017 15:45:00 GMT", tag:["hero","zuljin","balance"]},
        {version: "22.4", date: "Tue Dec 20 2016 17:00:00 GMT", tag:["balance"]},
        {version: "22.3", date: "Wed Dec 14 2016 16:00:00 GMT", tag:["major","hero","ragnaros","balance","map","rework"]},
        {version: "22.2", date: "Tue Dec 06 2016 17:00:00 GMT", tag:["balance"]},
        {version: "22.0", date: "Tue Nov 15 2016 16:30:00 GMT", tag:["hero","varian","balance","rework"]},
        {version: "21.2", date: "Thu Nov 10 2016 00:42:00 GMT", tag:["balance"]},
        {version: "21.1", date: "Tue Oct 25 2016 16:36:00 GMT", tag:["balance"]},
        {version: "21.0", date: "Tue Oct 18 2016 15:00:00 GMT", tag:["hero","samuro"]},
        {version: "20.6", date: "Wed Oct 12 2016 17:00:00 GMT", tag:["balance"]},
        {version: "20.2", date: "Thu Sep 29 2016 16:42:00 GMT", tag:["hero","zarya","map","warhead junction","balance","rework"]},
        {version: "20.0", date: "Tue Sep 13 2016 13:00:00 GMT", tag:["hero","alarak","map","braxis holdout","balance","rework"]},
        {version: "19.5", date: "Mon Aug 22 2016 22:50:00 GMT", tag:["balance"]},
        {version: "19.4", date: "Tue Aug 09 2016 16:45:00 GMT", tag:["hero","auriel","balance"]},
        {version: "19.3", date: "Wed Jul 27 2016 17:15:00 GMT", tag:["balance"]},
        {version: "19.0", date: "Tue Jul 12 2016 15:05:00 GMT", tag:["hero","guldan","balance","rework"]},
        {version: "18.6", date: "Wed Jun 29 2016 16:35:00 GMT", tag:["balance"]},
        {version: "18.5", date: "Tue Jun 21 2016 16:42:00 GMT", tag:["balance"]},
        {version: "18.4", date: "Tue Jun 14 2016 15:00:00 GMT", tag:["hero","medivh","balance"]},
        {version: "18.3", date: "Thu Jun 02 2016 17:52:00 GMT", tag:["balance"]},
        {version: "18.0", date: "Tue May 17 2016 15:00:00 GMT", tag:["hero","chromie","balance","rework"]},
        {version: "17.5", date: "Wed May 04 2016 17:00:00 GMT", tag:["balance"]},
        {version: "17.4", date: "Wed Apr 27 2016 16:30:00 GMT", tag:["balance"]},
        {version: "17.2", date: "Tue Apr 19 2016 17:30:00 GMT", tag:["hero","tracer","balance"]},
        {version: "17.1", date: "Tue Apr 12 2016 18:00:00 GMT", tag:["balance"]},
        {version: "17.0", date: "Tue Mar 29 2016 15:45:00 GMT", tag:["hero","dehaka","map","tomb of the spider queen","balance","rework"]},
        {version: "16.5", date: "Wed Mar 16 2016 16:45:00 GMT", tag:["balance"]},
        {version: "16.4", date: "Wed Mar 09 2016 17:45:00 GMT", tag:["balance"]},
        {version: "16.3", date: "Tue Mar 01 2016 18:00:00 GMT", tag:["hero","xul","balance"]},
        {version: "16.2", date: "Wed Feb 17 2016 17:35:00 GMT", tag:["balance"]},
        {version: "16.1", date: "Wed Feb 10 2016 17:30:00 GMT", tag:["balance"]},
        {version: "16.0", date: "Tue Feb 02 2016 16:15:00 GMT", tag:["hero","liming","balance","rework"]},
        {version: "15.7", date: "Wed Jan 27 2016 19:00:00 GMT", tag:["balance"]},
        {version: "15.6", date: "Wed Jan 20 2016 21:00:00 GMT", tag:["balance"]},
        {version: "15.5", date: "Tue Jan 12 2016 19:15:00 GMT", tag:["hero","greymane"]},
        {version: "15.3", date: "Tue Dec 15 2015 15:15:00 GMT", tag:["hero","lunara","balance"]},
        {version: "15.2", date: "Tue Dec 08 2015 19:00:00 GMT", tag:["balance"]},
        {version: "15.0", date: "Tue Nov 17 2015 16:15:00 GMT", tag:["hero","cho","gall","map","towers of doom"]},
        {version: "14.2", date: "Tue Oct 20 2015 18:19:00 GMT", tag:["hero","artanis","balance"]},
        {version: "14.0", date: "Tue Oct 06 2015 13:00:00 GMT", tag:["hero","morales","balance"]},
        {version: "13.3", date: "Tue Sep 08 2015 21:00:00 GMT", tag:["hero","rexxar (& misha)","balance"]},
        {version: "13.0", date: "Tue Aug 18 2015 15:00:00 GMT", tag:["hero","kharazim","map","battlefield of eternity","balance"]},
        {version: "12.0", date: "Tue Jun 30 2015 22:45:00 GMT", tag:["hero","leoric","butcher","infernal shrines","balance","rework"]},
        {version: "11.1", date: "Tue Jun 02 2015 21:30:00 GMT", tag:["1.0 launch","major","hero","johanna"]},
        {version: "11.0", date: "Tue May 12 2015 13:15:00 GMT", tag:["hero","kaelthas","balance","rework"]},
        {version: "10.0", date: "Tue Mar 24 2015 13:30:00 GMT", tag:["hero","sylvanas","map","tomb of the spider queen","balance","rework"]},
        {version: "9.0", date: "Tue Feb 10 2015 15:30:00 GMT", tag:["hero","the lost vikings","balance","rework"]},
        {version: "8.0", date: "Tue Jan 13 2015 16:00:00 GMT", tag:["hero","thrall","map","sky temple","balance","rework"]},
        {version: "7.1", date: "Tue Dec 02 2014 17:00:00 GMT", tag:["hero","jaina","rework"]},
        {version: "6.5", date: "Tue Oct 07 2014 17:00:00 GMT", tag:["hero","azmodan","anubarak","balance","rework"]},
        {version: "5.0", date: "Wed Sep 10 2014 19:00:00 GMT", tag:["hero","chen","balance"]},
        {version: "2.5", date: "Wed Jul 23 2014 19:00:00 GMT", tag:["hero","rehgar","map","garden of terror","balance"]},
        {version: "2.5", date: "Wed Jun 25 2014 18:00:00 GMT", tag:["hero","zagara","balance","rework"]},
        {version: "2.5", date: "Thu May 22 2014 17:00:00 GMT", tag:["hero","murky","balance","rework"]},
        {version: "2.5", date: "Tue Apr 15 2014 22:00:00 GMT", tag:["hero","li li","brightwing","balance"]}
    ]

var updateTimer;

function updateMainTime() {
    let numContainer = document.getElementById("number");
    numContainer.innerHTML = getTimeBetweenPatches(Date.now(), convertDateToEpoch(patchDateMaps[0].date));
    updateTimer = setTimeout(() => {
        updateMainTime();    
    }, 1000);
}

updateMainTime();

function getTimeBetweenPatches(nextPatchTime, prevPatchTime) {
    let seconds = Number(nextPatchTime - prevPatchTime) / 1000;

    let d = Math.floor(seconds / (3600*24));
    let h = Math.floor(seconds % (3600*24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);

    let dDisplay = (d > 0 ? Math.trunc(d / 10) != 0 ? String(d) : "0" + String(d) : "00") + ":";
    let hDisplay = (h > 0 ? Math.trunc(h / 10) != 0 ? String(h) : "0" + String(h) : "00") + ":";
    let mDisplay = (m > 0 ? Math.trunc(m / 10) != 0 ? String(m) : "0" + String(m) : "00") + ":";
    let sDisplay = s > 0 ? Math.trunc(s / 10) != 0 ? String(s) : "0" + String(s) : "00";

    return dDisplay + hDisplay + mDisplay + sDisplay;
}

function showPatchDatesList() {

    clearTimeout(updateTimer);

    let container = document.getElementById("container");
    let table = document.createElement("table");
    
    // Remove everything
    container.innerHTML = "";

    // Create the header row
    let tr = table.insertRow();
    tr.appendChild(thCreator("Tag(s)"));
    tr.appendChild(thCreator("Patch Version"));
    tr.appendChild(thCreator("Release Date"));
    tr.appendChild(thCreator("Time Taken"));
    tr.classList.add("fade-in-anim-cell");

    const rowAmount = 4;

    let thead = table.createTHead();
    thead.appendChild(tr);
    table.appendChild(thead);

    let cell;

    for(i = 0; i < patchDateMaps.length; i++)
    {
        tr = table.insertRow();
        tr.classList.add("fade-in-anim-cell");
        tr.style.animationDelay = String(0.01 + i * 0.01) + "s";
        
        for(u = 0; u < rowAmount; u++)
        {
            cell = tr.insertCell();
            cell.appendChild(getCellValue(i, u));
        }
        table.appendChild(tr);
    }

    container.appendChild(table);

    document.getElementById("exit").style.display = "block";
}

function thCreator(inputInnerHTML = "")
{
    th = document.createElement("th");
    th.innerHTML = inputInnerHTML
    return th;
}

function hidePatchDatesList()
{
    document.getElementById("container").innerHTML = '<h1 class="intro">It\'s been...</h1>' +
    '<div class="time" id="time">' + 
        '<h1><img src="./images/hots.png" /><a id="number">00:00:00:00</a><img src="./images/hots.png" /></h1>' + 
    '</div>' +
    '<h1 class="outro">since the last <i><u>Heroes of the Storm</u></i> patch.</h1>' +
    '<div>' +
        '<button class="showlist" onclick="showPatchDatesList()">Show Patch List</button>' + 
        '<button class="showlist">' + 
            '<a href="https://github.com/SamiSha99/Time-Since-HotS-Patch/" target="_blank">' +
                '<i class="fab fa-github"></i>' + 
            '</a>' + 
        '</button>' + 
    '</div>';
    document.getElementById("exit").style.display = "none";
    updateMainTime();
}

function getCellValue(i, u)
{
    let patch = patchDateMaps[i];
    let div = document.createElement("div");
    switch(u)
    {
        case 1:
            div.innerHTML =  patch.version == "Unknown" ? patch.version : "v" + patch.version;
            return div;
        case 0:
            if(patch.tag == undefined) return div;
            div.classList.add("tooltip","info");
            let span = document.createElement("span");
            span.classList.add("tooltiptext");
            span.innerHTML = setupTags(patch.tag);
            div.appendChild(span);
            return div;    
        case 2:
            div.innerHTML = getSimplifiedDate(patch.date)
            return div;
        case 3:

            if(i + 1 == patchDateMaps.length) return div;

            let prevPatch = patchDateMaps[i+1];
            div.innerHTML = getTimeBetweenPatches(convertDateToEpoch(patch.date), convertDateToEpoch(prevPatch.date))
            return div;
    }
}

function getCellClass(i, u)
{
    let patch = patchDateMaps[i];
    
    switch(u)
    {
        case 1:
            if(patch.tag == undefined) return "";
        return "tag-cell";    
    }

    return "";
}

function setupTags(tagList)
{
    let tagString = "";
    for(t = 0; t < tagList.length; t++)
    {
        tagString += tagList[t];
        if(t < tagList.length - 1)
            tagString += ", ";
    }
    return tagString;
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Returns -> MM-DD-YYYY
function getSimplifiedDate(dString)
{
    let d = new Date(dString);
    return monthNames[d.getUTCMonth()] + "-" + d.getUTCDate() + "-" + d.getUTCFullYear(); 
}

function convertDateToEpoch(d) {
    return new Date(d).getTime();
}

function printGapBetweenPatches() {
    let date1, date2;

    for(i = 0; i < patchDateMaps.length - 1; i++) {
        date1 = new Date(patchDateMaps[i].date).getTime() / 1000;
        date2 = new Date(patchDateMaps[i + 1].date).getTime() / 1000;
        console.log("Time gap between patch " + patchDateMaps[i].version + " and patch " + patchDateMaps[i + 1].version +  " is " + getTimeBetweenPatches(date1, date2));
    }
}