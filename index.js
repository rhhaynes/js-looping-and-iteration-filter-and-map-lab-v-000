function driversWithRevenueOver(arr, revenue){
  return arr.filter(
    function(obj){
      return obj.revenue > revenue;
    }
  );
}

function driverNamesWithRevenueOver(arr, revenue){
  return driversWithRevenueOver(arr, revenue).map(
    function(obj){return obj.name;}
  );
}

function exactMatch(){
}

function exactMatchToList(){
}
