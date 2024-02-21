//your JS code here. If required.
// let para = document.querySelector("#timer")


// function currentTime() {
//       let date = new Date()
//       let hour = date.getHours()
//       let min = date.getMinutes()
//       let sec = date.getSeconds()
//       let day = date.getDay()  
//       let month = date.getMonth()
//       let year = date.getFullYear()
//        let time = hour+":"+min+":"+sec
//       para.innerHTML = `${month}/${day}/${year}, ${time} `

//     return `${month}/${day}/${year}, ${time} `
// }

// if(hour>=12){
//     time=time+PM
// }

// let ans = currentTime()
// alert(ans)

// setInterval(currentTime,1000)

function currenttime(){

    let date= new Date() //This is an OBJECT
    
    let hour=date.getHours()
    
    let min=date.getMinutes()
    let sec=date.getSeconds()

    let day=date.getDay()
    let month=date.getMonth()
    let year=date.getFullYear()

    let Arrtime=convertTime(hour,min,sec)  //CALING CONVERT TIME FUNCTION TO GET VALUES in Array form
    for(let i=0;i<3;i++){
        Arrtime[i]=addZero(Arrtime[i])
    }

    let result=`${month}/${day}/${year}, ${Arrtime[0]}:${Arrtime[1]}:${Arrtime[2]} ${Arrtime[3]}`
    timer.innerHTML=result
}

setInterval(currenttime, 1000)

function convertTime(hr,min,sc)  //FUNCTION TO CONVERT TIME
{
    if (hr>12) {
        hr=hr-12
        return [hr,min, sc, "PM"]
    }
    else if(hr==0){
        return ["12",min, sc, "AM"]
    }
    else if(hr<12){
        return [hr,min, sc, "AM"]
    }
    else if(hr==12){
        return [hr,min, sc, "PM"]
    }
}

function addZero(k)
{
    if(k<10){
        return "0"+k
    }
    else{
        return k
    }
}

