let arr = [
  ".....AAC.........L...Q..ST",
  "V....A....E..I........S...",
  "........I........ST.U.....",
  ".....E..........O..S......",

  "D.....I........TS.......A.",
  "...............I.M.....SS.",
  ".N...S.......A......I.....",
  "..S................L..MO..",

  "..S.S......A########J.M...",
  "E..########....R.......AB.",
  "#######.E.E............S.#",
  ".D......L...########......",

  "......A..EE.FI........R...",
  "........N....TU.........CE",
  ".S.UV............I...N....",
  ".I...N.....R............E."]

scramble(0,arr.length-1);

function refreshResult(x)
{
  x=x-(x%4);
  let result = "";

  for (let j = 0 ; j<26 ; j++)
  {
    let tempStr = "";
    for (let i = x ; i<x+4 ; i++)
    {
      if(arr[i].charAt(j)!='.') {tempStr+=arr[i].charAt(j);}
    }
    if (tempStr.length==0) {result+='.';}
    else if (tempStr.length>1) {result+='#';}
    else {result+=tempStr;}
  }
  let tempName = "result"+x;
  document.getElementById(tempName).innerHTML = result;
  //console.log(result);
}

function loopBackwards(x)
{
 //console.log(x);
 arr[x]+=arr[x];
 arr[x]=arr[x].slice(1,27);
 let tempStr = "str"+x;
 document.getElementById(tempStr).innerHTML = arr[x];
 refreshResult(x);
}

function loopForwards(x)
{
  //console.log(x);
  arr[x]+=arr[x];
  arr[x]=arr[x].slice(25,51);
  let tempStr = "str"+x;
  document.getElementById(tempStr).innerHTML = arr[x];
  refreshResult(x);
}

function scramble(x,y)
{
  for (let i=x ; i<y+1 ; i++)
  {
    let tempInt = Math.floor(Math.random() * 26);
    arr[i]+=arr[i];
    arr[i]=arr[i].slice(tempInt,tempInt+26);
    let tempStr = "str"+i;
    document.getElementById(tempStr).innerHTML = arr[i];
  }
  for (let i=x ; i < y ; i = i+4)
  {
    refreshResult(i);
  }
}
