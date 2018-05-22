function driversWithRevenueOver(arr, revenue){
  return arr.filter(
    function(obj){
      return obj.revenue > revenue;
    }
  );
}

function driverNamesWithRevenueOver(arr, revenue){
  return driversWithRevenueOver(arr).map(
    function(obj){
      return obj.name;
    }
  );
}

function exactMatch(){
}

function exactMatchToList(){
}
