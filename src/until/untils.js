export default function until(data) {
   let nowdata = new Date(data);
   let s = nowdata.getFullYear()+'-'+(nowdata.getMonth()+1)+'-'+nowdata.getDay()+' '+nowdata.getHours()+':'+nowdata.getMonth()+';'+nowdata.getSeconds();
   return s;
}